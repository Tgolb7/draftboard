from flask import Blueprint, request, jsonify
from db import get_connection

reviews_bp = Blueprint("reviews", __name__, url_prefix="/api")

@reviews_bp.route("/reviews/<int:coach_id>", methods=["GET"])
def get_reviews(coach_id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Review WHERE coach_id = %s", (coach_id,))
    reviews = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(reviews)

@reviews_bp.route("/reviews", methods=["POST"])
def create_review():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO Review (user_id, coach_id, rating, comment) VALUES (%s, %s, %s, %s)",
        (data["user_id"], data["coach_id"], data["rating"], data["comment"])
    )
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Review added"})
