# app/routes.py
from flask import Blueprint, request, jsonify
from .app import db, mail  # Import from app.app where db and mail are defined
from .models import User
from flask_mail import Message
import qrcode
from io import BytesIO
import base64
main = Blueprint('main', __name__)

@main.route('/api/add_user', methods=['POST'])
def add_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    
    if not name or not email:
        return jsonify({'error': 'Name and email are required'}), 400
    
    # Generate QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(f'{name}, {email}')
    qr.make(fit=True)
    
    img = qr.make_image(fill='black', back_color='white')
    buffer = BytesIO()
    img.save(buffer, format="PNG")
    qr_code_str = base64.b64encode(buffer.getvalue()).decode('utf-8')
    
    user = User(name=name, email=email, qr_code=qr_code_str)
    db.session.add(user)
    db.session.commit()
    
    return jsonify({'message': 'User added successfully'}), 201

@main.route('/api/send_email/<int:user_id>', methods=['POST'])
def send_email(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    msg = Message('Your Access Code', 
                  sender='actofocusplayhousep@gmail.com', 
                  recipients=[user.email])
    
    msg.body = f'Dear {user.name},\n\nThanks, this is your access code.'
    msg.html = f'<p>Dear {user.name},</p><p>Thanks, this is your access code:</p><img src="data:image/png;base64,{user.qr_code}" alt="QR Code">'
    
    mail.send(msg)
    
    user.status = 'Sent'
    db.session.commit()
    
    return jsonify({'message': 'Email sent successfully'}), 200
