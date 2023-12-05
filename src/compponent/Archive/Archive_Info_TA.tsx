import { motion } from "framer-motion";
import { useState } from "react";

interface Data {
  Pic: string[];
}

const Archive_Info_TA = ({ Pic }: Data) => {
  const [stateShow0, changeStateShow0] = useState(0);
  const [stateShow1, changeStateShow1] = useState(1);
  const [stateShow2, changeStateShow2] = useState(2);
  const [stateShow3, changeStateShow3] = useState(3);

  const HandleOnClick1 = () => {
    const temp = stateShow0;
    changeStateShow0(stateShow1);
    changeStateShow1(temp);
  };
  const HandleOnClick2 = () => {
    const temp = stateShow0;
    changeStateShow0(stateShow2);
    changeStateShow2(temp);
  };
  const HandleOnClick3 = () => {
    const temp = stateShow0;
    changeStateShow0(stateShow3);
    changeStateShow3(temp);
  };
  return (
    <div>
      <div className=" my-4 h-[70vh]  w-full rounded-xl flex overflow-hidden">
        <div
          className={`h-full w-1/3 rounded-xl bg-cover bg-center bg-[url('${Pic[stateShow0]}')] transitition-all duration-300`}
        ></div>
        <div className="h-full  w-2/3 rounded-xl flex flex-col">
          <div className="w-full h-2/5 flex items-center">
            <div className="h-[90%] w-[96%]  mx-auto">
              <div className=" text-xl font-bold">
                Teacher Assistance for POSN computer camp 1 , 2 and 3
              </div>
              <div className="my-3">2023 - march</div>
              <div className="mb-2">Learned teamwork experience.</div>
              <div className="mb-2">
                As a leader in the camp, I developed strong leadership skills
                and learned effective decision making.
              </div>
            </div>
          </div>
          <div className="bg-[url('/pic/archive/TA/Ta0.jpg')] hidden"></div>
          <div className="bg-[url('/pic/archive/TA/Ta1.jpg')] hidden"></div>
          <div className="bg-[url('/pic/archive/TA/Ta2.jpg')] hidden"></div>
          <div className="bg-[url('/pic/archive/TA/Ta3.jpg')] hidden"></div>
          <div className="  w-full h-3/5 flex">
            <div className="w-2"></div>
            <motion.button
              onClick={HandleOnClick1}
              whileHover={{ scale: 1.05 }}
              className={`h-full w-[30%] bg-cover bg-center bg-[url('${Pic[stateShow1]}')] mx-2 rounded-lg transitition-all duration-300`}
            ></motion.button>
            <motion.button
              onClick={HandleOnClick2}
              whileHover={{ scale: 1.05 }}
              className={`h-full w-[30%] bg-cover bg-center bg-[url('${Pic[stateShow2]}')] mx-2 rounded-lg transitition-all duration-300`}
            ></motion.button>
            <motion.button
              onClick={HandleOnClick3}
              whileHover={{ scale: 1.05 }}
              className={`h-full w-[30%] bg-cover bg-center bg-[url('${Pic[stateShow3]}')] mx-2 rounded-lg transitition-all duration-300`}
            ></motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive_Info_TA;
