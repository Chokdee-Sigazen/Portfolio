import { Carousel } from "flowbite-react";
import Archive_Info_TOI from "./Archive/Archive_Info_TOI";

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
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
      "/pic/archive/toi/toi1.png",
    ],
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
            <Archive_Info_TOI Pic={Data[0].Pic} />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Archive;
