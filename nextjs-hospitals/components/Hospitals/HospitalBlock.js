import classes from "../../styles/HospitalBlock.module.css";
import FarabiPic from "../../public/images/Farabi.jpg";
import Image from "next/image";

const HospitalBlock = (props) => {
  // console.log(props.item.image);

  return (
    <>
      <div className={classes["container-block"]}>
        {/* <Image
          src="/images/Farabi.jpg"
          className={classes.imageHolder}
          // layout="fill"
          height={"225rem"}
          width={"100%"}
        /> */}
        <img
          src="/images/Farabi.jpg"
          className={classes.imageHolder}
          
         
        />
        <div className={classes["text-holder"]}>
          <div className={classes.innerText}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default HospitalBlock;
