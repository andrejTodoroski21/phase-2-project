import os
from flask import Flask, request, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt


from models import db, User, Workouts, Program, Category

app = Flask(__name__)
# app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

# bcrypt = Bcrypt(app)

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

        
if __name__ == '__main__':
    app.run(port=5555, debug=True)
