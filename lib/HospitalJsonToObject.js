import React from 'react'
import fs from "fs";
import path from "path";

 const HospitalJsonToObject = () => {
    const filePath = path.join(process.cwd(), "\\json\\HospitalsJSON.json");
    // const jsonData = await fsPromises.readFile(filePath);
    const jsonData = fs.readFileSync(filePath);
    const hospitalData = JSON.parse(jsonData);
    const { hospitals } = hospitalData;
    return {
      hospitals,
    };
}

export default HospitalJsonToObject
