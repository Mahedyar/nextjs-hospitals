import classes from "../../styles/HospitalBlock.module.css";

import Link from "next/link";

const HospitalBlock = (props) => {


  return (
    <>
      <Link href={`/hospitals/${props.id}`}>
        <div className={classes["container-block"]}>
          <img src={props.image} className={classes.imageHolder} />
          <div className={classes["text-holder"]}>
            <div className={classes.innerText}>بیمارستان {props.name}{" "}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HospitalBlock;
