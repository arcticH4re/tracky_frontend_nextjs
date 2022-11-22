import { Container } from "react-bootstrap";
import DashboardForm from "./DashboardForm";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const waterArray = [0.5, 65.62, 67.01, 68.1, 69.45];
  const warmWaterArray = [0.4, 36.91, 37.45, 37.84, 38.27];
  const heatingArray = [57.1, 2523.6, 2523.6, 2523.6, 2523.6];

  const labelArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = {
    labels: labelArray,
    datasets: [
      {
        label: "My First Dataset",
        data: waterArray,
        fill: true,
        borderColor: "rgb(95, 102, 132)",
        tension: 0.1,
      },
      {
        label: "My First Dataset",
        data: warmWaterArray,
        fill: true,
        borderColor: "rgb(75, 122, 192)",
        tension: 0.1,
      },
      {
        label: "My First Dataset",
        data: heatingArray,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container className="bg-white">
      <div>
        <h1>Dashboard</h1>
        <div>
          {waterArray.map((m) => {
            return <div>{m}</div>;
          })}
        </div>
      </div>
      <DashboardForm />
      <Line data={chartData} />
    </Container>
  );
};

export default Dashboard;
