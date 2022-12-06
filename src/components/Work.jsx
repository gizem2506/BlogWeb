import React from "react";
import SQL from "../assets/sql.png";
import NMAP from "../assets/nmap.png";
import Zafiyet from "../assets/zafiyet.png";

const Work = () => {
  return (
    //İLK DİV
    <div className="bg-[w-full h-screen bg-gradient-to-b from-pink-500 via-purple-400 to-indigo-500 sm:text-center">
      <div class="flex flex-col items-center pt-8">
        <h1 class="text-3xl  text-indigo-600 font-bold  border-b-4  border-white-500">POSTS</h1>
       
      </div>
<div className="flex gap-4 m-10  ">
      {/*Card 1*/}
      <div className="w-full md:w-4/12 shadow-xl p-5 my-3 md:my-10 flex flex-col gap-3 bg-[#fdefef] rounded-3xl">
        <img className="h-20 mx-auto" src={SQL} alt="SQL" />
        <h1 class="text-[#6366f1] font-bold">SQL || VERİTABANI</h1>
        <p class="text-gray-600">
         Bu yazımda SQL kısıtlamalar konusunda bilgilere yer verdim.
        </p>
        <a class="text-[#ec4899] font-bold" href="https://medium.com/@1gizemaltay/sql-constraints-kisitlamalar-ce1953057d1e">
          Read More
        </a>
      </div>

      {/*Card 2*/}
      <div className="w-full md:w-4/12 shadow-xl   p-5 my-3 md:my-10 flex flex-col gap-3  bg-[#fdefef] rounded-3xl ">
        <img className="h-20 mx-auto" src={NMAP} alt="NMAP" />
        <h1 class=" text-[#6366f1] font-bold">
          CYBER SECURİTY || NMAP
        </h1>
        <p class="text-gray-600">
          NMAP ve komutları hakkında bilgilere yer verdim.
        </p>
        <a class="text-[#ec4899] font-bold" href="">
          Read More
        </a>
      </div>

      {/*Card 3*/}
      <div className="w-full md:w-4/12 shadow-xl  p-5 my-3 md:my-10 flex flex-col gap-3 bg-[#fdefef] rounded-3xl">
        <img className="h-20 mx-auto" src={Zafiyet} alt="SQL" />
        <h1 class="text-[#6366f1] font-bold  ">
          ZAFİYET TARAMASI || PORT
        </h1>
        <p class="text-gray-600">
         Belirli bir IP adresine port taramasının nasıl yapılacağını anlattım. Bulunan zafiyetlerin ne anlama geleceğinden bahsettim.
        </p>
        <a class="text-[#ec4899] font-bold" href="">
          Read More
        </a>
      </div>
    </div>
    </div>
  );
};
export default Work;
