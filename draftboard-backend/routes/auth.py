from flask import Blueprint, request, jsonify
from db import get_connection

auth_bp = Blueprint("auth", __name__, url_prefix="/api")

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor()
    query = "INSERT INTO User (name, email, hashed_password, role) VALUES (%s, %s, %s, %s)"
    cursor.execute(query, (data["name"], data["email"], data["password"], data["role"]))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "User registered successfully"})

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM User WHERE email = %s AND hashed_password = %s", (data["email"], data["password"]))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    if user:
        return jsonify(user)
    else:
        return jsonify({"error": "Invalid credentials"}), 401
