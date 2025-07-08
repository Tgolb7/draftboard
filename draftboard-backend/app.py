from flask import Flask
from flask_cors import CORS
from routes.users import users_bp
from routes.auth import auth_bp
from routes.posts import posts_bp
from routes.reviews import reviews_bp

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(users_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(posts_bp)
app.register_blueprint(reviews_bp)

@app.route("/")
def home():
    return "DraftBoard backend is running!"

if __name__ == "__main__":
    app.run(debug=True)
