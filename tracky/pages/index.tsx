import type { NextPage } from "next";
import Head from "next/head";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Home from "../components/home/Home";

const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;
