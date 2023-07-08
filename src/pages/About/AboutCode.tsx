import React from "react";

type Props = {};

const AboutCode = (props: Props) => {
  return (
    <div className=" border-sup overflow-x-hidden border">
      <pre>
        {`
  import { aboutType } from "./about.d";

  const AboutMe = (): aboutType => {
       return {
         name: "Md Kawsar Islam Yeasin",
         role: "front end developer",
         age: 20,
         gender: "male",
         address: "Dhaka, Cantonment ",
         phone: "01632227965",
         mail: "mdkawsarislam@gmail.com",
       };
  }; 
     `}
      </pre>
    </div>
  );
};
export default AboutCode;
