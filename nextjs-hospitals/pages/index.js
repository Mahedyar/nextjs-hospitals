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
        <Navigation onFilter={hospitalFilterHandler} />
        <Hospitals />
        {/* <SingleHospital
          // name={Hospital.name}
          // proficiency={Hospital.proficiency}
          // type={Hospital.type}
          // institude={Hospital.institude}
          // state={Hospital.state}
          // city={Hospital.city}
          // region={Hospital.region}
          // phNumber={Hospital.phoneNumber}
          // fax={Hospital.fax}
          // address={Hospital.address}
          // website={Hospital.website}
          // email={Hospital.email}
          // image={Hospital.image}
          hospital = {hospital}
        /> */}
      </>
    );
}
