import os
from flask import Flask, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import logging


from models import db, User, Workouts, Program, Category

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

bcrypt = Bcrypt(app)

migrate = Migrate(app, db)

db.init_app(app)

# get one workout from the database
@app.get("/api/workouts/<string:workout_name>")
def get_workout(workout_name):
    workout = Workouts.query.filter_by(name=workout_name).first()
    if workout:
        return workout.to_dict(), 200
    return {"message": "Workout not found"}, 404

# get all workouts from the database
@app.get("/api/workouts")
def get_all_workouts():
    return [i.to_dict() for i in Workouts.query.all()], 200

#creating a new program here
@app.post("/api/programs")
def create_program():
    data = request.get_json()
    program_name = data.get("name")
    user_id = session.get("user_id")

    if not program_name:
        return {"message": "Program name is required"}, 400

    if not user_id:
        return {"message": "User not authenticated"}, 401

    new_program = Program(name=program_name, user_id=user_id)
    db.session.add(new_program)
    db.session.commit()

    return new_program.to_dict(), 201

#creating a new user
@app.post("/api/users")
def create_user():
    try:
        new_user = User(username=request.json['username'], first_name=request.json['first_name'], last_name=request.json['last_name'], email=request.json['email'])
        new_user._hashed_password = bcrypt.generate_password_hash(request.json['_hashed_password']).decode('utf-8')
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return new_user.to_dict(), 201
    except Exception as e:
        return { 'error': str(e) }, 406


#getting the user id by checking the session
@app.get('/api/get-session')
def get_session():
    user_id = session.get("user_id")
    if user_id:
        user = User.query.get(user_id)
        if user:
            return user.to_dict(), 200
    return {}, 204

#logging into your account
@app.post("/api/login")
def login():
    username = request.json.get("user")
    password = request.json.get("password")
    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password(user._hashed_password, password):
        session["user_id"] = user.id
        return user.to_dict(), 200
    else:
        return {"message": "Username or password is invalid"}, 401
#logging out of your account
@app.delete("/api/logout")
def logout():
    session.pop("user_id")
    return {}, 204
        
if __name__ == '__main__':
    app.run(port=5555, debug=True)
