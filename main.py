from flask import Flask, render_template, jsonify, request,session
from dotenv import load_dotenv
import requests
import json
import os

# Load biến môi trường từ file .env
load_dotenv()

app = Flask(__name__)

# Cài secret_key từ biến môi trường
app.secret_key = os.getenv("SECRET_KEY")


# Route chính: render template index.html
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/blog")
def blog():
    return render_template("blog.html")


# Danh sách file JSON được phép truy cập
ALLOWED_FILES = {"top10ai", "thuatngufrontend", "thuatngubackend","top10code"}


# Route động để đọc JSON
@app.route("/<filename>", methods=["GET"])
def get_data_json(filename):
    if filename not in ALLOWED_FILES:
        return jsonify({"error": "File này không được truy cập!"}), 403

    try:
        filepath = os.path.join("static", "assets", "data", f"{filename}.json")
        with open(filepath, "r", encoding="utf-8") as file:
            data = json.load(file)
            return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "File này không tồn tại!"}), 404

# Các route html
@app.route('/banhang')
def banhang():
    return render_template("banhang.html")

@app.route('/khogiaodien')
def giaodien():
    return render_template("khogiaodien.html")

@app.route('/thietkelogo')
def logo():
    return render_template("thietkelogo.html")
@app.route('/xaydungweb')
def xaydungweb():
    return render_template("xaydungweb.html")
# Truyền vào từng link tìm kiếm
@app.route("/blog/<filename>")
def blog_name(filename):
    return render_template(f"blog-infor.html", filename=filename)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Lấy cổng do Railway cấp
    app.run(debug=False, host="0.0.0.0", port=port)
