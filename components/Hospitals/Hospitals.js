import HospitalBlock from "./HospitalBlock";
import classes from "../../styles/Hospitals.module.css";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import DropDown from "./DropDown";

const getFilteredItems = (searchValue, dropDownValue, defaultItems) => {
  if (!searchValue && !dropDownValue) {
    return defaultItems;
  }
  if (!dropDownValue) {
    return defaultItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.medicalAreas.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  if (!searchValue) {
    return defaultItems.filter((item) => item.region == dropDownValue);
  }
  return defaultItems.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        item.region == dropDownValue) ||
      (item.medicalAreas.toLowerCase().includes(searchValue.toLowerCase()) &&
        item.region == dropDownValue)
  );
};

const Hospitals = (props) => {
  const windowWidth = useWindowSize();
  const [searchValue, setSearchValue] = useState("");
  const [dropDownValue, setDropDownValue] = useState("");
  const handleDropDownChange = (event) => {
    setDropDownValue(event.target.value);
  };
  const filteredItems = getFilteredItems(
    searchValue,
    dropDownValue,
    props.hospitalsData
  );

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
        {windowWidth > 425 && (
          <DropDown value={dropDownValue} onChange={handleDropDownChange} />
        )}

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
      {windowWidth < 426 && (
        <div className={classes.searchText} style={{marginLeft:"50px"}}>
          <DropDown value={dropDownValue} onChange={handleDropDownChange} />
        </div>
      )}

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
