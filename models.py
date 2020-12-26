from app import db
# from sqlalchemy.dialects.postgresql import JSON

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String())

    def __init__(self, url, result_all, result_no_stop_words):
        self.content = content

    def __repr__(self):
        return '<id {}>'.format(self.id)
