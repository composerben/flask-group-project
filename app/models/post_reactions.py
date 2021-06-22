from .db import db

class PostReaction(db.Model):
    __tablename__ = "posts_reactions"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    reaction = db.Column(db.Boolean, nullable=False)

    @property
    def reaction(self):
        return self.reaction
    
    @reaction.setter
    def reaction(self, new_reaction):
        self.reaction = new_reaction

    # user = db.relationship("User", back_populates="reaction")
    # post = db.relationship("Post", back_populates="reaction")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "reaction": self.reaction
        }


