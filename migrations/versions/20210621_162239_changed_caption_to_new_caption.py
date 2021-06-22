"""changed caption to new_caption

Revision ID: 843def12575b
Revises: f8f2b3884340
Create Date: 2021-06-21 16:22:39.979758

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '843def12575b'
down_revision = 'f8f2b3884340'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('_caption', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', '_caption')
    # ### end Alembic commands ###