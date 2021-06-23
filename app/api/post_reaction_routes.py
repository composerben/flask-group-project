from flask import Blueprint, request, session
from flask_login import login_required, current_user
from app.models import db, PostReaction

post_reaction_routes = Blueprint('post_reaction', __name__)


@post_reaction_routes.route('/<int:post_id>/<string:reaction>',
                            methods=['POST'])
@login_required
def postLike(post_id, reaction):
    if reaction == "True":
        reaction = True
    else:
        reaction = False

    # diff = {'likes': 0, 'hates': 0}
    # check DB if a postreaction exists for user_id and post_id
    try:
        post_reaction = PostReaction.query.filter_by(post_id=post_id,
                                          user_id=current_user.id,
                                          ).one()
    except:
        post_reaction = PostReaction(user_id=current_user.id, post_id=post_id,
                                 reaction=reaction)
        db.session.add(post_reaction)
        db.session.commit()

    if str(post_reaction.reaction) != reaction:
        post_reaction.reaction = reaction
        db.session.commit()
        
    # query joins table and get the count
    # search by post_id, count true and count false
    
    # change count of likes/hates based on reaction
    count_likes = PostReaction.query.filter_by(post_id=post_id,
                                               reaction=True).count()
    count_hates = PostReaction.query.filter_by(post_id=post_id,
                                               reaction=False).count()
    return {
        'post_reaction': post_reaction.to_dict(),
        'count_likes': count_likes,
        'count_hates': count_hates,
        }
