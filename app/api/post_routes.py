from flask import Blueprint, request, session
from flask_login import login_required, current_user
from app.models import db, Post
from app.forms import PostForm

post_routes = Blueprint("posts", __name__)


# GET /api/posts
@post_routes.route("/")
# @login_required
def posts():
    posts = Post.query.all()
    return {"posts": [post.to_dict() for post in posts]}


# POST /api/posts
@post_routes.route("/", methods=["POST"])
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
    return {"errors": form.errors}
