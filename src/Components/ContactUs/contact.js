import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="h-screen flex justify-center p-3">
      <div className="w-full max-w-[1240px] py-20 p-3">
        <h1 className="text-center mb-10">
          Contact <span>Me</span>
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-cover grid grid-cols-3 md:grid-cols-1 social gap-2">
            <div className="p-5 mb-3 bg-transparent flex flex-col justify-center items-center">
              <IoMdMail color="#b05fab" size={30} />
            </div>
            <div className="p-5 mb-3 bg-transparent flex flex-col justify-center items-center">
              <FaLinkedin color="#b05fab" size={30} />
            </div>
            <div className="p-5 mb-3 bg-transparent flex flex-col justify-center items-center">
              <FaWhatsappSquare color="#b05fab" size={30} />
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                required
                className="p-4 outline-none bg-transparent text-white flex-grow"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="p-4 outline-none bg-transparent text-white flex-grow"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              className="p-4 outline-none bg-transparent w-full"
            />
            <textarea
              rows={5}
              cols={30}
              required
              className="w-full outline-none bg-transparent p-4 text-white"
              placeholder="Message"
            />
            <button
              className="bg-[#B05FAB] p-4 outline-none text-white cursor-pointer"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
