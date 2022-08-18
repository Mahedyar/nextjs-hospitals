import HospitalBlock from "./HospitalBlock";
import classes from "../../styles/Hospitals.module.css";
import FarabiPic from "../../public/images/Farabi.jpg";
import HOSPITALS from "../../HOSPITALS";
import { useState } from "react";

const getFilteredItems = (searchValue, defaultItems) => {
  if (!searchValue) {
    return defaultItems;
  }
  return defaultItems.filter((item) => item.name.includes(searchValue));
};
const { HospitalsData } = HOSPITALS;

const Hospitals = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = getFilteredItems(searchValue, HospitalsData);
  const HospitalItems = filteredItems.map((item) => (
    <HospitalBlock city={item.city}>{item.name}</HospitalBlock>
  ));
  return (
    <>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Search..."
      />
      <div className={classes["hospitals-container"]}>{HospitalItems}</div>
    </>
  );
};

export default Hospitals;
