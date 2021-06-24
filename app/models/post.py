from .db import db

#add commentReactions Later
class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image_src = db.Column(db.String(255), nullable=False, unique=True)
    caption = db.Column(db.String(255), nullable=True)
    # come back to add a GPS location/coords

    user = db.relationship("User", back_populates="post")
    comment = db.relationship("Comment", back_populates="post")

    reactions = db.relationship(
        "PostReaction", back_populates="post", passive_deletes=True, cascade="all,delete-orphan")

    def get_reactions(self):
        """
        Gets all reactions, returns in dictionary.
        """
        print([item.reaction for item in self.reactions])
        return {
            'likes': len([reaction.reaction for reaction in self.reactions if reaction.reaction is True]),
            'hates': len([reaction.reaction for reaction in self.reactions if reaction.reaction is False]),
        }

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "image_src": self.image_src,
            "caption": self.caption,
            "likes": self.get_reactions()["likes"],
            "hates": self.get_reactions()["hates"],
            # "get_reactions": self.get_reactions(),
        }
