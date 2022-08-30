import HOSPITALS from "./HOSPITALS";
import fs from "fs";
import path from "path";

export function getStaticData() {
  const filePath = path.join(process.cwd(), "\\lib\\HospitalsJSON.json");
  // const jsonData = await fsPromises.readFile(filePath);
  const jsonData = fs.readFileSync(filePath);
  const hospitalData = JSON.parse(jsonData);
  const { hospitals } = hospitalData;
  return {
    hospitals,
  };
}

export function getAllHospitalIds() {
  // const { HospitalsData } = HOSPITALS;
  const HospitalsObject = getStaticData();
  const HospitalsData = HospitalsObject.hospitals;
  return HospitalsData.map((hospitalData) => {
    return {
      params: {
        id: hospitalData.id,
      },
    };
  });
}

export function getHospitalData(id) {
  // const { HospitalsData } = HOSPITALS;
  const HospitalsObject = getStaticData();
  const HospitalsData = HospitalsObject.hospitals;
  const choosedHospitalArray = HospitalsData.filter(
    (hospital) => hospital.id === id
  );
  const [choosedHospital] = choosedHospitalArray;
  // console.log(choosedHospital);
  return choosedHospital;
}
