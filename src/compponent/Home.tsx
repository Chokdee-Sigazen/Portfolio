import { motion, useScroll } from "framer-motion";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <motion.div id="page">
      <div className="bg-cover bg-fixed bg-center bg-[url('/pic/Home-bg2.gif')] bg-blue-900 w-full h-[100vh] flex overflow-hidden">
        <NavBar />
        <motion.div
          className=" my-auto "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <span className=" ml-10 font-inter text-3xl text-[#4FF2DF]">
            Website Portfolio
          </span>

          <div className="ml-10 mt-3 w-[full] font-inter text-4xl font-bold text-[#52C0E4]">
            "Do you believe in Power of Learning?"
          </div>

          <a
            className="ml-10 h-12 w-36 bg-[#7B6ABF] mt-7 rounded-xl flex flex-row transition-colors hover:bg-[#9a85ee] "
            href="https://github.com/Chokdee-Sigazen"
          >
            <div className="h-7 w-7 bg-[url('/pic/github.png')] bg-cover bg-center my-auto ml-4"></div>
            <div className="my-auto font-inter font-bold text-white ml-3 text-xl">
              github
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
