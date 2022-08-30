import React from "react";
import classes from "../.././../styles/MedicalAreas.module.css";

export const MedicalAreas = (props) => {
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
      <div className={classes["medicalArea-parts"]}>
        <span
          className={classes["medicalArea-keys"]}
          style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
        >
          بخش های ستاره دار :
        </span>
        {props.staredAreas}
      </div>
      <div className={classes["medicalArea-parts"]}>
        <span
          className={classes["medicalArea-keys"]}
          style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
        >
          بخش های پاراکلینیک :
        </span>
        {props.paraclinicAreas}
      </div>
      <div className={classes["medicalArea-parts"]}>
        <span
          className={classes["medicalArea-keys"]}
          style={{ fontSize: `${windowWidth > 426 ? "1rem" : "0.9rem"}` }}
        >
          بخش های درمانگاهی :
        </span>
        {props.clinicalAreas}
      </div>
    </div>
  );
};
