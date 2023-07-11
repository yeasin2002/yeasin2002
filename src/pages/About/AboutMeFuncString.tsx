const AboutString = `
  import { aboutType } from "./about.d";

  const AboutMe = (): aboutType => {
     return {
       name: "Md Kawsar Islam Yeasin",
       role: ${(<div className="text-red-700">Front End Web Developer</div>)} ,
       age: 20,
       gender: "male",
       address: "Dhaka, Cantonment,Dhaka-1206",
       phone: "01632227965",
       mail: "mdkawsarislam@gmail.com",
     };
   }; 
   `;

export default AboutString;
