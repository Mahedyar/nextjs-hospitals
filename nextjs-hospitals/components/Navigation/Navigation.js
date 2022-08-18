import { useState , useRef} from "react";
import classes from "../../styles/Navigation.module.css";
import SearchBoxFrom from "./SearchBoxForm";


// const [query , setQuery] = useState("")

const Navigation = (props) => {
  

  // const submitHandler = ()=>{
    

  // }
  // props.onFilter(searchValue)

  return (
    <>
      <div  className={classes.navigation}>
        <span>صفحه اصلی</span>
        <SearchBoxFrom onFilter = {props.onFilter} />
      </div>
    </>
  );
};

export default Navigation;
