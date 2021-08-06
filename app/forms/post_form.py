from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Post


class PostForm(FlaskForm):
    image = StringField("image", validators=[DataRequired()])
    caption = TextAreaField("caption")
