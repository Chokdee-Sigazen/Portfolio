import { Carousel } from "flowbite-react";
import Archive_Info from "./Archive_Info";

const Data = [
  {
    pic: [
      "/pic/archive/toi/toi1.jpg",
      "/pic/archive/toi/toi2.jpg",
      "/pic/archive/toi/toi3.jpg",
      "/pic/archive/toi/toi4.jpg",
    ],
    topic: "TOI 17 & 18 Bronze medal (Thailand Olympiad in Informatic)",
    date: "2022 - june",
    info1: "Using C++ for solve problems.",
    info2:
      "Earning a bronze medal in TOI18 is my starting point for learning Computer Programming.",
  },
  {
    pic: [
      "/pic/archive/TA/Ta0.jpg",
      "/pic/archive/TA/Ta1.jpg",
      "/pic/archive/TA/Ta2.jpg",
      "/pic/archive/TA/Ta3.jpg",
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
                pic={tmp.pic}
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
