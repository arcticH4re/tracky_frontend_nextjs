import { Container } from "react-bootstrap";
import DashboardForm from "./DashboardForm";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import MonthlyChart from "./MonthlyChart";

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

const WATER = [
  {
    amount: 0.5,
    date: new Date(2022, 3, 3),
  },
  {
    amount: 65.62,
    date: new Date(2022, 3, 3),
  },
  {
    amount: 67.01,
    date: new Date(2022, 3, 3),
  },
  {
    amount: 68.1,
    date: new Date(2022, 3, 3),
  },
  {
    amount: 69.45,
    date: new Date(2022, 3, 3),
  },
];

const WARM_WATER = [
  {
    amount: 0.4,
    date: new Date(2022, 11, 28),
  },
  {
    amount: 36.91,
    date: new Date(2022, 12, 28),
  },
  {
    amount: 37.45,
    date: new Date(2022, 11, 28),
  },
  {
    amount: 37.84,
    date: new Date(2022, 11, 28),
  },
  {
    amount: 38.27,
    date: new Date(2022, 11, 28),
  },
];

const HEATING = [
  {
    amount: 57.1,
    date: new Date(2022, 5, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 6, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 7, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 8, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 9, 13),
  },
];

const Dashboard: React.FC = () => {
  const [water, setWater] = useState(WATER);
  const [warmWater, setWarmWater] = useState(WARM_WATER);
  const [heating, setHeating] = useState(HEATING);

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

  const waterData = {
    labels: labelArray,
    datasets: [
      {
        label: "My First Dataset",
        data: water.map((w) => w.amount),
        fill: true,
        borderColor: "black",
        tension: 0.1,
      },
    ],
  };

  const warmWaterData = {
    labels: labelArray,
    datasets: [
      {
        label: "My First Dataset",
        data: warmWater.map((w) => w.amount),
        fill: true,
        borderColor: "red",
        tension: 0.1,
      },
    ],
  };

  const heatingData = {
    labels: labelArray,
    datasets: [
      {
        label: "My First Dataset",
        data: heating.map((w) => w.amount),
        fill: true,
        borderColor: "yellow",
        tension: 0.1,
      },
    ],
  };

  const eData = {
    labels: labelArray,
    datasets: [
      {
        label: "My First Dataset",
        data: heating.map((w) => w.amount),
        fill: true,
        borderColor: "blue",
        tension: 0.1,
      },
    ],
  };

  const submitDataHandler = (submittedFormData) => {
    const formData = {
      ...submittedFormData,
      id: Math.random().toString(),
    };

    if (formData.metric === "Cold Water") {
      setWater((prevFormData) => {
        const { amount, date } = formData;
        return [
          ...prevFormData,
          {
            amount: +amount,
            date,
          },
        ];
      });
    } else if (formData.metric === "Warm Water") {
      setWarmWater((prevFormData) => {
        const { amount, date } = formData;
        return [
          ...prevFormData,
          {
            amount: +amount,
            date,
          },
        ];
      });
    } else {
      setHeating((prevFormData) => {
        const { amount, date } = formData;
        return [
          ...prevFormData,
          {
            amount: +amount,
            date,
          },
        ];
      });
    }
  };

  return (
    <Container className="bg-white">
      <div>
        <h1 className="mb-4">MY CONSUMPTION</h1>
        <div>
          WATER
          {water.map((m) => {
            return (
              <div>
                {m.amount} {m.date.toString()}
              </div>
            );
          })}
        </div>
        <div>
          WARM WATER
          {warmWater.map((m) => {
            return (
              <div>
                {m.amount} {m.date.toString()}
              </div>
            );
          })}
        </div>
        <div>
          HEATING
          {heating.map((m) => {
            return (
              <div>
                {m.amount} {m.date.toString()}
              </div>
            );
          })}
        </div>
      </div>
      <DashboardForm onSubmitData={submitDataHandler} />
      <div className="grid grid-cols-2 gap-2">
        <MonthlyChart data={waterData} className="max-w-lg" />
        <MonthlyChart data={warmWaterData} className="max-w-lg" />
        <MonthlyChart data={heatingData} className="max-w-lg" />
        <MonthlyChart data={eData} className="max-w-lg" />
      </div>
    </Container>
  );
};

export default Dashboard;
