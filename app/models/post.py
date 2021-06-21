from .db import db

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image_src = db.Column(db.String(255), nullable=False, unique=True)
    caption = db.Column(db.String(255), nullable=True)
    num_of_likes = db.Column(db.Integer)
    num_of_hates = db.Column(db.Integer)

    @property
    def image(self):
        return self.image_src

    @property
    def caption(self):
        return self.caption

    @property
    def likes(self):
        return self.num_of_likes

    @property
    def hates(self):
        return self.num_of_hates

    @image.setter
    def image(self, image):
        self.image_src = image

    @caption.setter
    def caption(self, caption):
        self.caption = caption

    @likes.setter
    def likes(self, likes):
        self.num_of_likes = likes

    @hates.setter
    def hates(self, hates):
        self.num_of_hates = hates

    user = db.relationship("User", back_populates="post")

    def to_dict(self):
            return {
                "id": self.id,
                "user_id": self.user_id,
                "image_src": self.image_src,
                "caption": self.caption,
                "num_of_likes": self.num_of_likes,
                "num_of_hates": self.num_of_hates
            }
