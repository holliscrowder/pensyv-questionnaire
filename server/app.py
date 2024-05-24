#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, jsonify, make_response
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, api

# Add your model imports
from models import User, Question, Questionnaire


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Signup(Resource):

    def post(self):
        json = request.get_json()
        try:
            # create new user
            user = User(
                username = json.get("username"),
                email = json.get("email")
            )

            # update session info
            session["user_id"] = user.id
            db.session.add(user)
            db.session.commit()
            
            # return user info
            user_response = jsonify(user.to_dict())
            return make_response(user_response, 201)
        except IntegrityError:
            return make_response({"error": "Database relational integrity error."}, 422)
        except ValueError:
            return make_response({"error": "User information value invalid"}, 422)

class CheckSession(Resource):
    def get(self):
        # check if session has user ID
        if session["user_id"]:
            # create user based on unique user ID
            user = User.query.filter(User.id == session["user_id"]).first()
            
            # return user info
            user_response = jsonify(user.to_dict())
            return make_response(user_response, 200)
        
        return make_response({"error": "Unauthorized"}, 401)

class Questions(Resource):
    def get(self):
        # gather all questions
        questions = [question.to_dict() for question in Question.query.all()]

        # return questions
        questions_response = jsonify(questions)
        return make_response(questions_response, 200)

api.add_resource(Signup, "/signup", endpoint = "signup")
api.add_resource(CheckSession, "/check_session", endpoint = "check_session")

if __name__ == '__main__':
    app.run(port=5555, debug=True)

