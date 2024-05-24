from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer(), primary_key = True)
    username = db.Column(db.String(), unique = True, nullable = False)
    email = db.Column(db.String(), unique = True)

    # relationships
    questionnaires = db.relationship("Questionnaire", back_populates = "user", cascade = "all, delete")
    questions = association_proxy("questionnaires", "user")

    # serialization rules
    serialize_rules = ("-questionnaires",)

    def __repr__(self):
        return f"<User {self.id}: [username] {self.username} [email] {self.email} >"

class Question(db.Model, SerializerMixin):
    __tablename__ = "questions"

    id = db.Column(db.Integer(), primary_key = True)
    question_text = db.Column(db.String(), unique = True, nullable = False)

    # relationships
    questionnaires = db.relationship("Questionnaire", back_populates = "question")
    users = association_proxy("questionnaires", "question")

    # serialization rules
    serialize_rules = ("-questionnaires",)

    def __repr__(self):
        return f"<Question {self.id}: [text] {self.question_text} >"

class Questionnaire(db.Model, SerializerMixin):
    __tablename__ = "questionnaires"

    id = db.Column(db.Integer(), primary_key = True)
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))
    question_id = db.Column(db.Integer(), db.ForeignKey("questions.id"))
    score = db.Column(db.Integer())
    created_on = db.Column(db.DateTime(timezone=True), server_default = db.func.now())
    updated_on = db.Column(db.DateTime(timezone=True), server_default = db.func.now(), server_onupdate = db.func.now())

    # relationships
    user = db.relationship("User", back_populates = "questionnaires")
    question = db.relationship("Question", back_populates = "questionnaires")

    # serialization rules
    serialize_rules = ("-user", "-question")

    def __repr__(self):
        return f"<Questionnaire {self.id}: [user_id] {self.user_id} [question_id] {self.question_id} [score] {self.score} [created_on] {self.created_on} [updated_on] {self.updated_on} >"



    