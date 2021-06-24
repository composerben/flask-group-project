"""foreignKey

Revision ID: 4e0726c1e9fa
Revises: cc64d732897a
Create Date: 2021-06-24 12:44:15.003674

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4e0726c1e9fa'
down_revision = 'cc64d732897a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('post_reactions_post_id_fkey', 'post_reactions', type_='foreignkey')
    op.create_foreign_key(None, 'post_reactions', 'posts', ['post_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'post_reactions', type_='foreignkey')
    op.create_foreign_key('post_reactions_post_id_fkey', 'post_reactions', 'posts', ['post_id'], ['id'])
    # ### end Alembic commands ###
