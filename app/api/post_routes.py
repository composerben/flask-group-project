from flask import Blueprint, request, session
from flask_login import login_required, current_user
from app.models import db, Post
from app.forms import PostForm
from app.aws_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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
    if "image" not in request.files:
        return {"errors": "image required"}, 400
    
    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if no URL, error when uploading
        return upload, 400
    
    url = upload["url"]

    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id=current_user.id,
            image_src=url,
            caption=form.data['caption'],
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()

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
    post = Post.query.get(id)
    request_body = request.get_json()
    post.caption = request_body
    db.session.commit()
    return {'post': post.to_dict()}
