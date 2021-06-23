from app.models.post_reactions import PostReaction
from flask import Blueprint, request, session
from flask_login import login_required, current_user
from app.models import db

post_reaction_routes = Blueprint('post_reaction', __name__)

@post_reaction_routes.route('/<int:post_id>-<int:user_id>/like', methods=['POST'])
@login_required
def postLike(user_id, post_id):
    post_reaction = PostReaction(user_id=user_id, post_id=post_id, _reaction=True)
    db.session.add(post_reaction)
    db.session.commit()
    return {'post_reaction': post_reaction.to_dict()}

@post_reaction_routes.route('/<int:post_id>-<int:user_id>/hate', methods=['POST'])
@login_required
def postHate(user_id, post_id):
    post_reaction = PostReaction(user_id=user_id, post_id=post_id, _reaction=False)
    db.session.add(post_reaction)
    db.session.commit()
    return {'post_reaction': post_reaction.to_dict()}
