import HOSPITALS from "../../../HOSPITALS";
import TopPart from "./TopPart/TopPart";
import classes from "../../../styles/SingleHospital.module.css";
import Link from "next/link";

const SingleHospital = (props) => {
  return (
    <>
      <div className={classes.contentContainer}>
        <div>
          <div className={classes.hospitalName}>
            <span>
              بیمارستان {props.hospital.type} {props.hospital.name}{" "}
            </span>
            <Link href="/">
              <a>بازگشت به خانه ←</a>
            </Link>
          </div>
          {/* <div>نوع تخصص : {props.hospital.proficiency}</div> */}
          {/* <div>بیمارستان {props.hospital.type}</div> */}
        </div>
        <TopPart
          proficiency={props.hospital.proficiency}
          institude={props.hospital.institude}
          state={props.hospital.state}
          city={props.hospital.city}
          region={props.hospital.region}
          phoneNumber={props.hospital.phoneNumber}
          fax={props.hospital.fax}
          address={props.hospital.address}
          website={props.hospital.website}
          email={props.hospital.email}
          image={props.hospital.image}
        />
        <div className={`${classes.bottomBoxes} `}>
          <div className={classes["medicalAreas-title"]}>
            {" "}
            معرفی بیمارستان {props.hospital.name}{" "}
          </div>
          <div>{props.hospital.introduction}</div>
        </div>
        <div className={`${classes.bottomBoxes} , ${classes.medicalAreas} `}>
          <div className={classes["medicalAreas-title"]}>بخش های درمانی</div>
          <div>{props.hospital.medicalAreas}</div>
        </div>
      </div>
    </>
  );
};

export default SingleHospital;
