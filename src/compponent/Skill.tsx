import { useState } from "react";
import { motion } from "framer-motion";
import Info_Skill_webApp from "./Info_Skill_webApp";
import Info_Skill_UIUX from "./Info_Skill_UIUX";

const Skill = () => {
  const [StateWeb, changeStateWeb] = useState(0);
  const [stateUI, changeStateUI] = useState(0);
  return (
    <div className=" bg-[#1C1C1C] min-h-[100vh] h-auto w-full flex">
      <div className="mx-auto w-[90%] flex font-inter text-whit flex-col">
        <div className=" ml-10 text-[27px] font-bold text-white">My skills</div>
        <div className="h-[65vh] my-10 flex">
          <motion.button
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
          </motion.button>

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
          <Info_Skill_UIUX Show={stateUI}></Info_Skill_UIUX>
          <Info_Skill_webApp Show={StateWeb}></Info_Skill_webApp>
        </div>
      </div>
    </div>
  );
};

export default Skill;
