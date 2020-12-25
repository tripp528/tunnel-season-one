# app.py
from flask import Flask
from flask_socketio import SocketIO, send

# create app
app = Flask(__name__)
# add secret key
app.config['SECRET_KEY'] = 'mysecret'

# create server
socket = SocketIO(app, cors_allowed_origins="*")

# makes it so you don't need to restart on changing code
app.debug = True

# called when client emits "message" event
@socket.on("message")
def handle_message(msg):
    print("message event handler called in app.py", msg)
    send(msg, broadcast=True)
    return None

# run the app
if __name__ == '__main__':
    socket.run(app)
