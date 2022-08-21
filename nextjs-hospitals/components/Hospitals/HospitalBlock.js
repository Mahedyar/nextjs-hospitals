import classes from "../../styles/HospitalBlock.module.css";
import FarabiPic from "../../public/images/Farabi.jpg";
import Image from "next/image";
import Link from "next/link";

const HospitalBlock = (props) => {
  // console.log(props.item.image);

  return (
    <>
      <Link href={`/hospitals/${props.id}`}>
        <div className={classes["container-block"]}>
          <img src={props.image} className={classes.imageHolder} />
          <div className={classes["text-holder"]}>
            <div className={classes.innerText}>{props.children}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HospitalBlock;
