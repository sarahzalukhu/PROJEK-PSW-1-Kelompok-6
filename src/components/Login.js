
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        onLogin();
    };

    return (
        <div className="container">
            <div className="diagonal-bg">
                <div className="welcome-text">
                    <h1>Welcome Back!</h1>
                    <p>Selamat datang kembali di SMA RK BINTANG TIMUR PEMATANG SIANTAR. Mari lanjutkan perjalanan belajar Anda!</p>
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
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="fas fa-lock"></i>
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                    <div className="form-footer">
                        <p>Belum punya akun? <a href="#" onClick={(e) => { e.preventDefault(); }}>Daftar</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


