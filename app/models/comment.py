from .db import db

#add commentReactions Later
class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    body = db.Column(db.String(1000), nullable=False)
    # come back to add a GPS location/coords

    user = db.relationship("User", back_populates="comment")
    post = db.relationship("Post", back_populates="comment")

    # reactions = db.relationship(
    #     "PostReaction", back_populates="post", passive_deletes=True, cascade="all,delete-orphan")

    # def get_reactions(self):
    #     """
    #     Gets all reactions, returns in dictionary.
    #     """
    #     print([item.reaction for item in self.reactions])
    #     return {
    #         'likes': len([reaction.reaction for reaction in self.reactions if reaction.reaction is True]),
    #         'hates': len([reaction.reaction for reaction in self.reactions if reaction.reaction is False]),
    #     }

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "body": self.body,
            # "likes": self.get_reactions()["likes"],
            # "hates": self.get_reactions()["hates"],
            # "get_reactions": self.get_reactions(),
        }
