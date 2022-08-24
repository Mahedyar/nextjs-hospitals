import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef } from "react";
import Hospitals from "../components/Hospitals/Hospitals";
import SingleHospital from "../components/Hospitals/SingleHospital/SingleHospital";
import Navigation from "../components/Navigation/Navigation";
import HOSPITALS from "../HOSPITALS";
import useWindowSize from "../hooks/useWindowSize";

const { HospitalsData } = HOSPITALS;
const hospital = HospitalsData[0];

export default function Home() {
  const flsdgflsdg = useWindowSize()
  console.log(flsdgflsdg);
  return (
    <>
      <Head>
        <title>سایت جامع بیمارستان های تهران</title>
      </Head>
      <header>
      <Navigation  />
      </header>
      
      <Hospitals />
    </>
  );
}
