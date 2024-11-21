import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from './1.png';
import gambar1 from './Tristan.jpg';
import gambar2 from './Tristan.jpg';
import gambar3 from './Tristan.jpg';
import gambar4 from './Tristan.jpg';

function Dashboard() {
    const [isDropdownOneOpen, setIsDropdownOneOpen] = useState(false);
    const [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState(false);
    const [isDropdownThreeOpen, setIsDropdownThreeOpen] = useState(false);
    const [username, setUsername] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const toggleDropdownOne = () => {
        setIsDropdownOneOpen(prevState => !prevState);
    };
    const toggleDropdownTwo = () => {
        setIsDropdownTwoOpen(prevState => !prevState);
    };
    const toggleDropdownThree = () => {
        setIsDropdownThreeOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="logo">
                    <img src={logo} alt="Elang"/>
                </div>
                <nav>
                    <ul>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-calendar-alt"></i> Semester 1
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-calendar-alt"></i> Semester 2
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-calendar-alt"></i> Quiz 1
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-calendar-alt"></i> Quiz 2
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleLogout} className="logout-button">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="active-teachers">
                    <p>Active Teachers</p>
                    <div className="teacher-icons">
                        <img src={gambar1} alt="Andrey"/>
                        <img src={gambar2} alt="Markus"/>
                        <img src={gambar3} alt="Sarah"/>
                        <img src={gambar4} alt="Tristan"/>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                <header>
                    <h1>Welcome back, {username}</h1>
                    <p>Let's get started with your course</p>
                </header>

                <section className="overview">
                    <div className="card schedule">
                        <h3>Material Semester 1</h3>
                        <button className="dropdown-toggle" onClick={toggleDropdownOne}>
                            Semester 1
                        </button>
                        {isDropdownOneOpen && (
                            <div className="dropdown-menu">
                                <a href="/greetings&Introduction" className="dropdown-item">Greetings And Introduction</a>
                                <a href="/recount text" className="dropdown-item">Recount Text</a>
                                <a href="/descriptive text" className="dropdown-item">Descriptive Text</a>
                                <a href="/simple present tense" className="dropdown-item">Simple Present Tense</a>
                                <a href="/informal letters" className="dropdown-item">Informal Letters</a>
                            </div>
                        )}
                    </div>
                    <div className="card assignments">
                        <h3>Material Semester 2</h3>
                        <button className="dropdown-toggle" onClick={toggleDropdownTwo}>
                            Semester 2
                        </button>
                        {isDropdownTwoOpen && (
                            <div className="dropdown-menu">
                                <a href="/narative text" className="dropdown-item">Narative Text</a>
                                <a href="/procedural text" className="dropdown-item">Procedural Text</a>
                                <a href="/exposition text" className="dropdown-item">Exposition Text</a>
                                <a href="/present continuous tense" className="dropdown-item">Present Continuous Tense</a>
                                <a href="/report text" className="dropdown-item">Report Text</a>
                            </div>
                        )}
                    </div>
                    <div className="card notifications">
                    <h3>Quiz</h3>
                        <button className="dropdown-toggle" onClick={toggleDropdownThree}>
                            Test Your Knowledge
                        </button>
                        {isDropdownThreeOpen && (
                            <div className="dropdown-menu">
                                <a href="/quiz 1" className="dropdown-item">Quizes for Semester 1</a>
                                <a href="/quiz 2" className="dropdown-item">Quizes for Semester 2</a>
                            </div>
                        )}
                    </div>
                </section>

                <section className="analytics">
                    <div className="chart">
                        <h3>Continue at Your Last Session</h3>
                        <canvas id="attendanceChart"></canvas>
                    </div>
                    <div className="chart">
                        <h3>Grades</h3>
                        < canvas id="gradesChart"></canvas>
                    </div>
                    <div className="chart">
                        <h3>Achievements</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Achievement</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fastest Learners of the Year</td>
                                    <td>November 2024</td>
                                </tr>
                                <tr>
                                    <td>Quiz 1 Best Scorer of the Month</td>
                                    <td>November 2024</td>
                                </tr>
                                <tr>
                                    <td>User of the Month</td>
                                    <td>August 2024</td>
                                </tr>
                                <tr>
                                    <td>Be A Part of Elang's Family</td>
                                    <td>February 2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="additional-info">
                    <div className="card class-stats">
                        <h3>Your Statistics</h3>
                        <ul>
                            <li>Average Grade: <strong>87%</strong></li>
                            <li>Top Subject: <strong>Narative Text</strong></li>
                            <li>Courses left: <strong>24%</strong></li>
                        </ul>
                    </div>
                    <div className="card news">
                        <h3>Latest News</h3>
                        <p>School Science Fair next month. Get ready!</p>
                        <p>Basketball team wins regional championship.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;