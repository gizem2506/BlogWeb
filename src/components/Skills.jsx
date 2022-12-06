import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/Javascript.png";
import SQL from "../assets/sql.png";
import ReactImg from "../assets/React.png";
import Delphi from "../assets/delphi.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-gradient-to-b from-indigo-500 via-purple-400 to-pink-500  text-indigo-600">
      {/*container*/}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-white-500">
            Skills{" "}
          </p>
       
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#6366f1] hover:scale-110 duration-1000">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-[#ffffff] font-bold">HTML</p>
          </div>

         <div className="shadow-md shadow-[#6366f1] hover:scale-110 duration-1000">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4 text-[#ffffff] font-bold">CSS</p>
          </div>
          <div className="shadow-md shadow-[#6366f1] hover:scale-110 duration-1000">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-4 text-[#ffffff] font-bold">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#6366f1] hover:scale-110 duration-1000">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4 text-[#ffffff] font-bold">React || React Native</p>
          </div>

          <div className="shadow-md shadow-[#6366f1] hover:scale-110 duration-1000">
            <img className="w-20 mx-auto" src={Delphi} alt="Firebase icon" />
            <p className="my-4 text-[#ffffff] font-bold">Delphi</p>
          </div>

          <div className="shadow-md shadow-[#6366f1] hover:scale-110 duration-1000">
            <img className="w-20 mx-auto" src={SQL} alt="SQL icon" />
            <p className="my-4 text-[#ffffff] font-bold">SQL || MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
