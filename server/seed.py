#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Question, Questionnaire

if __name__ == '__main__':
    with app.app_context():
        
        print("Deleting all records... ")
        User.query.delete()
        Question.query.delete()
        Questionnaire.query.delete()

        print("Creating users...")
        user1 = User(username = "user1", email = "user1@gmail.com")
        user2 = User(username = "user2", email = "user2@gmail.com")
        user3 = User(username = "user3", email = "user3@gmail.com")

        users = [user1, user2, user3]
        db.session.add_all(users)
        db.session.commit()

        print("Creating questions...")
        question1 = Question(
            question_text = "Hey! How did you feel over the past 24 hours on a scale of Awful to Excellent (0 - 4)?"
        )
        question2 = Question(
            question_text = "In the past 24 hours, I felt in control of my behavior and decisions (0 - 4)."
            )
        question3 = Question(
            question_text = "In the past 24 hours, I felt supported by a sense of connectedness and/or community (0 - 4)."
        )
        question4 = Question(
            question_text = "In the past 24 hours, I was motivated to make good use of my time, spent it with intention, and lived in accordance with my values (0 - 4)."
        )
        question5 = Question(
            question_text = "In the past 24 hours, I felt as if I had adequate access to the basic necessities of life, and I was physically and psychologically safe (0 - 4)."
        )

        questions = [question1, question2, question3, question4, question5]
        db.session.add_all(questions)
        db.session.commit()

        print("Creating Questionnaires...")

        # user 1
        questionnaire1 = Questionnaire(
            user = user1,
            question = question1,
            score = 0
        )

        questionnaire2 = Questionnaire(
            user = user1,
            question = question2,
            score = 0
        )

        questionnaire3 = Questionnaire(
            user = user1,
            question = question3,
            score = 0
        )

        questionnaire4 = Questionnaire(
            user = user1,
            question = question4,
            score = 0
        )

        questionnaire5 = Questionnaire(
            user = user1,
            question = question5,
            score = 0
        )

        # user 2
        questionnaire6 = Questionnaire(
            user = user2,
            question = question1,
            score = 1
        )

        questionnaire7 = Questionnaire(
            user = user2,
            question = question2,
            score = 1
        )

        questionnaire8 = Questionnaire(
            user = user2,
            question = question3,
            score = 1
        )

        questionnaire9 = Questionnaire(
            user = user2,
            question = question4,
            score = 1
        )

        questionnaire10 = Questionnaire(
            user = user2,
            question = question5,
            score = 1
        )

        # user 3
        questionnaire11 = Questionnaire(
            user = user3,
            question = question1,
            score = 2
        )

        questionnaire12 = Questionnaire(
            user = user3,
            question = question2,
            score = 2
        )

        questionnaire13 = Questionnaire(
            user = user3,
            question = question3,
            score = 2
        )

        questionnaire14 = Questionnaire(
            user = user3,
            question = question4,
            score = 2
        )

        questionnaire15 = Questionnaire(
            user = user2,
            question = question5,
            score = 2
        )

        questionnaires = [questionnaire1, questionnaire2, questionnaire3, questionnaire4, questionnaire5, questionnaire6, questionnaire7, questionnaire8, questionnaire9, questionnaire10, questionnaire11, questionnaire12, questionnaire13, questionnaire14, questionnaire15]
        db.session.add_all(questionnaires)
        db.session.commit()

        print("Seeding complete!")
