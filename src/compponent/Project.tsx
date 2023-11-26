import CroissantBonk from "./project/CroissantBonk";
import Algorithm from "./project/Algorithm";
import Bg_Croissant from "./bg_project/Bg_Croissant";
import Bg_Algorithm from "./bg_project/Bg_Algorithm";

type Data = {
  statePic: any;
  changeStatepic: any;
};

const Project = ({ statePic, changeStatepic }: Data) => {
  const HandleOnclickRight = () => {
    if (statePic == 0) return changeStatepic(1);
    return changeStatepic(statePic - 1);
  };
  const HandleOnclickLeft = () => {
    return changeStatepic((statePic + 1) % 2);
  };

  return (
    <div>
      <div id="project" className="bg-[#1C1C1C] h-14"></div>
      <div className=" bg-[#1C1C1C] min-h-[150vh] h-auto w-full flex">
        <div className=" w-[90%] mx-auto flex flex-col">
          <div className=" text-white font-inter font-bold text-3xl ml-10 mb-3">
            Project
          </div>
          <div className=" w-full h-[70vh]  items-center rounded-2xl my-5 opacity-90 hover:opacity-100 relative transition-opacity duration-150 overflow-hidden">
            <Bg_Croissant pic={statePic} />
            <Bg_Algorithm pic={statePic} />
            <div className=" flex justify-between w-full h-full">
              <button
                onClick={HandleOnclickLeft}
                className="h-full w-15 bg-zinc-950 opacity-30  white hover:opacity-40 transition-opacity duration-200"
              >
                <div className="h-10 w-10 bg-[url('/pic/arrow-left.png')] bg-cover bg-center mx-auto"></div>
                ㅤㅤㅤㅤㅤㅤㅤㅤㅤ
              </button>
              <button
                onClick={HandleOnclickRight}
                className="h-full w-15 self-end bg-zinc-950 origin-right opacity-30 hover:opacity-40 transition-opacity duration-200"
              >
                <div className="h-10 w-10 bg-[url('/pic/arrow-right.png')] bg-cover bg-center mx-auto"></div>
                ㅤㅤㅤㅤㅤㅤㅤㅤㅤ
              </button>
            </div>
          </div>
          <CroissantBonk pic={statePic} />
          <Algorithm pic={statePic} />
        </div>
      </div>
    </div>
  );
};

export default Project;
