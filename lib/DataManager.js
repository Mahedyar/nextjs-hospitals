import HospitalJsonToObject from "./HospitalJsonToObject";

const HospitalsObject = HospitalJsonToObject();
const HospitalsData = HospitalsObject.hospitals;

export function getAllHospitalIds() {
  return HospitalsData.map((hospitalData) => {
    return {
      params: {
        id: hospitalData.id,
      },
    };
  });
}

export function getHospitalData(id) {
  const choosedHospitalArray = HospitalsData.filter(
    (hospital) => hospital.id === id
  );
  const [choosedHospital] = choosedHospitalArray;
  return choosedHospital;
}
