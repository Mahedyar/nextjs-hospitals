import { useState } from "react";
import HOSPITALS from "../../HOSPITALS";

const filterItems = (searchValue , defaultValue)=>{
    if(!searchValue){
        return defaultValue
    }
    return defaultValue.filter((item)=>item.name.includes(searchValue))
}

const { HospitalsData } = HOSPITALS;
const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = filterItems(searchValue, HospitalsData);
  props.onFilter(filteredItems)
  return (
    <>
      <input onChange={(e) => setSearchValue(e.target.value)} />
    </>
  );
};

export default SearchBox;
