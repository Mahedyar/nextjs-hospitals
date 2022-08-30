import SingleHospital from "../../components/Hospitals/SingleHospital/SingleHospital";
import { getAllHospitalIds, getHospitalData } from "../../lib/DataManager";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = getAllHospitalIds();
  console.log(paths);
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
  // console.log(hospitalData);
  if (typeof window !== "undefined") {
    return (
      <>
      <Head>
        <title>بیمارستان {hospitalData.name}</title>
      </Head>
        <SingleHospital hospital={hospitalData} />
      </>
    );
  }
};

export default Hospital;
