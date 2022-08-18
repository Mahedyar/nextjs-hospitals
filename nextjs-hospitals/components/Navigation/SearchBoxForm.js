import { forwardRef, useRef } from "react";
import classes from "../../styles/SearchBoxForm.module.css";

const SearchBoxFrom = (props) => {
  const searchValue = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("hello world");
    props.onFilter(searchValue)
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input ref={searchValue} placeholder="...جستجو"></input>
        <button>i am printing</button>
      </form>
    </>
  );
};

export default SearchBoxFrom;
