from .db import db

#add commentReactions Later
class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id', ondelete="CASCADE"), nullable=False)
    body = db.Column(db.String(1000), nullable=False)
    # come back to add a GPS location/coords

    user = db.relationship("User", back_populates="comment")
    post = db.relationship("Post", back_populates="comment")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "body": self.body,
        }
