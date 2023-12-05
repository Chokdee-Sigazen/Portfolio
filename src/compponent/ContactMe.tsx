import { motion } from "framer-motion";
import { Label, TextInput } from "flowbite-react";

const ContactMe = () => {
  return (
    <div id="ContactMe">
      <div className=" overflow-hidden bg-[#1C1C1C] w-full h-full min-h-[80vh] font-inter text-white">
        <motion.div
          initial={{ x: 75 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" w-[95%] ml-auto flex flex-col"
        >
          <div className=" text-white font-inter font-bold text-3xl  mb-3">
            Contact me
          </div>
          <div className="flex w-full mx-auto">
            <div className="w-1/2 min-h-[50vh] ">
              <div className="flex items-center">
                <div className="my-4 min-h-[50vh]  w-full ">
                  <div className="w-2/3 my-1">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="name1"
                        value="Name"
                        className="text-white"
                      />
                    </div>
                    <TextInput id="name1" type="text" required shadow />
                  </div>
                  <div className="w-2/3 my-1">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="email1"
                        value="Email"
                        className="text-white"
                      />
                    </div>
                    <TextInput
                      id="email1"
                      type="Email"
                      placeholder="example@gmail.com"
                      required
                      shadow
                    />
                  </div>
                  <div className="w-2/3 my-1">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="message1"
                        value="Message"
                        className="text-white"
                      />
                    </div>
                    <TextInput id="message1" type="text" required shadow />
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className=" h-10 w-32 rounded-lg font-bold my-6 bg-gradient-to-b from-[#01373A] via-[#006D74] to-[#17b5c1] bg-size-200 transition-all duration-500 hover:bg-pos-100"
                  >
                    Submit
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="w-1/2 min-h-[50vh] ">
              <div className="w-full h-full bg-[#006D74] rounded-l-3xl flex items-center">
                <div className="w-full ml-7 h-[90%] font-bold font-inter text-md text-white">
                  <div className="flex my-4">
                    <div className="h-8 w-8 bg-[url('/pic/gmail.png')] bg-cover bg-center rounded-md"></div>
                    <div className="mx-3">prushyapong50@gmail.com</div>
                  </div>
                  <div className="flex my-4">
                    <div className="h-8 w-8 bg-[url('/pic/tel.png')] bg-cover bg-center rounded-md"></div>
                    <div className="mx-3">098-848-1994</div>
                  </div>
                  <div className="flex my-4">
                    <div className="h-8 w-8 bg-[url('/pic/facebook.png')] bg-cover bg-center rounded-md"></div>
                    <div className="mx-3">ปรัชญาพงษ์ มโนศิลปกร</div>
                  </div>
                  <div className="flex my-4">
                    <div className="h-8 w-8 bg-[url('/pic/line.png')] bg-cover bg-center rounded-md"></div>
                    <div className="mx-3">chokdee50</div>
                  </div>
                  <div className="flex mt-4 mb-7">
                    <div className="h-8 w-8 bg-[url('/pic/github2.png')] bg-cover bg-center rounded-md"></div>
                    <div className="mx-3">Chokdee-Sigazen</div>
                  </div>
                  <div className=" text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#B4A1FF] to-[#4FF2DF] ">
                    I’d love to hear from you
                  </div>
                  <div className=" text-lg my-2 font-normal">
                    Contact to me. And I will get back to you as soon as
                    possible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
