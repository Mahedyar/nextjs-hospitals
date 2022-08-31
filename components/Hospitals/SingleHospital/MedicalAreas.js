import React from "react";
import classes from "../.././../styles/MedicalAreas.module.css";
import useWindowSize from "../../../hooks/useWindowSize";
 const MedicalAreas = (props) => {
  const windowWidth = useWindowSize();
  return (
    <div>
      <div className={classes["medicalArea-parts"]}>
        <span
          className={classes["medicalArea-keys"]}
          style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
        >
          بخش های بستری :
        </span>
        <span>{props.hospitalizationAreas}</span>
      </div>
      {props.staredAreas.length > 0 && (
        <div className={classes["medicalArea-parts"]}>
          <span
            className={classes["medicalArea-keys"]}
            style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
          >
            بخش های ستاره دار :
          </span>
          {props.staredAreas}
        </div>
      )}

      {props.paraclinicAreas.length > 1 && (
        <div className={classes["medicalArea-parts"]}>
          <span
            className={classes["medicalArea-keys"]}
            style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
          >
            بخش های پاراکلینیک :
          </span>
          {props.paraclinicAreas}
        </div>
      )}

      {props.clinicalAreas.length > 0 && (
        <div className={classes["medicalArea-parts"]}>
          <span
            className={classes["medicalArea-keys"]}
            style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
          >
            بخش های درمانگاهی :
          </span>
          {props.clinicalAreas}
        </div>
      )}
    </div>
  );
};

export default MedicalAreas
