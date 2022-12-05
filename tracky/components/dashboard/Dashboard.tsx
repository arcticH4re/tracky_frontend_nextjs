import { Container } from "react-bootstrap";
import DashboardForm from "./DashboardForm";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import MonthlyChart from "../charts/MonthlyChart";
import Link from "next/link";

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
  Filler,
} from "chart.js";
import { WATER_PAGE } from "../../urls/in_app_urls";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
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
        label: "Cold water consumption",
        data: water.map((w) => w.amount),
      },
    ],
  };

  const warmWaterData = {
    labels: labelArray,
    datasets: [
      {
        label: "Warm water consumption",
        data: warmWater.map((w) => w.amount),
      },
    ],
  };

  const heatingData = {
    labels: labelArray,
    datasets: [
      {
        label: "Heating consumption",
        data: heating.map((w) => w.amount),
      },
    ],
  };

  const eData = {
    labels: labelArray,
    datasets: [
      {
        label: "Energy consumption",
        data: heating.map((w) => w.amount),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.7,
        borderWidth: 2.5,
        borderColor: "rgb(137,207,240)",
        fill: "start",
        backgroundColor: "rgb(137,207,240, 0.3)",
      },
      point: {
        radius: 2,
        hitRadius: 6,
        borderWidth: 2.5,
        borderColor: "rgb(137,207,240)",
        backgroundColor: "rgb(137,207,240)",
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(211, 211, 211, 0.3)",
        },
      },
      y: {
        grid: {
          color: "rgba(211, 211, 211, 0.3)",
        },
      },
    },
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
      </div>
      <div className="grid grid-cols-3 gap-2 justify-items-center">
        <div className="grid grid-cols-2 col-span-2 gap-4">
          <Link href={WATER_PAGE}>
            <a className="no-underline">
              <MonthlyChart data={waterData} options={options} />
            </a>
          </Link>
          <MonthlyChart data={warmWaterData} options={options} />
          <MonthlyChart data={heatingData} options={options} />
          <MonthlyChart data={eData} options={options} />
        </div>
        <DashboardForm
          onSubmitData={submitDataHandler}
          className="col-span-1"
        />
      </div>
    </Container>
  );
};

export default Dashboard;
