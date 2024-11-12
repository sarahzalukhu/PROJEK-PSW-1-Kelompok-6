
import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
    return (
        <div className="dashboard">
            
            <aside className="sidebar">
                <div className="logo">
                    <img src="./imange.png" alt="" />
                    <h2>SMA RK BINTAG TIMUR</h2>
                </div>
                <nav>
                    <ul>
                        <li className="nav-item">
                            <Link to="/dashboard">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule">
                                <i className="fas fa-calendar-alt"></i> Schedule
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#grades">
                                <i className="fas fa-graduation-cap"></i> Grades
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#announcements">
                                <i className="fas fa-bullhorn"></i> Announcements
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#profile">
                                <i className="fas fa-user"></i> Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#settings">
                                <i className="fas fa-cogs"></i> Settings
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="active-teachers">
                    <p>Active Teachers</p>
                    <div className="teacher-icons">
                        <img src="/teacher1.jpg" alt="Teacher 1" />
                        <img src="/teacher2.jpg" alt="Teacher 2" />
                        <img src="/teacher3.jpg" alt="Teacher 3" />
                        <span>+15</span>
                    </div>
                </div>
            </aside>

            
            <main className="main-content">
                
                <header>
                    <h1>Welcome, [User]</h1>
                    <p>Here’s an overview of your school activities</p>
                </header>

            
                <section className="overview">
                    <div className="card schedule">
                        <h3>Today's Schedule</h3>
                        <p>Math, Science, History</p>
                    </div>
                    <div className="card assignments">
                        <h3>Upcoming Assignments</h3>
                        <p>Complete Chapter 3 in Math</p>
                    </div>
                    <div className="card notifications">
                        <h3>Notifications</h3>
                        <p>Don’t forget to submit your project by Friday.</p>
                    </div>
                </section>

            
                <section className="analytics">
                    <div className="chart">
                        <h3>Attendance</h3>
                        <canvas id="attendanceChart"></canvas>
                    </div>
                    <div className="chart">
                        <h3>Grades</h3>
                        <canvas id="gradesChart"></canvas>
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
                                    <td>1st Place Science Fair</td>
                                    <td>June 2024</td>
                                </tr>
                                <tr>
                                    <td>Basketball Team MVP</td>
                                    <td>September 2024</td>
                                </tr>
                                <tr>
                                    <td>Math Olympiad Winner</td>
                                    <td>October 2024</td>
                                </tr>
                                <tr>
                                    <td>Student of the Month</td>
                                    <td>November 2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            
                <section className="additional-info">
                    <div className="card class-stats">
                        <h3>Class Statistics</h3>
                        <ul>
                            <li>Average Grade: <strong>85%</strong></li>
                            <li>Top Subject: <strong>Math</strong></li>
                            <li>Students Passing: <strong>92%</strong></li>
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
