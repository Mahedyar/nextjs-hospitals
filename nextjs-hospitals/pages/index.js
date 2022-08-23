import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef } from "react";
import Hospitals from "../components/Hospitals/Hospitals";
import SingleHospital from "../components/Hospitals/SingleHospital/SingleHospital";
import Navigation from "../components/Navigation/Navigation";
import HOSPITALS from '../HOSPITALS';

const { HospitalsData } = HOSPITALS;
const hospital = HospitalsData[0];

export default function Home() {
    const hospitalFilterHandler = (inputValue) => {};
    // const filterTest = HospitalsData.filter((singlehospital) => singlehospital.id === "Farabi" )
    // console.log(filterTest);
  
    return (
      <>
      <Head>
        <title>سایت جامع بیمارستان های تهران</title>
      </Head>
        <Navigation onFilter={hospitalFilterHandler} />
        <Hospitals />
      </>
    );
}
