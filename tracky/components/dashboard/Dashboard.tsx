import { Container } from "react-bootstrap";
import DashboardForm from "./DashboardForm";

const Dashboard: React.FC = () => {
  const waterArray = [0.5, 65.62, 67.01, 68.1, 69.45];
  const warmWaterArray = [0.4, 36.91, 37.45, 37.84, 38.27];
  const heatingArray = [57.1, 2523.6, 2523.6, 2523.6, 2523.6];

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
    </Container>
  );
};

export default Dashboard;
