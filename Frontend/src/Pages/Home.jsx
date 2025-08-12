import React, { useState, useEffect } from "react";
import { FaReact, FaNode, FaLongArrowAltRight } from "react-icons/fa";
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
import { FcAbout } from "react-icons/fc";
import { VscServerProcess } from "react-icons/vsc";
import Travelix from "../assets/Travelix.png";
import Netflix from "../assets/Netflix.png";
import FlexiFly from "../assets/FlexiFly.png";
import ServiceCard from "../Components/ServiceCard";
import ProjectCard from "../Components/ProjectCard";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import { NavLink } from "react-router-dom";
import DownloadResumeButton from "../Components/DownloadResumeButton";
import LottiePlayer from "../Components/LottiePlayer";
import AnimatedPage from "../Components/AnimatedPage";

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "MERN Stack Developer",
    "Software Engineering Student",
    "React.js",
    "Node.js, Express.js",
    "PostgreSQL, MongoDB",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <>
    <AnimatedPage>
      <div className="flex flex-col lg:flex-row m-10  mt-28 lg:m-28">
        <div className="w-full lg:w-1/2">
          <h3 className="text-gray-400 text-2xl font-semibold">Hello, I'm</h3>
          <h1 className="text-4xl mt-2 text-white font-bold">Moeez Iqbal</h1>
          <h1 className="mt-10 text-3xl text-orange-500 font-semibold">
            {texts[textIndex]}
          </h1>
          <h3 className="mt-10 text-gray-400 font-sans mr-2">
            As a MERN Stack Developer, I am committed to delivering high-quality
            web applications that align perfectly with my clients' needs. With
            years of practical experience in web development, I specialize in
            using technologies such as React.js, Node.js, Express.js,
            PostgreSQL, and MongoDB to create scalable and robust web solutions.
            My emphasis on excellence ensures that every project I engage in not
            only meets but surpasses expectations, achieving outstanding results
            and driving success.
          </h3>
          <div className="flex flex-col lg:flex-row mt-10 lg:mt-14">
            <DownloadResumeButton />
            <NavLink to="/about" className="lg:ml-5">
              <button className="border-2 border-orange-500 p-2 w-full lg:w-30 text-white rounded-lg hover:bg-orange-500 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center">
                <span className="mr-2">About</span>
                <FcAbout />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-12 flex justify-center lg:justify-end">
          <LottiePlayer
            src="https://lottie.host/578bb240-7be1-4cd5-b440-2b8e3f8a16d6/x72O81a9lk.json"
            width="500px"
            height="500px"
          />
        </div>
      </div>
      </AnimatedPage>

   <AnimatedPage>
      <div className="flex flex-col items-center m-6 sm:m-12 lg:m-24">
        <h1 className="text-lg text-gray-400 sm:text-xl">What I Provide</h1>
        <div className="flex justify-center gap-2 mt-2 sm:gap-4 sm:mt-4">
          <h1 className="text-2xl text-white font-bold sm:text-3xl">My</h1>
          <h1 className="text-2xl text-orange-500 font-bold sm:text-3xl">
            Services
          </h1>
        </div>

        <div className="flex flex-col items-center mt-8 space-y-8 sm:space-y-0 sm:flex-row sm:justify-between sm:mt-16 sm:items-center sm:space-x-4">
          <ServiceCard
            icon={<FaReact className="text-3xl text-orange-500 sm:text-4xl" />}
            title="Front End Development"
            description="As a front-end developer, I specialize in creating the visual and interactive aspects of web applications using technologies like HTML, CSS, and JavaScript, along with frameworks such as React. My focus is on building responsive Scalable and user-friendly interfaces."
          />
          <ServiceCard
            icon={<FaNode className="text-3xl text-orange-500 sm:text-4xl" />}
            title="Back End Development"
            description="As a back-end developer, I focus on the server-side logic and database management of web applications using Node.js and Express.js. My responsibilities include building APIs, managing database interactions, and ensuring security and performance."
          />
          <ServiceCard
            icon={
              <VscServerProcess className="text-3xl text-orange-500 sm:text-4xl" />
            }
            title="Full Stack Development"
            description="As a full-stack developer, I embrace the challenge of building comprehensive solutions from the ground up. With expertise in both front-end and back-end technologies, I thrive on crafting seamless experiences and elegant interfaces."
          />
        </div>
      </div>
      </AnimatedPage>


      <AnimatedPage>
      <div className="flex flex-col items-center mt-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-12 md:my-24">
        <h1 className="text-lg sm:text-xl text-gray-400">
          Some of my recent Projects
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">
            Featured
          </h1>
          <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold">
            Projects
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 md:mt-16">
        <ProjectCard
          id={1}
          image={FlexiFly}
          alt="FlexiFly Private Booking DashBoard"
          title="FlexiFly Private Plane Booking DashBoard"
          className="lg:col-start-1 lg:col-span-2"
        />
        <ProjectCard
          id={2}
          image={Travelix}
          alt="Travelix Project"
          title="Travel Agency Front End"
        />
        <ProjectCard
          id={3}
          image={Netflix}
          alt="Netflix Project"
          title="Netflix UI Front End"
        />
        </div>
        <NavLink to="/project">
          <button className="text-md flex mx-3 mt-10  items-center text-white bg-orange-500 p-2 rounded-lg font-semibold hover:bg-slate-700 transform transition-transform duration-300 hover:-translate-y-2">
            See All <FaLongArrowAltRight className="ml-2" />
          </button>
        </NavLink>
      </div>
      </AnimatedPage>
     
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

export default Home;
