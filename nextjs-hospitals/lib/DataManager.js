import HOSPITALS from "../HOSPITALS";

export function getAllHospitalIds() {
  const { HospitalsData } = HOSPITALS;
  return HospitalsData.map((hospitalData) => {
    return {
      params: {
        id: hospitalData.id,
      },
    };
  });
}

export function getHospitalData(id) {
  const { HospitalsData } = HOSPITALS;
  const choosedHospital = HospitalsData.filter(
    (hospital) => hospital.id === id
  );
  return choosedHospital;
}
