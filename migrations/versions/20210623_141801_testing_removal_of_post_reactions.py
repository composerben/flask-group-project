"""testing removal of post_reactions

Revision ID: 1c2eab9014ec
Revises: 02f37635144e
Create Date: 2021-06-23 14:18:01.564901

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1c2eab9014ec'
down_revision = '02f37635144e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('post_reactions')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('post_reactions',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('post_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('_reaction', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], name='post_reactions_post_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='post_reactions_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='post_reactions_pkey')
    )
    # ### end Alembic commands ###
