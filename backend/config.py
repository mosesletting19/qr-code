import os

class Config:
    SECRET_KEY = '9DB5EA61C137C254457EC9313D615'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # SQLite URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = 'mosesletting19@gmail.com'
    MAIL_PASSWORD = '38101015'
    MAIL_DEFAULT_SENDER = 'mosesletting19@gmail.com'
