import Head from "next/head";
import Hospitals from "../components/Hospitals/Hospitals";
import Navigation from "../components/Navigation/Navigation";
import HospitalJsonToObject from "../lib/HospitalJsonToObject";

export async function getStaticProps() {
  const hospitalsData = HospitalJsonToObject();
  return {
    props: {
      hospitalsData,
    },
  };
}

export default function Home({ hospitalsData }) {
  return (
    <>
      <Head>
        <title>سایت جامع بیمارستان های تهران</title>
      </Head>
      <header>
        <Navigation />
      </header>
      <Hospitals hospitalsData={hospitalsData.hospitals} />
    </>
  );
}
