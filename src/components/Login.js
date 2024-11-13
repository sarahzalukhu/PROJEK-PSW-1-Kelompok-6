import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleButtonClick  = () => {
        if (!email || !password) {
            alert("Mohon isi semua kolom sebelum melanjutkan!");
        } else {
            alert("Selamat, anda telah berhasil masuk!");
        }
    };

    return (
        <div className="container">
            <div className="diagonal-bg">
                <div className="welcome-text">
                    <h1>Welcome Back!</h1>
                    <p>Selamat datang ke website KuPintar. Mari lanjutkan perjalanan belajar Anda!</p>
                </div>
                <div className="shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
            </div>
            <div className="form-container">
                <div className="form-header">
                    <h2>Login</h2>
                    <p>Masuk ke akun Anda</p>
                </div>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="submit-btn" onClick={handleButtonClick}>Login</button>
                    <div className="form-footer">
                        <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;