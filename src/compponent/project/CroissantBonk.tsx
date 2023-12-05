type Data = {
  pic: number;
};

const CroissantBonk = ({ pic }: Data) => {
  return (
    <div>
      <div
        className={` absolute transition-all duration-200 ${
          pic === 0 ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        <div className="font-inter font-bold text-xl text-white">
          Project : Croissant Bonk Community
        </div>
        <div className="flex h-8 text-white my-3 ">
          <a
            href="https://github.com/Chokdee-Sigazen/Croissant-Bonk-Community"
            className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 "
          >
            <div className="w-5 h-5  ml-2 mr-1 bg-[url('/pic/github.png')] bg-cover bg-center my-auto rounded-full"></div>
            <div className="font-bold mr-3">code</div>
          </a>
          <a
            href="https://chokdee-sigazen.github.io/Croissant-Bonk-Community/"
            className="w-auto bg-[#5787A2] ml-2 rounded-lg flex items-center hover:bg-[#3c5d70] transition-colors duration-200"
          >
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-[url('/pic/live.png')] bg-cover bg-center rounded-full"></div>
            <div className="font-bold mr-3">live demo</div>
          </a>
        </div>
        <div className=" my-2 font-inter font-normal text-lg w-[70%] text-white">
          Croissant BONK Community is a web application designed exclusively for
          the CEDT community. It provides a platform where members can share
          their ideas anonymously.
        </div>
        <div className=" font-inter font-bold text-xl text-white my-3">
          What I've learned
        </div>
        <div className=" my-2 font-inter font-normal text-lg w-[70%] text-white">
          This is my first Website Project that give me interesting for Web
          development. As first time I’ve ever done Web application I try to
          make both <span className=" font-bold">Frontend</span> and{" "}
          <span className=" font-bold">Backend</span>.
        </div>
        <div className="flex flex-col my-3">
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 rounded-sm bg-center bg-cover bg-[url('/pic/html.png')]"></div>
            <div className="text-white ml-3 font-bold">
              HTML
              <span className=" font-normal mx-2">
                Learn using HTML for structure website
              </span>
            </div>
          </div>
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 bg-center bg-cover bg-[url('/pic/css.png')] rounded-sm"></div>
            <div className="text-white ml-3 font-bold">
              CSS
              <span className=" font-normal mx-2">
                Learn to use CSS for designing website and make website
                flexibility
              </span>
            </div>
          </div>
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 bg-center bg-cover bg-[url('/pic/js.png')] rounded-sm"></div>
            <div className="text-white ml-3 font-bold">
              Java Script
              <span className=" font-normal mx-2">
                Learn basic using of Java Script ( make button for score , chat,
                parallax background)
              </span>
            </div>
          </div>
        </div>
        <div className="text-white font-inter font-normal mb-3">
          And a little bit of Backend Development
        </div>
        <div className="flex flex-col my-3">
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 rounded-sm bg-center bg-cover bg-[url('/pic/mongoDB.png')]"></div>
            <div className="text-white ml-3 font-bold">
              MongoDB
              <span className=" font-normal mx-2">
                Use MongoDB as database for chat and scoreboard
              </span>
            </div>
          </div>
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 bg-center bg-cover bg-[url('/pic/js.png')] rounded-sm"></div>
            <div className="text-white ml-3 font-bold">
              Java Script
              <span className=" font-normal mx-2">
                Fetch and Show data from MongoDB to Frontend
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CroissantBonk;
