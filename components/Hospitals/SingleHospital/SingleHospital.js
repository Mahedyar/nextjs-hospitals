import TopPart from "./TopPart/TopPart";
import classes from "../../../styles/SingleHospital.module.css";
import Link from "next/link";
import useWindowSize from "../../../hooks/useWindowSize";
import MedicalAreas  from "./medicalAreas";

const SingleHospital = (props) => {
  const windowWidth = useWindowSize();
  console.log(props.hospital.hospitalizationAreas.length);
  return (
    <>
      <div className={classes.contentContainer}>
        {windowWidth < 426 && (
          <div
            //  style={{text-align : "left"}}
            style={{ textAlign: "left", marginBottom: ".5rem" }}
          >
            <Link href="/">
              <a style={{ fontSize: "0.8rem" }}>بازگشت به خانه ←</a>
            </Link>
          </div>
        )}
        <div
          className={classes.hospitalName}
          style={{ fontSize: `${windowWidth > 426 ? "" : "0.8rem"}` }}
        >
          <span>
            بیمارستان {props.hospital.type} {props.hospital.name}{" "}
          </span>
          {windowWidth > 426 && (
            <Link href="/">
              <a>بازگشت به خانه ←</a>
            </Link>
          )}
        </div>
        <TopPart
          proficiency={props.hospital.proficiency}
          institude={props.hospital.institude}
          // state={props.hospital.state}
          // city={props.hospital.city}
          region={props.hospital.region}
          phoneNumber={props.hospital.phoneNumber}
          fax={props.hospital.fax}
          address={props.hospital.address}
          website={props.hospital.website}
          email={props.hospital.email}
          image={props.hospital.image}
        />
        <div
          className={`${classes.bottomBoxes} `}
          style={{ fontSize: `${windowWidth > 426 ? "" : "0.8rem"}` }}
        >
          <div
            className={classes["medicalAreas-title"]}
            style={{
              fontSize: `${windowWidth > 426 ? "1.2rem" : "1rem"}`,
            }}
          >
            {" "}
            معرفی بیمارستان {props.hospital.name}{" "}
          </div>
          <div>{props.hospital.introduction}</div>
        </div>
        <div
          className={`${classes.bottomBoxes} , ${classes.medicalAreas} `}
          style={{ fontSize: `${windowWidth > 426 ? "" : "0.8rem"}` }}
        >
          <div
            style={{
              fontSize: `${windowWidth > 426 ? "1.2rem" : "1rem"}`,
            }}
            className={classes["medicalAreas-title"]}
          >
            بخش های درمانی
          </div>
          {/* <div>{props.hospital.medicalAreas}</div> */}
          {props.hospital.hospitalizationAreas.length < 3 ? (
            <div>{props.hospital.medicalAreas}</div>
          ) : (
            <MedicalAreas
              hospitalizationAreas={props.hospital.hospitalizationAreas}
              staredAreas={props.hospital.staredAreas}
              paraclinicAreas={props.hospital.paraclinicAreas}
              clinicalAreas={props.hospital.clinicalAreas}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleHospital;
