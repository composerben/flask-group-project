from flask.cli import AppGroup
from .users import seed_users, undo_users
from .post import seed_posts, undo_posts

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_posts()
    # Add other seed functions here


# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_posts()
    # Add other undo functions here
