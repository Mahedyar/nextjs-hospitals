import classes from "../../../../styles/TopPar.module.css";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Link } from "../../../../lib/Link";

const TopPart = (props) => {
  const windowWidth = useWindowSize();
  return (
    <div
      className={classes["topBar-container"]}
      style={{ display: `${windowWidth < 769 ? "block" : "flex"}` }}
    >
      {windowWidth < 769 && (
        <div>
          <img alt={props.name} className={classes["topBar-image"]} src={props.image} />
        </div>
      )}
      <div
        className={classes["topBar-listItems"]}
        style={{
          width: `${windowWidth < 769 ? "100%" : "45%"}`,
          fontSize: `${windowWidth > 426 ? "" : "0.7rem"}`,
        }}
      >
        {props.proficiency.length > 0 && (
          <div>
            نوع تخصص :{" "}
            <span className={classes.boldText}>&nbsp;{props.proficiency}</span>
          </div>
        )}

        {props.institude.length > 0 && (
          <div>
            سازمان متبوع :{" "}
            <span className={classes.boldText}>&nbsp;{props.institude}</span>
          </div>
        )}

        {props.region.toString().length > 0 && (
          <div>
            {" "}
            منطقه (تهران):
            <span className={classes.boldText}>&nbsp;{props.region} </span>
          </div>
        )}

        {props.phoneNumber.toString().length > 0 && (
          <div>
            تلفن:{" "}
            <span className={classes.boldText}>&nbsp;{props.phoneNumber}</span>
          </div>
        )}

        {props.fax.toString().length > 0 && (
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
          <img alt={props.name} className={classes["topBar-image"]} src={props.image} />
        </div>
      )}
    </div>
  );
};

export default TopPart;
