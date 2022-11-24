import { Container } from "react-bootstrap";
import DashboardForm from "./DashboardForm";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

// import {
//   Charts,
//   ChartContainer,
//   ChartRow,
//   YAxis,
//   LineChart,
// } from "react-timeseries-charts";

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

const DUMMY_ENERGY = [
  {
    metric: "Water",
    amount: 0.5,
    date: new Date(2022, 3, 3),
  },
  {
    metric: "Warm Water",
    amount: 0.4,
    date: new Date(2022, 2, 17),
  },
  {
    metric: "Heating",
    amount: 57.1,
    date: new Date(2022, 6, 21),
  },
];

const Dashboard: React.FC = () => {
  const [energy, setEnergy] = useState(DUMMY_ENERGY);

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
        borderColor: "rgb(1335, 102, 132)",
        tension: 0.1,
      },
      {
        label: "My First Dataset",
        data: warmWaterArray,
        fill: true,
        borderColor: "rgb(95, 22, 192)",
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

  const submitDataHandler = (submittedFormData) => {
    const formData = {
      ...submittedFormData,
      id: Math.random().toString(),
    };
    setEnergy((prevFormData) => {
      return [...prevFormData, formData];
    });

    console.log(energy);
  };

  // const data = {
  //   name: "trafficc",
  //   columns: ["time", "value"],
  //   points: [
  //     [1400425947000, 52],
  //     [1400425948000, 18],
  //     [1400425949000, 26],
  //     [1400425950000, 93],
  //   ],
  // };
  // const timerange = new TimeSeries(data);

  return (
    <Container className="bg-white">
      <div>
        <h1>Dashboard</h1>
        <div>
          {waterArray.map((m) => {
            return <div>{m}</div>;
          })}
        </div>
        <div>
          {energy.map((m) => {
            return (
              <div>
                {m.metric}
                {m.amount}
              </div>
            );
          })}
        </div>
      </div>
      <DashboardForm onSubmitData={submitDataHandler} />
      {/* <ChartContainer timeRange={timerange}>
        <ChartRow height="200">
          <YAxis id="y" label="Price ($)" min={0.5} max={1.5} format="$,.2f" />
          <Charts>
            <LineChart
              axis="y"
              breakLine={false}
              series={waterArray}
              columns={["aud", "euro"]}
              interpolation="curveBasis"
            />
          </Charts>
        </ChartRow>
      </ChartContainer> */}
      <Line data={chartData} className="max-w-lg" />
    </Container>
  );
};

export default Dashboard;
