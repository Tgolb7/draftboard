from flask import Blueprint, request, jsonify
from db import get_connection

posts_bp = Blueprint("posts", __name__, url_prefix="/api")

@posts_bp.route("/recruiting-posts", methods=["GET"])
def get_posts():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM RecruitingPost")
    posts = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(posts)

@posts_bp.route("/recruiting-posts", methods=["POST"])
def create_post():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor()
    query = """
        INSERT INTO RecruitingPost
        (coach_id, title, description, sport, position_needed, min_gpa, graduation_year, preferred_skills)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(query, (
        data["coach_id"], data["title"], data["description"], data["sport"],
        data["position_needed"], data["min_gpa"], data["graduation_year"], data["preferred_skills"]
    ))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Post created"})
