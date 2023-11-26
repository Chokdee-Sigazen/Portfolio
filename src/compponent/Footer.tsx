const Footer = () => {
  return (
    <div>
      <div
        className=" h-[40vh]  w-full bg-[url('/pic/bg_footer.png')] "
        id="contact"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#1C1C1C] to-transparent flex justify-between items-center">
          <div className=" mx-14 text-white font-inter font-bold text-3xl">
            Contact me
          </div>
          <div className="mx-10  w-auto h-auto flex flex-col text-white font-inter items-end   font-normal text-lg">
            <div className="flex my-3 ">
              <div className="mx-4">prushyapong50@gmail.com</div>
              <div className="h-6 w-6 bg-[url('/pic/gmail.png')] bg-cover bg-center"></div>
            </div>
            <div className="flex my-3 ">
              <div className="mx-4">098-848-1994</div>
              <div className="h-6 w-6 bg-[url('/pic/tel.png')] bg-cover bg-center"></div>
            </div>
            <div className="flex my-3 ">
              <div className="mx-4"> ปรัชญาพงษ์ มโนศิลปกร</div>
              <div className="h-6 w-6 bg-[url('/pic/facebook.png')] bg-cover bg-center"></div>
            </div>
            <div className="flex my-3 ">
              <div className="mx-4">chokdee50</div>
              <div className="h-6 w-6 bg-[url('/pic/line.png')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
