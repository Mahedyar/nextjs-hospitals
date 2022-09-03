import classes from "../styles/DropDown.module.css";
const options = [
  { value: "1", label: "۱" },
  { value: "2", label: "۲" },
  { value: "3", label: "۳" },
  { value: "4", label: "۴" },
  { value: "5", label: "۵" },
  { value: "6", label: "۶" },
  { value: "7", label: "۷" },
  { value: "8", label: "۸" },
  { value: "9", label: "۹" },
  { value: "10", label: "۱۰" },
  { value: "11", label: "۱۱" },
  { value: "12", label: "۱۲" },
  { value: "13", label: "۱۳" },
  { value: "14", label: "۱۴" },
  { value: "15", label: "۱۵" },
  { value: "16", label: "۱۶" },
  { value: "17", label: "۱۷" },
  { value: "18", label: "۱۸" },
  { value: "19", label: "۱۹" },
  { value: "20", label: "۲۰" },
  { value: "21", label: "۲۱" },
  { value: "22", label: "۲۲" },
];

const DropDown = (props) => {
  const menu = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className={`${classes["dropDown-container"]} `}>
      <select
        className={classes.dropDown}
        value={props.value}
        onChange={props.onChange}
      >
        <option disabled={false} value="">
          ...جستجو در منطقه
        </option>
        {menu}
      </select>
    </div>
  );
};

export default DropDown;
