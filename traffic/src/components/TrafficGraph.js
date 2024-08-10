import React from 'react';
import { Line } from 'react-chartjs-2';
import './TrafficGraph.css'; // Import the CSS file here
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function TrafficGraph() {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Total Attacks Detected',
                data: [3, 4, 5, 2, 6, 4, 7],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Day of the Week',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Attacks',
                },
            },
        },
        plugins: {
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                ctx.fillStyle = 'red'; // Match the background color
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            },
        },
    };

    return (
        <div className="graph-container">
            <div className="graph-box">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default TrafficGraph;
