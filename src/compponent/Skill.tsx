import { motion } from "framer-motion";
import Info_Skill_webApp from "./Info_Skill_webApp";
import Info_Skill_UIUX from "./Info_Skill_UIUX";

type Data = {
  stateWeb: any;
  stateUI: any;
  statePic: any;
  changeStateWeb: any;
  changeStateUI: any;
  changeStatepic: any;
};

const Skill = ({
  stateWeb,
  stateUI,
  changeStateWeb,
  changeStateUI,
  statePic,
  changeStatepic,
}: Data) => {
  return (
    <>
      <div id="skill" className="bg-[#1C1C1C] h-8"></div>
      <div className=" bg-[#1C1C1C] min-h-[90vh] h-auto w-full flex overflow-hidden">
        <motion.div
          className="mx-auto w-[90%] flex font-inter text-whit flex-col"
          initial={{ x: 75 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="  text-[27px] font-bold text-white">My skills</div>
          <div className="h-[65vh] my-10 flex">
            <motion.button
              onClick={() => {
                if (stateWeb) {
                  changeStateWeb(0);
                  return;
                }
                changeStateWeb(1);
                changeStateUI(0);
              }}
              className={`h-full bg-gradient-to-b from-black to-cyan-300 via-teal-800 bg-size-200  w-80 rounded-2xl bg-pos-0  transition-all duration-500 ${
                stateWeb ? "bg-pos-100" : "bg-pos-0"
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
                UX/UI Design
              </div>
            </button>
            <Info_Skill_UIUX Show={stateUI}></Info_Skill_UIUX>
            <Info_Skill_webApp
              Show={stateWeb}
              statePic={statePic}
              changeStatepic={changeStatepic}
            ></Info_Skill_webApp>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skill;
