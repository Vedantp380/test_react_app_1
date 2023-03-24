from flask import Flask
from server import fileuplaod

app = Flask(__name__)

app.register_blueprint(fileuplaod)

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)