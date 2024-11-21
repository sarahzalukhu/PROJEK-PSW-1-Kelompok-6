import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };     

    const handleButtonClick  = () => {
        if (!username ||  !email || !password || !confirmPassword) {
            alert("Mohon isi semua kolom sebelum melanjutkan!");
        } else {
            alert("Selamat, akun anda berhasil didaftarkan!");
        }
    };
      
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    return (
        <div className="container">
            <div className="diagonal-bg">
                <div className="welcome-text">
                    <h1>Create an Account</h1>
                    <p>Daftar untuk mengakses aplikasi kami!</p>
                </div>
                <div className="shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
            </div>
            <div className="form-container">
                <div className="form-header">
                    <h2>Register</h2>
                    <p>Silakan isi formulir untuk membuat akun</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Username" value={username}
                            onChange={(e) => setUsername(e.target.value)} required />
                        <i class="fas fa-user"></i>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm Password" value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <i className="fas fa-lock"></i>
                    </div>
                    <button type="submit" className="submit-btn" onClick={handleButtonClick}>Register</button>
                    <div className="form-footer">
                        <p>Sudah punya akun? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;