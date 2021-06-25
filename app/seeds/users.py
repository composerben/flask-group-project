from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    demoBen = User(username='Ben', email='demoBen@aa.io',
                   password='password')
    natureFan = User(username="NatureFan",
                     email="naturefan@gmail.com", password="password")
    sportsFan = User(username="SportsFan",
                     email="sportsfan@gmail.com", password="password")
    superNerd = User(username="SuperNerd",
                     email="supernerd@gmail.com", password="password")
    musicIsLife = User(username="MusicIsLife",
                       email="musicislife@gmail.com", password="password")
    gamer = User(username="gamer", email="gamer@gmail.com",
                 password="password")
    gymRat = User(username="GymRat", email="gymrat@gmail.com",
                  password="password")
    piratesLife = User(username="PiratesLife",
                       email="pirateslife@gmail.com", password="password")
    travelBug = User(username="TravelBug",
                     email="travelbug@gmail.com", password="password")

    db.session.add(demo)
    db.session.add(demoBen)
    db.session.add(natureFan)
    db.session.add(sportsFan)
    db.session.add(superNerd)
    db.session.add(musicIsLife)
    db.session.add(gamer)
    db.session.add(gymRat)
    db.session.add(piratesLife)
    db.session.add(travelBug)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
