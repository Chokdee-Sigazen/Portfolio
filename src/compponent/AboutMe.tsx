import { motion } from "framer-motion";
import Tab_Profile from "./Tabs_Profile";

type Data = {
  stateWeb: any;
  stateUI: any;
  changeStateWeb: any;
  changeStateUI: any;
};

const AboutMe = ({
  stateWeb,
  stateUI,
  changeStateWeb,
  changeStateUI,
}: Data) => {
  return (
    <div className=" bg-[#1C1C1C] h-[100vh] w-full flex">
      <motion.div className="mx-auto w-[90%] h-[80vh] mt-14 flex">
        <div className="h-full w-1/4  flex">
          <motion.div className="bg-cover bg-center h-[90%] w-[90%] my-auto mx-auto bg-[url('/pic/bg_me.png')] rounded-2xl"></motion.div>
        </div>
        <motion.div className="h-full w-3/4  flex">
          <div className="h-[90%] w-[95%]  mx-auto my-auto flex text-white font-inter flex-col">
            <div className=" font-bold text-[27px]  ">About me</div>
            <div className=" font-bold text-[54px] text-[#a1ecff] hover:text-[#b5f0ff] transition-colors">
              Prushyapong
            </div>
            <div className=" font-bold text-[54px] text-[#9ad5ff] hover:text-[#b9e2ff] transition-colors">
              Manosilapakorn
            </div>
            <div className=" font-normal text-[17px]">
              This is my website. I'm just normal chill guys that have fun when
              I have learn something new. I'm interested in Frontend
              Development, Backend Development and UI/UX designer. I still
              learning new things everyday and I hope to learn new things with
              you :)
            </div>
            <Tab_Profile
              stateWeb={stateWeb}
              stateUI={stateUI}
              changeStateWeb={changeStateWeb}
              changeStateUI={changeStateUI}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
