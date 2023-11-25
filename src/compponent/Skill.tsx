import { useState } from "react";

import { motion } from "framer-motion";

const Skill = () => {
  const [StateWeb, changeStateWeb] = useState(0);
  const [stateUI, changeStateUI] = useState(0);
  return (
    <div className=" bg-[#1C1C1C] h-[100vh] w-full flex">
      <div className="mx-auto w-[90%] flex font-inter text-whit flex-col">
        <div className=" ml-10 text-[27px] font-bold text-white">My skills</div>
        <div className="h-[65vh] my-10 flex items-center">
          <button
            onClick={() => {
              if (StateWeb) {
                changeStateWeb(0);
                return;
              }
              changeStateWeb(1);
              changeStateUI(0);
            }}
            className={`h-full bg-gradient-to-b from-black to-cyan-300 via-teal-800 bg-size-200  w-80 rounded-2xl mx-4 bg-pos-0  transition-all duration-500 ${
              StateWeb ? "bg-pos-100" : "bg-pos-0"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-full h-full bg-[url('/pic/Web.png')] bg-cover bg-center"
            ></motion.div>
            <div className="text-white my-3 text-center font-inter text-xl font-bold">
              Web app Development
            </div>
          </button>

          <button
            onClick={() => {
              if (stateUI) {
                changeStateUI(0);
                return;
              }
              changeStateWeb(0);
              changeStateUI(1);
            }}
            className={`h-full bg-gradient-to-b from-black to-cyan-300 via-teal-800 bg-size-200  w-80 rounded-2xl mx-4 bg-pos-0  transition-all duration-500 ${
              stateUI ? "bg-pos-100" : "bg-pos-0"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-full h-full bg-[url('/pic/UIUX.png')] bg-cover bg-center"
            ></motion.div>
            <div className="text-white my-3 text-center font-inter text-xl font-bold">
              UI/UX Design
            </div>
          </button>
          <div className="  h-[90%] font-inter max-w-xl mx-4  text-white flex-col">
            <div className="font-bold text-3xl">Web app Development</div>
            <div className=" font-normal my-2">
              Project : Croissant Bonk Community
            </div>
            <div className="flex h-8 ">
              <button className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 ">
                <div className="w-5 h-5 my-1 ml-2 mr-1 bg-white rounded-full"></div>
                <div className="font-bold mr-3">code</div>
              </button>
              <button className="w-auto bg-[#5787A2] ml-2 rounded-lg flex items-center hover:bg-[#3c5d70] transition-colors duration-200">
                <div className="w-5 h-5 my-1 ml-2 mr-1 bg-white rounded-full"></div>
                <div className="font-bold mr-3">live demo</div>
              </button>
            </div>
            <div className="my-3 flex  h-auto flex-col">
              <div className="flex items-center ">
                <div className="w-6 h-6 my-1 ml-2 mr-1 bg-[#52C0E4] rounded-sm"></div>
                <div className=" font-inter mx-1"> HTML</div>
              </div>
              <div className="flex items-center ">
                <div className="w-6 h-6 my-1 ml-2 mr-1 bg-[#E4526C] rounded-sm"></div>
                <div className=" font-inter mx-1"> CSS</div>
              </div>
              <div className="flex items-center ">
                <div className="w-6 h-6 my-1 ml-2 mr-1 bg-[#E4CD52] rounded-sm"></div>
                <div className=" font-inter mx-1"> Java Script</div>
              </div>
            </div>
            <div className=" text-lg font-inter">
              Croissant BONK Community is a web application designed exclusively
              for the CEDT community. It provides a platform where members can
              share their ideas anonymously.
            </div>
            <div className="h-10 flex my-2">
              <button className="w-auto h-full bg-[#4c628f] rounded-sm flex items-center mr-2 hover:bg-[#313F5B] duration-150">
                <div className=" mx-3 font-inter font-bold">readmore</div>
              </button>
              <button className="w-auto h-full bg-[#427679] rounded-sm flex items-center mr-2 hover:bg-[#31595B] duration-150">
                <div className=" mx-3 font-inter font-bold">next →</div>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skill;
