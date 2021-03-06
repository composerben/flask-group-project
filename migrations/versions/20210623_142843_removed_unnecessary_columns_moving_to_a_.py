"""Removed unnecessary columns, moving to a SQL query.

Revision ID: e4338c095afb
Revises: 63bafc06e66d
Create Date: 2021-06-23 14:28:43.770753

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e4338c095afb'
down_revision = '63bafc06e66d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', 'num_of_likes')
    op.drop_column('posts', 'num_of_hates')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('num_of_hates', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('posts', sa.Column('num_of_likes', sa.INTEGER(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
