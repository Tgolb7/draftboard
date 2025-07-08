from flask import Blueprint, jsonify
from db import get_connection

users_bp = Blueprint("users", __name__, url_prefix="/api")

@users_bp.route("/users", methods=["GET"])
def get_users():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, name, email, role FROM User")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)
