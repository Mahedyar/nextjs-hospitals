import Head from "next/head";
import Hospitals from "../components/Hospitals/Hospitals";
import Navigation from "../components/Navigation/Navigation";
import HOSPITALS from "../lib/HOSPITALS";
// import fsPromises from "fs/promises"
// import fs from "fs";
// import path from "path";
// import { getStaticData } from "../lib/DataManager";

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(),'\\lib\\HospitalsJSON.json')
//   const jsonData = await fsPromises.readFile(filePath)
//   const hospitals = JSON.parse(jsonData)
//   // console.log(hospitals)
//   return {
//     props:hospitals
//   }
// }
// export async function getStaticProps() {
//   const hospitalsData = getStaticData();
//   return {
//     props: {
//       hospitalsData,
//     },
//   };
// }

// export  function getStaticData() {
//   const filePath = path.join(process.cwd(), "\\lib\\HospitalsJSON.json");
//   // const jsonData = await fsPromises.readFile(filePath);
//   const jsonData = fs.readdirSync(filePath)
//   const objectData = JSON.parse(jsonData);
//   // console.log(objectData)
//   return {
//     props: objectData,
//   };
// }
import { getStaticData } from "../lib/DataManager";

export async function getStaticProps() {
  const hospitalsData = getStaticData();
  return {
    props: {
      hospitalsData,
    },
  };
}

export default function Home({hospitalsData}) {
//  const test =  getStaticData()
//  console.log(test);
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
