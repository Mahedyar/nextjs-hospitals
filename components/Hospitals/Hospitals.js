import HospitalBlock from "./HospitalBlock";
import classes from "../../styles/Hospitals.module.css";
import HOSPITALS from "../../lib/HOSPITALS";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// const { HospitalsData } = HOSPITALS;

const getFilteredItems = (searchValue, defaultItems) => {
  if (!searchValue) {
    return defaultItems;
  }
  return defaultItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      // item.type.includes(searchValue) ||
      item.medicalAreas.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const Hospitals = (props) => {
  const windowWidth = useWindowSize();
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = getFilteredItems(searchValue, props.hospitalsData);
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
          style={{
            fontFamily: "Dana",
            width: `${windowWidth > 426 ? "30%" : "60%"}`,
          }}
        />
      </div>
      {searchValue.length > 0 && (
        <div className={classes.searchText}>
          نتیجه جستجو در ارتباط با `{searchValue}` :
        </div>
      )}

      <div className={classes["centerMaker"]}>
        <div
          className={classes["hospitals-container"]}
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
