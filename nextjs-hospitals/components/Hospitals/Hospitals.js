import HospitalBlock from "./HospitalBlock";
import classes from "../../styles/Hospitals.module.css";
import HOSPITALS from "../../HOSPITALS";
import { useState } from "react";

const { HospitalsData } = HOSPITALS;
const getFilteredItems = (searchValue, defaultItems) => {
  if (!searchValue) {
    return defaultItems;
  }
  return defaultItems.filter((item) => item.name.includes(searchValue));
};

const Hospitals = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = getFilteredItems(searchValue, HospitalsData);
  const HospitalItems = filteredItems.map((item) => (
    <HospitalBlock id={item.id} image={item.image} name={item.name} />
  ));
  // const [hostpitalBlocks , setHospitalBlocks] = useState([])
  // const getFilteredItems = (filteredItems) => {
  //   // return filteredItems
  //   // setHospitalBlocks(filteredItems.map((item) => (
  //   //   <HospitalBlock id={item.id} image={item.image} name={item.name} />
  //   // )))
  //   setHospitalBlocks(filteredItems)
  // }
  // const HospitalItems = hostpitalBlocks.map((item) => (
  //   <HospitalBlock id={item.id} image={item.image} name={item.name} />
  // ))
  return (
    <>
      <div className={classes.searchBox}>
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="...جستجو"
          style={{fontFamily:"Dana"}}
        />
      </div>

      {/* <SearchBox onFilter = {getFilteredItems}/> */}
      <div className={classes["centerMaker"]}>
        <div className={classes["hospitals-container"]}>{HospitalItems}</div>
      </div>
    </>
  );
};

export default Hospitals;
