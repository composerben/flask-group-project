from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Post


class PostForm(FlaskForm):
    image_src = StringField("image_src", validators=[DataRequired()])
    caption = TextAreaField("caption")
    submit = SubmitField("POST")
