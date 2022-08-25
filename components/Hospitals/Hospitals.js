import HospitalBlock from "./HospitalBlock";
import classes from "../../styles/Hospitals.module.css";
import HOSPITALS from "../../lib/HOSPITALS";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const { HospitalsData } = HOSPITALS;
const getFilteredItems = (searchValue, defaultItems) => {
  if (!searchValue) {
    return defaultItems;
  }
  return defaultItems.filter((item) => item.name.includes(searchValue));
};

const Hospitals = (props) => {
  const windowWidth = useWindowSize();
  // const windowWidth = useWindowDimensions()
  // const windowWidth = windowSize.windowWidth
  // console.log(windowWidth);
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = getFilteredItems(searchValue, HospitalsData);
  const HospitalItems = filteredItems.map((item) => (
    <HospitalBlock
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
    />
  ));

  return (
    <>
      <div className={classes.searchBox}>
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="...جستجو"
          style={{ fontFamily: "Dana" }}
        />
      </div>

      <div className={classes["centerMaker"]}>
        <div
          className={classes["hospitals-container__fullSize"]}
          style={{
            gridTemplateColumns: `${
              windowWidth > 769 ? "auto auto auto auto" : "auto "
            }`,
          }}
        >
          {HospitalItems}
        </div>
      </div>
    </>
  );
};

export default Hospitals;
