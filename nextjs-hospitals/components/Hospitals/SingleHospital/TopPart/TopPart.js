import classes from "../../../../styles/TopPar.module.css";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const TopPart = (props) => {
  if (typeof window !== "undefined") {
    const { windowHeight, windowWidth } = useWindowDimensions();
    return (
      <div
        className={classes["topBar-container"]}
        style={{ display: `${windowWidth < 769 ? "block" : "flex"}` }}
      >
        {windowWidth < 769 && (
          <div>
            <img className={classes["topBar-image"]} src={props.image} />
          </div>
        )}
        <div
          className={classes["topBar-listItems"]}
          style={{ width: `${windowWidth < 769 ? "100%" : "45%"}` }}
        >
          <div>
            نوع تخصص :{" "}
            <span className={classes.boldText}>&nbsp;{props.proficiency}</span>
          </div>
          {/* <div>بیمارستان {props.type}</div> */}
          <div>
            سازمان متبوع :{" "}
            <span className={classes.boldText}>&nbsp;{props.institude}</span>
          </div>
          <div>
            استان : <span className={classes.boldText}>&nbsp;{props.state}</span>{" "}
            ، شهرستان :{" "}
            <span className={classes.boldText}>&nbsp;{props.city}</span>
          </div>
          <div>
            {" "}
            منطقه:<span className={classes.boldText}>&nbsp;{props.region} </span>
          </div>
          <div>
            تلفن:{" "}
            <span className={classes.boldText}>&nbsp;{props.phoneNumber}</span>
          </div>
          <div>
            فکس : <span className={classes.boldText}>&nbsp;{props.fax}</span>
          </div>
          <div>
            نشانی :{" "}
            <span className={classes.boldText}>&nbsp;{props.address}</span>
          </div>
          <div>
            وبسایت :{" "}
            <span className={classes.boldText}>&nbsp;{props.website}</span>
          </div>
          <div>
            پست الکترونیک :{" "}
            <span className={classes.boldText}>&nbsp;{props.email}</span>
          </div>
        </div>
        {windowWidth > 769 && (
          <div style={{ width: "45%" }}>
            <img className={classes["topBar-image"]} src={props.image} />
          </div>
        )}
      </div>
    );
  }

  // console.log(` windowWidth : ${windowWidth}`);
  // console.log(typeof windowWidth);


};

export default TopPart;
