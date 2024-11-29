import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from './1.png';
import guru1 from './Tristan.jpg';
import guru2 from './Tristan.jpg';
import guru3 from './Tristan.jpg';
import guru4 from './Tristan.jpg';

function Dashboard() {
    const [isDropdownOneOpen, setIsDropdownOneOpen] = useState(false);
    const [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState(false);
    const [isDropdownThreeOpen, setIsDropdownThreeOpen] = useState(false);
    const [isDropdownFourOpen, setIsDropdownFourOpen] = useState(false);
    const [isDropdownFiveOpen, setIsDropdownFiveOpen] = useState(false);
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
    const toggleDropdownFour = () => {
        setIsDropdownFourOpen(prevState => !prevState);
    };
    const toggleDropdownFive = () => {
        setIsDropdownFiveOpen(prevState => !prevState);
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
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li className="nav-item">
                            <button className="dropdown-side" onClick={toggleDropdownFour}>Semester 1</button>
                            {isDropdownFourOpen && (
                                <div className="dropdown-list">
                                    <a href="/greetings&Introduction" className="dropdown-itemm">Greetings And Introduction</a>
                                    <a href="/recount text" className="dropdown-itemm">Recount Text</a>
                                    <a href="/descriptive text" className="dropdown-itemm">Descriptive Text</a>
                                    <a href="/simple present tense" className="dropdown-itemm">Simple Present Tense</a>
                                    <a href="/informal letters" className="dropdown-itemm">Informal Letters</a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item">
                            <button className="dropdown-side" onClick={toggleDropdownFive}>Semester 2</button>
                            {isDropdownFiveOpen && (
                                <div className="dropdown-list">
                                    <a href="/narative text" className="dropdown-itemm">Narative Text</a>
                                    <a href="/procedural text" className="dropdown-itemm">Procedural Text</a>
                                    <a href="/exposition text" className="dropdown-itemm">Exposition Text</a>
                                    <a href="/present continuous tense" className="dropdown-itemm">Present Continuous Tense</a>
                                    <a href="/report text" className="dropdown-itemm">Report Text</a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item">
                            <Link to="/quiz 1">Quiz 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quiz 2">Quiz 2</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </li>
                    </ul>
                </nav>
                <div className="active-teachers">
                    <p>Active Teachers</p>
                    <div className="teacher-icons">
                        <img src={guru1} alt="Andrey"/>
                        <img src={guru2} alt="Markus"/>
                        <img src={guru3} alt="Sarah"/>
                        <img src={guru4} alt="Tristan"/>
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
                            <li>Average Grade: <strong>86%</strong></li>
                            <li>Top Subject: <strong>Simple Present Tense</strong></li>
                            <li>Courses left: <strong>56%</strong></li>
                        </ul>
                    </div>
                    <div className="card news">
                        <h3>Latest News</h3>
                        <p>UPDATE!!! You are the top scorer of the quiz 1, go claim your reward!</p>
                        <p>Elang is curently the number 1 language learning apps, claim your reward now!</p>
                        <p>Hello {username}, We've just added a new course, let's learn about Report Text :)</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;