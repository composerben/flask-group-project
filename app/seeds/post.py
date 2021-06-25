from app.models import db, User, Post


def seed_posts():
    seed1 = Post(user_id="1", image_src="https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg",
                 caption="Wow! Can't believe this picture is real!")
    seed2 = Post(user_id="3", image_src="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg",
                 caption="One day I will climb you...one day...#themountainsarecalling")
    seed3 = Post(user_id="2", image_src="https://static.independent.co.uk/2021/04/05/12/SWNS_SOCIETY_PHOTOS_03.jpg?width=982&height=726&auto=webp&quality=75",
                 caption="Who put this on my profile? AND WHY CAN'T I DELETE IT??? #thisisntfunny")
    seed4 = Post(user_id="10", image_src="https://eturbonews.com/wp-content/uploads/2020/10/itlay.jpeg",
                 caption="Now that the world is opening up again I can't wait to get back to traveling and living my best life! Italy is definitely at the top of my list of places to go back to; I just can't get ENOUGH of Venice! #vinoplease")
    seed5 = Post(user_id="10", image_src="https://www.traveloffpath.com/wp-content/uploads/2021/05/WTTC-Gives-Seven-More-Countries-Safe-Travel-Stamp.jpg",
                 caption="Throwback to my trip to Thailand a few years ago! Can't believe how long it's been (and can't believe they'll allow me back in after all those shenanigans!) #mumstheword")
    seed6 = Post(user_id="3", image_src="https://www.state.gov/wp-content/uploads/2018/11/Iceland-2109x1406.jpg",
                 caption="Hands down one of the most stunning places on Earth. The weather is crazy, the nature is wild, the people are friendly, and the drinks aren't mild. #howdoimovehere")
    seed7 = Post(user_id="3", image_src="https://www.tehaleh.com/media/8070156/mt-rainier-paradise-1.png",
                 caption="I swear I don't only post about mountains....okay, so what if I do?? They're better than people! #pnw4lyfe")
    seed8 = Post(user_id="4", image_src="https://upload.wikimedia.org/wikipedia/commons/b/b7/New_Zealand_vs_South_Africa_2006_Tri_Nations_Line_Out.JPG",
                 caption="Such a shame Rugby isn't more well-followed in the States, but so glad to see the rise of a few teams here and there! Here's hoping it catches on at a national level! #rugbyisbetterthanfootball")
    seed9 = Post(user_id="5", image_src="https://images-na.ssl-images-amazon.com/images/I/81AlnMS8z7L._AC_SL1500_.jpg",
                 caption="WHO WANTS TO PLAY WITH ME (probably no one cause you know I'd win) #mymetagameistoostrongforyou")
    seed10 = Post(user_id="6", image_src="https://centerforworldmusic.org/wp-content/uploads/2016/05/Hardanger-fiddle-1200x-618px.jpg",
                  caption="My latest addition to my (already-too-large) collection of instruments, and I am IN LOVE...now if I could just learn to play it.... #mywalletisaheadofmybrain")
    seed11 = Post(user_id="7", image_src="https://cdn.wccftech.com/wp-content/uploads/2019/07/The-Witcher-3-UHD-Trees-2060x1159.jpeg",
                  caption="Made a new mod to improve the trees in Witcher 3. When was the last time I saw a real tree, you ask?...yeah, maybe don't ask. #bluelightistheonlylight")
    seed12 = Post(user_id="8", image_src="https://gymcrafter.com/wp-content/uploads/2018/06/Squat-Rack-large.jpg",
                  caption="New PR, PRIMAL. SWOLE. #getit")
    seed13 = Post(user_id="9", image_src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/pirate-ship-sunset-daniel-eskridge.jpg",
                  caption="Yo ho, yo ho... #itsthelifeforme")
    seed14 = Post(user_id="10", image_src="https://cdn.britannica.com/85/117385-050-9D7D5132/Copenhagen-Den.jpg",
                  caption="Copenhagen has been on my bucket list for so long, and I'm so excited to have FINALLY booked a ticket to go in December. Can't wait to eat at Noma!!! #blessed")
    seed15 = Post(user_id="1", image_src="http://b50ym1n8ryw31pmkr4671ui1c64-wpengine.netdna-ssl.com/wp-content/blogs.dir/11/files/2015/06/ShootingStar_Donated_JordanReed.jpg",
                  caption="Also can't believe this is real!")
    seed16 = Post(user_id="1", image_src="https://www.thephotoargus.com/wp-content/uploads/2018/02/longexposure07.jpg",
                  caption="Wait...is ANYthing real? (I'm not real either, I'm just a demo)")
    seed17 = Post(user_id="4", image_src="https://primalpeak.com/wp-content/uploads/2019/09/image3-1.jpg",
                  caption="The 2nd worst sport, but I at least like Ronaldo's thoughts on Coca-Cola #drinkwater #footballisbetterthansoccer")
    seed18 = Post(user_id="7", image_src="https://www.dexerto.com/wp-content/uploads/2021/06/15/things-you-may-have-missed-in-the-legend-of-zelda-breath-of-the-wild-2-e3-2021-trailer.jpg",
                  caption="BOTW2 HYPE TRAIN #zombieganonisbestganon")
    seed19 = Post(user_id="5", image_src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg",
                  caption="EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat EatSleepCodeRepeat PassOutGoOutsideSmashComputerCry")
    seed20 = Post(user_id="8", image_src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/basic-exercises-are-best-royalty-free-image-541285800-1561581654.jpg",
                  caption="What even is crossfit? My back just hurts looking at this. #pullupsfromadeadhangorbust")
    seed21 = Post(user_id="6", image_src="https://www.wearegreenbay.com/wp-content/uploads/sites/70/2018/03/RT_MG_027420copy_1521600871224.jpg_37874469_ver1.0.jpg?w=2560&h=1440&crop=1",
                  caption="Great view of the first concert at Carnegie post-pandemic. God it's good to be back!")
    seed22 = Post(user_id="9", image_src="https://www.cbc.ca/kidscbc2/content/the_feed/_848/newpiratesheader.jpg",
                  caption="I would call this cosplay, but this is honestly how I go to work in the morning. #drinkupmehearties")

    db.session.add(seed1)
    db.session.add(seed2)
    db.session.add(seed3)
    db.session.add(seed4)
    db.session.add(seed5)
    db.session.add(seed6)
    db.session.add(seed7)
    db.session.add(seed8)
    db.session.add(seed9)
    db.session.add(seed10)
    db.session.add(seed11)
    db.session.add(seed12)
    db.session.add(seed13)
    db.session.add(seed14)
    db.session.add(seed15)
    db.session.add(seed16)
    db.session.add(seed17)
    db.session.add(seed18)
    db.session.add(seed19)
    db.session.add(seed20)
    db.session.add(seed21)
    db.session.add(seed22)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
