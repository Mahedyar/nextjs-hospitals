import Head from "next/head";
import Hospitals from "../components/Hospitals/Hospitals";
import Navigation from "../components/Navigation/Navigation";
import HospitalJsonToObject from "../lib/HospitalJsonToObject";
import HOSPITALS from "../lib/HOSPITALS";
// import { getStaticData } from "../lib/DataManager";

export async function getStaticProps() {
  const hospitalsData = HospitalJsonToObject();
  return {
    props: {
      hospitalsData,
    },
  };
}


export default function Home({hospitalsData}) {

  return (
    <>
      <Head>
        <title>سایت جامع بیمارستان های تهران</title>
      </Head>
      <header>
        <Navigation />
      </header>
      <Hospitals hospitalsData={hospitalsData.hospitals}  />
    </>
  );
}


// //useSWR allows the use of SWR inside function components
// import useSWR from 'swr';

// //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Index() {
//   //Set up SWR to run the fetcher function when calling "/api/staticdata"
//   //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
//   const { data, error } = useSWR('/api/staticdata', fetcher);

//   //Handle the error state
//   if (error) return <div>Failed to load</div>;
//   //Handle the loading state
//   if (!data) return <div>Loading...</div>;
//   //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
//   return (
//     <div>
//       <h1>My Framework from file</h1>
//       <ul>
//         <li>Name: {data.record.name}</li>
//         <li>Language: {data.record.language}</li>
//       </ul>
//     </div>
//   );
// }








// export default function Home({ hospitalsData }) {
  
//   return (
//     <div style={{ padding: 30 }}>
//       <Head>
//         <title>KindaCode.com</title>
//       </Head>
//       <div>
//         {hospitalsData.hospitals.map((hospital) => (
//           <div
//             key={hospital.id}
//             style={{ padding: 20, borderBottom: "1px solid #ccc" }}
//           >
//             <h2>{hospital.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
