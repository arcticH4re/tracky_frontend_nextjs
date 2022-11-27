import { Container } from "react-bootstrap";
import DashboardForm from "./DashboardForm";
import React, { useState } from "react";

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
    date: new Date(2022, 11, 28),
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
    date: new Date(2022, 5, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 5, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 5, 13),
  },
  {
    amount: 2523.6,
    date: new Date(2022, 5, 13),
  },
];

const Dashboard: React.FC = () => {
  const [water, setWater] = useState(WATER);
  const [warmWater, setWarmWater] = useState(WARM_WATER);
  const [heating, setHeating] = useState(HEATING);

  const waterArray = [0.5, 65.62, 67.01, 68.1, 69.45];
  const warmWaterArray = [0.4, 36.91, 37.45, 37.84, 38.27];
  const heatingArray = [57.1, 2523.6, 2523.6, 2523.6, 2523.6];

  const submitDataHandler = (submittedFormData) => {
    const formData = {
      ...submittedFormData,
      id: Math.random().toString(),
    };

    console.log(water);
    console.log(warmWater);
    console.log(heating);

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
    </Container>
  );
};

export default Dashboard;
