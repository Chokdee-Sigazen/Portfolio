import { Carousel } from "flowbite-react";
import Archive_Info_TOI from "./Archive/Archive_Info_TOI";
import Archive_Info_TA from "./Archive/Archive_Info_TA";
import Archive_Info_Sympo from "./Archive/Archive_Info_Sympo";
import { motion } from "framer-motion";

const Data = [
  {
    Pic: [
      "/pic/archive/toi/toi0.jpg",
      "/pic/archive/toi/toi1.jpg",
      "/pic/archive/toi/toi2.jpg",
      "/pic/archive/toi/toi3.jpg",
    ],
  },
  {
    Pic: [
      "/pic/archive/TA/Ta0.jpg",
      "/pic/archive/TA/Ta1.jpg",
      "/pic/archive/TA/Ta2.jpg",
      "/pic/archive/TA/Ta3.jpg",
    ],
  },
  {
    Pic: [
      "/pic/archive/Sympo/S0.png",
      "/pic/archive/Sympo/S1.png",
      "/pic/archive/Sympo/S2.png",
      "/pic/archive/Sympo/S3.jpg",
    ],
  },
];

const Archive = () => {
  return (
    <div>
      <div className=" bg-[#1C1C1C] w-full h-full min-h-[100vh] font-inter text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className=" w-[90%] mx-auto flex flex-col"
        >
          <div className=" text-white font-inter font-bold text-3xl  mb-3">
            Archive
          </div>
          <Carousel pauseOnHover>
            <Archive_Info_TOI Pic={Data[0].Pic} />
            <Archive_Info_Sympo Pic={Data[2].Pic} />
            <Archive_Info_TA Pic={Data[1].Pic} />
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Archive;
