import classes from "../../../../styles/TopPar.module.css";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Link } from "../../../../lib/Link";
// import Image from "next/image";

const TopPart = (props) => {
  // const website = props.website;
  // console.log(website);
  const windowWidth = useWindowSize();
  return (
    <div
      className={classes["topBar-container"]}
      style={{ display: `${windowWidth < 769 ? "block" : "flex"}` }}
    >
      {windowWidth < 769 && (
        <div>
          <img  className={classes["topBar-image"]} src={props.image} />
          {/* <Image  className={classes["topBar-image"]} src={props.image} width={500} height={500}/> */}
        </div>
      )}
      <div
        className={classes["topBar-listItems"]}
        style={{
          width: `${windowWidth < 769 ? "100%" : "45%"}`,
          fontSize: `${windowWidth > 426 ? "" : "0.7rem"}`,
        }}
      >
        <div>
          نوع تخصص :{" "}
          <span className={classes.boldText}>&nbsp;{props.proficiency}</span>
        </div>

        <div>
          سازمان متبوع :{" "}
          <span className={classes.boldText}>&nbsp;{props.institude}</span>
        </div>

        <div>
          {" "}
          منطقه (تهران):
          <span className={classes.boldText}>&nbsp;{props.region} </span>
        </div>
        <div>
          تلفن:{" "}
          <span className={classes.boldText}>&nbsp;{props.phoneNumber}</span>
        </div>
        {props.fax.length > 0 && (
          <div>
            فکس : <span className={classes.boldText}>&nbsp;{props.fax}</span>
          </div>
        )}
        <div>
          نشانی :{" "}
          <span className={classes.boldText}>&nbsp;{props.address}</span>
        </div>
        {props.website.length > 0 && (
          <div>
            وبسایت :{" "}
            <Link href={props.website}>
              <a className={classes.boldText}>&nbsp;{props.website}</a>
            </Link>
          </div>
        )}
        {props.email.length > 0 && (
          <div>
            پست الکترونیک :{" "}
            <a className={classes.boldText}>&nbsp;{props.email}</a>
          </div>
        )}
      </div>
      {windowWidth > 769 && (
        <div style={{ width: "45%" }}>
          <img className={classes["topBar-image"]} src={props.image} />
          {/* <Image  className={classes["topBar-image"]} src={props.image} width={500} height={500}/> */}
        </div>
      )}
    </div>
  );

  // console.log(` windowWidth : ${windowWidth}`);
  // console.log(typeof windowWidth);
};

export default TopPart;
