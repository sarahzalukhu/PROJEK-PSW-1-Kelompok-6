import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser  = JSON.parse(localStorage.getItem('user'));

        if (attempts >= 10) {
            alert("Anda sudah mencoba terlalu banyak, coba daftarkan akun Anda terlebih dahulu!");
            return;
        }

        if (storedUser && username === storedUser.username && password === storedUser.password) {
            alert("Selamat, anda telah berhasil masuk!");
            localStorage.setItem('username', username);
            navigate('/dashboard');
        } else {
            alert("Username atau password yang anda masukkan salah. Mohon coba lagi!");
            setAttempts(attempts + 1);
        }
    };

    const handleButtonClick  = () => {
    };

    return (
        <div className="container">
            <div className="diagonal-bg">
                <div className="welcome-text">
                    <h1>Welcome Back!</h1>
                    <p>Selamat datang ke website Elang. Mari lanjutkan perjalanan belajar Anda!</p>
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
                        <input type="text" placeholder="Username" value={username}
                            onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
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