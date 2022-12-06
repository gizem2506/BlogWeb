import React from "react";


import { HiOutlineDocumentDownload } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-500 ">
      {/*Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ffffff]">
          Gizem Altay
        </h1>

        <h2 className="text-4xl sm:text-4xl font-bold  text-[#ffffff]">
          Management Information Systems Specialist 
        </h2>
        
        <div>
          <button className="text-[#0e0e0e] border-2 px-6 py-2 my-2 flex items-center hover:bg-purple-400	hover:border -bg-orange-100	">
            {" "}
            Download CV
            <span className="hover:rotate-90 duration-300">
              <HiOutlineDocumentDownload className="ml-2" />
            </span>
          </button>
          
           
              
      
        </div>
      </div>
    </div>
  );
};
export default Home;
