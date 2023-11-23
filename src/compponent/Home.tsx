const Home = () => {
  return (
    <>
      <div className="bg-cover bg-fixed bg-center bg-[url('/pic/Home-bg2.gif')] bg-blue-900 w-full h-[100vh] flex">
        <div className=" my-auto ">
          <span className=" ml-10 font-inter text-3xl text-[#4FF2DF]">
            Welcome to my
          </span>
          <div className="ml-10 mt-3 font-inter text-5xl font-bold text-[#52C0E4]">
            Website Portfolio
          </div>
          <div className="ml-10 h-12 w-36 bg-[#7B6ABF] mt-7 rounded-xl flex flex-row transition-colors hover:bg-[#9a85ee]">
            <div className="h-[50%] w-[20%] bg-white my-auto ml-4"></div>
            <div className="my-auto font-inter font-bold text-white ml-3 text-xl">
              github
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#1C1C1C] min-h-[100vh] w-full flex \\">
        <div className="mx-auto w-[90%] h-[80vh] mt-14 flex">
          <div className="h-full w-1/4  flex">
            <div className="bg-cover bg-center h-[90%] w-[90%] my-auto mx-auto bg-[url('/pic/me.png')] rounded-2xl"></div>
          </div>
          <div className="h-full w-3/4  flex">
            <div className="h-[90%] w-[95%]  mx-auto my-auto flex text-white font-inter flex-col">
              <div className=" font-bold text-[27px]  ">About me</div>
              <div className=" font-bold text-[54px] text-[#a1ecff] hover:text-[#b5f0ff] transition-colors">
                Prushyapong
              </div>
              <div className=" font-bold text-[54px] text-[#9ad5ff] hover:text-[#b9e2ff] transition-colors">
                Manosilapakorn
              </div>
              <div className=" font-normal text-[17px]">
                This is my website. I'm just normal chill guys that have fun
                when I have learn something new. I'm interested in Frontend
                Development, Backend Development and UI/UX designer. I still
                learning new things everyday and I hope to learn new things with
                you :)
              </div>
              <div className="flex mt-3">
                <div className=" text-[20px] font-bold underline"> Skils</div>
                <div className="w-4"></div>
                <div className=" text-[20px]  font-bold hover:underline">
                  Education
                </div>
              </div>
              <div className="h-3"></div>
              <div className=" text-[#4FF2DF]">UI/UX</div>
              <div className="text-[18px] mb-2">
                Designing Web/App interfaces
              </div>
              <div className=" text-[#4FF2DF]">Web Development</div>
              <div className="text-[18px] mb-2">Web app Development</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
