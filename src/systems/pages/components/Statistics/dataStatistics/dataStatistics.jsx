import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Đăng ký các thành phần cần thiết
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//fake dữ liệu
const generateRandomData = () => {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 200));
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Thống kê dữ liệu người mượn",
        },
    },
    scales: {
        x: {
            type: "category", // Sử dụng 'category' scale cho trục x
        },
        y: {
            type: "linear", // Sử dụng 'linear' scale cho trục y
        },
    },
};

const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Dataset 1",
            data: generateRandomData(),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Dataset 2",
            data: generateRandomData(),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

const DataStatistics = () => {
    return <Line className="h-[500px]" options={options} data={data} />;
};

export default DataStatistics;
