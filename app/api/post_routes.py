from flask import Blueprint, request, session
from flask_login import login_required, current_user
from app.models import db, Post
from app.forms import PostForm

post_routes = Blueprint("posts", __name__)


# GET /api/posts
@post_routes.route("")
@login_required
def posts():
    posts = Post.query.all()
    return {"posts": [post.to_dict() for post in posts]}


# POST /api/posts
@post_routes.route("", methods=["POST"])
@login_required
def post_posts():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id=current_user.id,
            image_src=form.data['image_src'],
            caption=form.data['caption'],
        )
        db.session.add(post)
        db.session.commit()
    if not form.errors:
        return "no errors"
    return {"errors": form.errors}


# DELETE /api/posts/:id
@post_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_posts(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return {'message': 'success'}


# PATCH /api/posts/:id
@post_routes.route("/<int:id>", methods=["PATCH"])
@login_required
def edit_post(id):
    print("Made it into the edit_post route")
    post = Post.query.get(id)
    request_body = request.get_json()
    post._caption = request_body
    db.session.commit()
    return {'post': post.to_dict()}
