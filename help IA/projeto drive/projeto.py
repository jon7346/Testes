from flask import Flask, request, jsonify, send_from_directory
import sqlite3
import os
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# Definindo o diretório para upload de arquivos
UPLOAD_FOLDER = 'uploaded_files'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Função auxiliar para conectar ao banco de dados
def connect_db():
    return sqlite3.connect('drive_app.db')

# Registro de usuário
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    hashed_password = generate_password_hash(password)
    
    conn = connect_db()
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
        conn.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"error": "User already exists"}), 400
    finally:
        conn.close()

# Login de usuário
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("SELECT id, password FROM users WHERE username = ?", (username,))
    user = cur.fetchone()
    conn.close()
    
    if user and check_password_hash(user[1], password):
        return jsonify({"message": "Login successful", "user_id": user[0]}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401

# Upload de arquivo
@app.route('/upload', methods=['POST'])
def upload_file():
    user_id = request.form.get('user_id')
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("INSERT INTO files (user_id, file_name, file_path) VALUES (?, ?, ?)", 
                (user_id, filename, file_path))
    conn.commit()
    conn.close()
    
    return jsonify({"message": "File uploaded successfully"}), 201

# Download de arquivo
@app.route('/download/<file_id>', methods=['GET'])
def download_file(file_id):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("SELECT file_name, file_path FROM files WHERE id = ?", (file_id,))
    file = cur.fetchone()
    conn.close()
    
    if file:
        return send_from_directory(directory=app.config['UPLOAD_FOLDER'], path=file[1], as_attachment=True)
    else:
        return jsonify({"error": "File not found"}), 404

# Listar arquivos do usuário
@app.route('/list/<user_id>', methods=['GET'])
def list_files(user_id):
    conn = connect_db()
    cur = conn.cursor()
    cur.execute("SELECT id, file_name, uploaded_at FROM files WHERE user_id = ?", (user_id,))
    files = cur.fetchall()
    conn.close()
    
    return jsonify({"files": [{"id": f[0], "file_name": f[1], "uploaded_at": f[2]} for f in files]}), 200

if __name__ == '__main__':
    app.run(debug=True)