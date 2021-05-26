import os
from flask import Flask, send_from_directory
from flask_socketio import SocketIO, send, emit
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# create app
app = Flask(__name__, static_folder='./build')
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# create server
socket = SocketIO(app, cors_allowed_origins="*")

# ------------------------- MODELS -------------------------
class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String())

    def __init__(self, content):
        self.content = content

    def __repr__(self):
        return '<id {}: {}>'.format(self.id, self.content)

# called when client emits "message" event
@socket.on("new_message")
def handle_message(msg_content):
    # print("message event handler called in app.py", msg_content)
    message = Message(content=msg_content)
    db.session.add(message)
    db.session.commit()
    emit('new_message', {
        'id': message.id,
        'content': message.content
    }, broadcast=True)
    # print('\n\n\n', Message.query.all())
    return None

@socket.on("logged_in")
def get_message_history():
    messages = Message.query.all()
    messages_json = []
    for message in messages:
        messages_json.append({
            'id': message.id,
            'content': message.content
        })
    emit("message_history", messages_json)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# migrations
migrate = Migrate(app, db)

# run the app
if __name__ == '__main__':
    print(os.environ['APP_SETTINGS'])
    socket.run(app)
