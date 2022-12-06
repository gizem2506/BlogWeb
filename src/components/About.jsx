import React from "react";
import Image from "../assets/Gizem1.png";
const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-indigo-600 flex items-center bg-gradient-to-b from-pink-500 via-purple-400 to-indigo-500">
      <div className="flex flex-col sm:grid sm:grid-cols-2">
        <div className="mx-auto">
          <img className=" h-[500px] w-[500px] rounded. rounded-full  " src={Image} alt="" />
        </div>
        <div className='flex flex-col my-auto mr-20  '>
        <p className="text-4xl font-bold inline border-b-4 border-white-500 mb-5 ">
              About
            </p>
                 <p className="text-[#ffffff] font-bold">
          Hi. I'm Gizem, nice to meet you. Please take a look around.</p>
          <p className="text-[#ffffff] font-bold">
            I am a management information systems student at Bartın University.
            I am also doing a Computer Programming double major. I continue my
            career as a mobile and front-end developer. Additionally I am
            interested in Cyber Security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

