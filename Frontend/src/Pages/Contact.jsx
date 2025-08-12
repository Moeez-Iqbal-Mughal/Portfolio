import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

import {
  IoPersonSharp,
  IoCall,
  IoSend,
  IoLocation,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import AnimatedPage from "../Components/AnimatedPage";

function Contact() {
  return (
    <>
    <AnimatedPage>
      <div className="flex flex-col mt-32  items-center m-4 sm:m-6 md:m-12 lg:m-24 mb-16">
        <h1 className="text-lg sm:text-xl text-gray-400">
          Feel Free to Contact Me
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">Get In</h1>
          <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold">
            Touch
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-20 sm:mb-30 md:mb-40 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-4">
          <h1 className="text-2xl sm:text-3xl text-white font-semibold mb-4">
            Contact Me
          </h1>
          <ContactForm />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-4 mt-8 mb-5 lg:ml-56 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl text-white font-semibold mb-4">
            Contact Info
          </h1>
          <div className="flex flex-col mt-4">
            <ContactInfo
              icon={
                <IoPersonSharp className="text-2xl sm:text-3xl text-white hover:text-orange-500" />
              }
              details="Moeez Iqbal"
            />
            <ContactInfo
              icon={
                <IoCall className="text-2xl sm:text-3xl text-white hover:text-orange-500" />
              }
              details="03044096036"
            />
            <ContactInfo
              icon={
                <IoMdMail className="text-2xl sm:text-3xl text-white hover:text-orange-500" />
              }
              details="moeez.iqbal.work@gmail.com"
            />
            <ContactInfo
              icon={
                <IoLocation className="text-2xl sm:text-3xl text-white hover:text-orange-500" />
              }
              details="Lahore, Pakistan"
            />
          </div>
          <div className="mt-8">
            <div className="flex flex-wrap gap-4 items-center">
              <h1 className="text-gray-400 text-xl sm:text-2xl font-semibold">
                Social
              </h1>
              <div className="w-16 h-0.5 bg-gray-400 hidden sm:block"></div>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <a
                  href="https://www.linkedin.com/in/moeez-iqbal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="text-gray-400 text-2xl sm:text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
                </a>
                <a
                  href="https://github.com/Moeez-Iqbal-Mughal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub className="text-gray-400 text-2xl sm:text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
                </a>
                <a
                  href="https://twitter.com/MoeezIqbal16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="text-gray-400 text-2xl sm:text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
                </a>
                <a
                  href="https://www.facebook.com/moeez.iqbal.50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="text-gray-400 text-2xl sm:text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
                </a>
                <a
                  href="https://wa.me/+923044096036"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp className="text-gray-400 text-2xl sm:text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        </AnimatedPage>
    </>
  );
}

export default Contact;
