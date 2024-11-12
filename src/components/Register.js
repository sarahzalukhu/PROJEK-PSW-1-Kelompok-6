
import React, { useState } from 'react';
import './Register.css';

const Register = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

      
        if (password !== confirmPassword) {
            setErrorMessage('Password tidak cocok!');
            return;
        }

      
        const newUser = { email, password };
        localStorage.setItem('user', JSON.stringify(newUser)); 

        
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
        onToggle(); 
    };

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
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <i className="fas fa-lock"></i>
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <div className="form-footer">
                        <p>Sudah punya akun? <a href="#" onClick={(e) => { e.preventDefault(); onToggle(); }}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
