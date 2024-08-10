import React from 'react';
import TrafficGraph from './TrafficGraph'; // Import your graph component
import './Dashboard.css';
import { Line } from 'react-chartjs-2';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="metrics">
                <div className="card">Total Attacks Blocked</div>
                <div className="card">System Uptime</div>
                <div className="card">Average Response Time</div>
            </div>
            <div className="main-content">
                <div className="central-graph">
                    <TrafficGraph /> {/* Insert the graph here */}
                </div>
                <div className="alert-feed">
                    <h2>Alerts</h2>
                    <ul>
                        <li>Phishing attempt detected and blocked</li>
                        <li>DDoS attack mitigated</li>
                    </ul>
                </div>
            </div>
            <div className="response-log">
                <h2>Recent Activity</h2>
                <ul>
                    <li>Blocked IP: 192.168.1.1</li>
                    <li>Quarantined file: suspicious.exe</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
