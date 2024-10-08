#!/usr/bin/env python3

from app import app

from models import db, Workouts, Category

from faker import Faker

faker = Faker()

if __name__ == '__main__':
    with app.app_context():
        Workouts.query.delete()
        Category.query.delete()
        print("Seeding database...")
        print("Creating Categories")
        print("Creating Workouts")

        chest_category = Category(name="Chest")
        abdomen_category = Category(name="Abs")
        back_category = Category(name="Back")
        bicep_category = Category(name="Bicep")
        triceps_category = Category(name="Triceps")
        cardio_category = Category(name="Cardio")
        forearms_category = Category(name="Forearms")
        quads_category = Category(name="Quads")
        hamstring_category = Category(name="Hamstring")
        glutes_category = Category(name="Glutes")
        calves_category = Category(name="Calves")
        shoulders_category = Category(name="Shoulders")

        categories = [chest_category, abdomen_category, back_category, bicep_category, triceps_category, cardio_category, forearms_category, quads_category, hamstring_category, glutes_category, calves_category, shoulders_category]
        db.session.add_all(categories)


        chest = Category.query.filter_by(name="Chest").first()
        abdomen = Category.query.filter_by(name="Abs").first()
        back = Category.query.filter_by(name="Back").first()
        bicep = Category.query.filter_by(name="Bicep").first()
        triceps = Category.query.filter_by(name="Triceps").first()
        cardio = Category.query.filter_by(name="Cardio").first()
        forearms = Category.query.filter_by(name="Forearms").first()
        quads = Category.query.filter_by(name="Quads").first()
        hamstring = Category.query.filter_by(name="Hamstring").first()
        glutes = Category.query.filter_by(name="Glutes").first()
        calves = Category.query.filter_by(name="Calves").first()
        shoulders = Category.query.filter_by(name="Shoulders").first()


        # chest exercises 
        pushup = Workouts(name = "Pushup", category_id = chest.id, description = "A push-up is a calisthenic exercise that involves raising and lowering the body while lying face down by bending and straightening the arms.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA", picture_url="https://www.bodybuilding.com/images/2016/may/how-and-why-to-do-push-ups-tablet-960x540.jpg")
        barbell_bench_press = Workouts(name = "Barbell bench press", category_id = chest.id, description = "A weightlifting exercise that involves lying on a bench and pushing a weight upward using your hands.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA", picture_url = "https://steelsupplements.com/cdn/shop/articles/shutterstock_193409486_1000x.jpg?v=1639396039")
        incline_bench_press = Workouts(name = "Incline bench press", category_id = chest.id, description = "It's performed on an incline bench that's usually set at a 30–45 degree angle, targeting the upper chest.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA", picture_url = "https://fitnessvolt.com/wp-content/uploads/2018/05/Incline-Bench-Press-Guide.jpg")
        machine_flye = Workouts(name = "Machine flye", category_id = chest.id, description = "An upper body strength training exercise that targets the chest, deltoids, and triceps.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/12/pec-deck-flye-1109.jpg?quality=86&strip=all")
        smith_machine_bench_press = Workouts(name = "Smith machine bench press", category_id = chest.id, description = "a compound exercise that uses a Smith machine and a bench to press a barbell above you.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://barbend.com/wp-content/uploads/2023/09/bench-pressing-smith-machine-1881062224.jpg")
        incline_smith_machine_bench_press = Workouts(name = "Incline smith machine bench press", category_id = chest.id, description = "Preformed on an incline bench set at a 30-45 degree angle targeting the upper chest on a smith machine",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://i.ytimg.com/vi/8urE8Z8AMQ4/sddefault.jpg")
        dumbell_incline_bench_press = Workouts(name = "Dumbbell incline bench press", category_id = chest.id, description = "An upper body exercise that targets the chest, shoulders, and triceps.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://www.dmoose.com/cdn/shop/articles/1_8c4ca767-1b7d-4981-9c20-c7d0b744dca5.jpg?v=1648733684")
        dumbell_bench_press = Workouts(name = "Dumbbell bench press", category_id = chest.id, description = "An upper-body exercise that uses dumbbells and a bench to target the chest, shoulders, and arms.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://repfitness.com/cdn/shop/articles/Adjustable_Dumbbell_-_lifestyle_-_840-Edit_2_1100x.jpg?v=1727308049")
        dumbell_incline_flye = Workouts(name = "Dumbbell incline flye", category_id = chest.id, description = "The dumbbell incline fly, also known as the incline chest fly or incline pec fly, is an exercise that works the chest, anterior deltoids, and biceps.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://i.ytimg.com/vi/bDaIL_zKbGs/maxresdefault.jpg")
        cable_lower_chest_raise = Workouts(name = "Cable lower chest raise", category_id = chest.id, description = "A cable lower chest raise is a strength exercise that involves using a low pulley cable machine to squeeze your lower chest",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://breakingmuscle.com/wp-content/uploads/2023/08/Shutterstock_2169225749.jpg")
        cable_upper_chest_raise = Workouts(name = "Cable upper chest raise", category_id = chest.id, description = "Cable upper chest exercises can target different parts of the chest by adjusting the cable height and your arm position",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://www.seannal.com/wp-content/uploads/2015/10/standing-incline-cable-fly.jpg")
        machine_incline_chest_press = Workouts(name = "Machine incline chest press", category_id = chest.id, description = "a compound exercise that targets the upper chest, front shoulders, back of the arms, and serratus anterior.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://hips.hearstapps.com/hmg-prod/images/machine-press-still-1-1674857470.png")
        dumbbell_pullover = Workouts(name = "Dumbbell pullover", category_id = chest.id, description = "a weightlifting exercise that works the chest, shoulders, back, and abs.",videourl = "https://www.youtube.com/watch?v=mm6_WcoCVTA",picture_url = "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-pullover.jpg")

        #bicep exercises
        dumbbell_bicep_curl = Workouts(name = "Dumbbell bicep curl", category_id = bicep.id, description = "hold a dumbbell with your palm facing upward. Slowly curl the weight up by bending your elbow, keeping your elbow close to your body. Then slowly lower the weight to the starting position.", videourl = "",picture_url = "https://cdn.muscleandstrength.com/sites/default/files/standing-dumbbell-curl.jpg")
        barbell_preacher_curl = Workouts(name = "Barbell preacher curl", category_id = bicep.id, description = "a bicep exercise that isolates the biceps and is performed on a preacher bench.", videourl = "",picture_url = "https://www.trainheroic.com/wp-content/uploads/2023/01/AdobeStock_186644984-TH-jpg.webp")
        preacher_curl_machine = Workouts(name = "Preacher curl machine", category_id = bicep.id, description = "a piece of exercise equipment that allows you to isolate your biceps by performing curls while seated on an angled bench.", videourl = "",picture_url = "https://workouthealthy.com/cdn/shop/files/BS-S2AC_Body-Solid-Preacher-Curl-Machine-3.webp?v=1704927682&width=720")
        ez_bar_curl = Workouts(name = "EZ bar curl", category_id = bicep.id, description = "a multi-angled barbell whose design focuses on working your triceps and biceps while helping to reduce pressure and stress from your elbows and wrist.", videourl = "",picture_url = "https://hortonbarbell.com/wp-content/uploads/2022/11/How-To-Do-EZ-Bar-Curls.png")
        barbell_curl = Workouts(name = "Barbell curl", category_id = bicep.id, description = "A barbell curl is a variation of the biceps curl that uses a weighted barbell.", videourl = "",picture_url = "https://app-media.fitbod.me/v2/31/images/landscape/0_960x540.jpg")

         
        #Leg exercise
        barbell_back_squat = Workouts(name = "Barbell back Squat", category_id = quads.id, description = "a compound exercise that activates the lower body's muscles, including the hamstrings, glutes, and lower back.", videourl = "",picture_url = "https://live.staticflickr.com/5740/31010858436_edce0ef0fb_z.jpg")
        machine_leg_extension = Workouts(name = "Machine leg extension", category_id = quads.id, description = "a lever machine designed to isolate your quads by doing a knee extension with weights.", videourl = "",picture_url = "https://watsongym.co.uk/wp-content/uploads/2023/03/Leg-Extension-Leg-Curl-1.jpg")
        leg_press = Workouts(name = "Leg press", category_id =quads.id, description = "a seated exercise that uses a weighted platform to work the lower body muscles.", videourl = "",picture_url = "https://asphaltgreen.org/images/uploads/posts/_large/Leg_Press_Lowered.jpg")
        lying_leg_curl = Workouts(name = "Lying leg curl", category_id = hamstring.id, description = "an exercise that strengthens the hamstrings and glutes while keeping the upper body still.", videourl = "",picture_url = "https://watsongym.co.uk/wp-content/uploads/2023/03/IMG_9973.jpg")

        #back exercises 
        lat_pulldown = Workouts(name = "Lat pulldown", category_id = back.id, description = "a popular exercise that strengthens the upper body and back muscles.", videourl = "",picture_url = "https://steelsupplements.com/cdn/shop/articles/Lat_pulldowns_machine_-_cover_-_shutterstock_2137570149_1600x.jpg?v=1661886914")
        barbell_bent_over_row = Workouts(name = "Barbell bent over row", category_id = back.id, description = "a compound exercise that works muscles in both the upper and lower body.", videourl = "",picture_url = "https://bretcontreras.com/wp-content/uploads/basic-bent-over-row.png")
        pullup = Workouts(name = "Pullup", category_id = back.id, description = "a challenging upper-body exercise that involves gripping a bar and pulling yourself up until your chin is above the bar.", videourl = "",picture_url = "https://steelsupplements.com/cdn/shop/articles/shutterstock_489862333_1000x.jpg?v=1628507960")
        barbell_deadlift = Workouts(name = "Barbell deadlift", category_id = back.id, description = "a strength training exercise that involves lifting a barbell from the ground to hip level, and then returning it to the ground.", videourl = "",picture_url = "https://miro.medium.com/v2/resize:fit:1024/0*UkQCo1eLsXjoXn4v.jpg")
        
        workouts = [pushup, barbell_bench_press, incline_bench_press, machine_flye, smith_machine_bench_press, incline_smith_machine_bench_press, dumbell_incline_bench_press, dumbell_bench_press, dumbell_incline_flye, cable_lower_chest_raise, cable_upper_chest_raise, machine_incline_chest_press, dumbbell_pullover, dumbbell_bicep_curl, dumbbell_bicep_curl, preacher_curl_machine, ez_bar_curl, barbell_curl, barbell_back_squat, machine_leg_extension, leg_press, lying_leg_curl,lat_pulldown, barbell_bent_over_row, pullup, barbell_deadlift]
        db.session.add_all(workouts)


        db.session.commit()

        print("Seeding complete!")
