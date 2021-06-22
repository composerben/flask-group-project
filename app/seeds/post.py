from app.models import db, User, Post

def seed_posts():
    seed1 = Post(user_id="1", image_src="https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg", caption="This works1!")
    seed2 = Post(user_id="1", image_src="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg", caption="This works2!")
    seed3 = Post(user_id="2", image_src="https://static.independent.co.uk/2021/04/05/12/SWNS_SOCIETY_PHOTOS_03.jpg?width=982&height=726&auto=webp&quality=75", caption="This works3!")


    db.session.add(seed1)
    db.session.add(seed2)
    db.session.add(seed3)

    # db.session.add(seed1, seed2, seed3)
    # db.session.add(seed1, seed2, seed3)


    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
