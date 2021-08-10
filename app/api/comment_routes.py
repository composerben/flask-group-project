from flask import Blueprint, request, session
from flask_login import login_required, current_user
from app.models import db, Comment

comment_routes = Blueprint("comments", __name__)


# GET /api/comments
@comment_routes.route("")
@login_required
def comments():
    comments = Comment.query.all()
    return {"comments": [comment.to_dict() for comment in comments]}

# DELETE /api/comments/:id


@comment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_comments(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()


# PATCH /api/comments/:id
@comment_routes.route("/<int:id>", methods=["PATCH"])
@login_required
def edit_comment(id):
    print("Made it into the edit_comment route")
    comment = Comment.query.get(id)
    request_body = request.get_json()
    comment.body = request_body
    db.session.commit()
    return {'comment': comment.to_dict()}

# POST /api/comments


@comment_routes.route("", methods=["POST"])
@login_required
def post_comment():
    print("Made it into the post_comment route")
    request_body = request.get_json()
    comment = Comment(user_id=current_user.id,
                      post_id=request_body['postId'], body=request_body['body'])
    db.session.add(comment)
    db.session.commit()
    return {'comment': comment.to_dict()}
