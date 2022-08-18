import SingleHospital from "../../components/Hospitals/SingleHospital/SingleHospital";
import { getAllHospitalIds, getHospitalData } from "../../lib/DataManager";

export async function getStaticPaths() {
  const paths = getAllHospitalIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const hospitalData = await getHospitalData(params.id);
  return {
    props: {
      hospitalData,
    },
  };
}

const Hospital = ({ hospitalData }) => {
  return (
    <>
      <SingleHospital hospital={hospitalData} />
    </>
  );
};

export default Hospital;
