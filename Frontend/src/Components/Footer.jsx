import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

function Footer() {
  return (
    <div className="flex flex-col items-center bg-stone-800 py-10 m-2 mt-10 rounded-lg z-50 shadow-lg">
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex gap-4">
          <a
            href="https://twitter.com/MoeezIqbal16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter className="text-blue-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
          </a>
          <a
            href="https://github.com/Moeez-Iqbal-Mughal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="text-black text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/moeez-iqbal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="text-blue-600 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
          </a>
          <a
            href="https://wa.me/+923044096036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="text-green-600 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-4">
          <a
            href="https://www.upwork.com/freelancers/~017d32611130515f6a?viewMode=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-green-500 text-2xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2">
              UpWork
            </h1>
          </a>
          <a
            href="https://www.fiverr.com/moeez7860?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-gray-400 text-2xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2">
              Fiverr
            </h1>
          </a>
        </div>
        <hr className="w-11/12 border-t border-gray-500 mt-4" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <p className="text-white">© Copyright All Rights Reserved</p>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">Developed by</p>
            <p className="text-orange-500">Moeez Iqbal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
