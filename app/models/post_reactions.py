from .db import db


class PostReaction(db.Model):
    __tablename__ = "post_reactions"

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False,
                        primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id', ondelete="CASCADE"), nullable=False, 
                        primary_key=True)
    reaction = db.Column(db.Boolean, nullable=True)

    user = db.relationship("User", back_populates="post_reaction")
    post = db.relationship("Post", back_populates="reactions")

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "post_id": self.post_id,
            "reaction": self.reaction
        }
