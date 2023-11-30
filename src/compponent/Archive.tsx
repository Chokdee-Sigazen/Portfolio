import { Carousel } from "flowbite-react";
import Archive_Info from "./Archive_Info";

const Data = [
  {
    Pic: [
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
    ],
    topic: "TOI 17 & 18 Bronze medal (Thailand Olympiad in Informatic)",
    date: "2022 - june",
    info1: "Using C++ for solve problems.",
    info2:
      "Earning a bronze medal in TOI18 is my starting point for learning Computer Programming.",
  },
  {
    Pic: [
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
    ],
    topic: "Teacher Assistance for POSN computer camp 1 , 2 and 3",
    date: "2022 - june",
    info1: "Using C++ for solve problems.",
    info2:
      "Earning a bronze medal in TOI18 is my starting point for learning Computer Programming.",
  },
];

const Archive = () => {
  return (
    <div>
      <div className=" bg-[#1C1C1C] w-full h-full min-h-[100vh] font-inter text-white">
        <div className=" w-[90%] mx-auto flex flex-col">
          <div className=" text-white font-inter font-bold text-3xl  mb-3">
            Archive
          </div>
          <Carousel pauseOnHover>
            {Data.map((tmp) => (
              <Archive_Info
                Pic={tmp.Pic}
                date={tmp.date}
                topic={tmp.topic}
                info1={tmp.info1}
                info2={tmp.info2}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Archive;
