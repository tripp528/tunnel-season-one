import os
from flask import Flask, send_from_directory
from flask_socketio import SocketIO, send

# create app
app = Flask(__name__, static_folder='./build')
app.config.from_object(os.environ['APP_SETTINGS'])

# create server
socket = SocketIO(app, cors_allowed_origins="*")

# called when client emits "message" event
@socket.on("message")
def handle_message(msg):
    print("message event handler called in app.py", msg)
    send(msg, broadcast=True)
    return None

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

        
# run the app
if __name__ == '__main__':
    print(os.environ['APP_SETTINGS'])
    socket.run(app)
