import React, { useState, useEffect } from "react";
import Moeez from "../assets/Moeez.jpg";
import { FaDownload } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { RiBootstrapFill, RiTailwindCssFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import LottiePlayer from "../Components/LottiePlayer";
import DownloadResumeButton from "../Components/DownloadResumeButton";
import AnimatedPage from "../Components/AnimatedPage";

function About() {
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
  }, [textIndex, texts.length]);

  return (

    <>

    <AnimatedPage>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mt-24">
        <h1 className="text-lg sm:text-xl text-gray-400">Something about myself</h1>
        <div className="flex justify-center gap-2 mt-2">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">About</h1>
          <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold">Me</h1>
        </div>
      </div>
      </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col mx-2 lg:flex-row mt-10 lg:mt-10">
        <div className="w-full lg:w-1/2   mt-14 lg:px-5">
        
          <h3 className="text-gray-400 text-4xl sm:text-2xl   font-semibold">
            Hello, I'm
          </h3>
          <h1 className="text-3xl sm:text-4xl mt-2 text-white font-bold">
            Moeez Iqbal
          </h1>
          <h1 className="mt-5 sm:mt-10 text-3xl sm:text-3xl text-orange-500 font-semibold">
            {texts[textIndex]}
          </h1>
          <h3 className="mt-5 sm:mt-10 text-gray-400 font-sans">
            As a MERN Stack Developer, I am committed to delivering high-quality
            web applications that align perfectly with my clients' needs. With
            years of practical experience in web development, I specialize in
            using technologies such as React.js, Node.js, Express.js,
            PostgreSQL, and MongoDB to create scalable and robust web solutions.
            My emphasis on excellence ensures that every project I engage in not
            only meets but surpasses expectations, achieving outstanding results
            and driving success.
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-40 mt-5">
            <div>
              <h1 className="text-orange-500 text-xl sm:text-lg font-semibold">
                Name:
              </h1>
              <p className="text-white text-xl sm:text-lg font-semibold">
                Moeez Iqbal
              </p>
            </div>
            <div>
              <h1 className="text-orange-500 text-xl sm:text-lg font-semibold">
                Email:
              </h1>
              <p className="text-white text-xl sm:text-lg font-semibold">
                moeeziqbalmughal@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3  lg:gap-40 mt-5">
            <div>
              <h1 className="text-orange-500 text-base sm:text-lg font-semibold">
                Phone:
              </h1>
              <p className="text-white text-base sm:text-lg font-semibold">
                03044096036
              </p>
            </div>
            <div>
              <h1 className="text-orange-500 text-base sm:text-lg font-semibold">
                Address:
              </h1>
              <p className="text-white text-base sm:text-lg font-semibold">
                Lahore, Pakistan
              </p>
            </div>
          </div>
          <div className="flex  mt-10">
            <DownloadResumeButton />
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-10 p-4 lg:p-10 flex justify-center lg:justify-start">
          <img
            src={Moeez}
            alt="Moeez Iqbal"
            className="rounded-2xl lg:ml-32 w-64 sm:w-80 lg:w-5/6 hover:transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 sm:mt-24">
        <div className="flex justify-center gap-2">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">My</h1>
          <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold">
            Skills
          </h1>
        </div>
      </div>
      </div>
      </AnimatedPage>


      <AnimatedPage>
      <div className="flex flex-col lg:gap-10 lg:-ml-24 lg:flex-row mt-10">
        <div className="w-full lg:w-1/2 p-4 lg:p-2">
          <h1 className="flex text-emerald-300 justify-center items-center text-xl sm:text-2xl font-semibold">
            Languages:
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-5 gap-3">
            <IoLogoHtml5 className="text-orange-600 bg-custom-4 bg-opacity-5 p-1 rounded-md text-4xl sm:text-5xl transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoCss3 className="text-blue-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoJavascript className="text-yellow-400 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
          <h1 className="text-emerald-300 flex justify-center items-center text-xl sm:text-2xl font-semibold mt-5">
            Libraries and Frameworks:
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-5  gap-3">
            <IoLogoReact className="text-blue-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoNodejs className="text-green-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <SiExpress className="text-gray-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <RiTailwindCssFill className="text-emerald-400 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <RiBootstrapFill className="text-purple-600 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
          <h1 className="text-emerald-300 flex justify-center items-center text-xl sm:text-2xl font-semibold mt-5">
            Tools and Technologies:
          </h1>
          <div className="flex flex-wrap mt-5 justify-center items-center gap-3">
            <SiVisualstudiocode className="text-blue-400 bg-custom-4 bg-opacity-5 p-1 rounded-md text-4xl sm:text-5xl transform transition-transform duration-300 hover:-translate-y-2" />
            <SiGit className="text-gray-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoGithub className="text-black-400 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <SiPostman className="text-orange-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
          <h1 className="text-emerald-300 flex justify-center items-center text-xl sm:text-2xl font-semibold mt-5">
            Databases:
          </h1>
          <div className="flex flex-wrap mt-5 justify-center items-center gap-3">
            <SiMongodb className="text-green-500 bg-custom-4 bg-opacity-5 p-1 rounded-md text-4xl sm:text-5xl transform transition-transform duration-300 hover:-translate-y-2" />
            <SiPostgresql className="text-blue-500 text-4xl sm:text-5xl bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:ml-32 items-center mt-5 lg:mt-0">
          <LottiePlayer
            src="https://lottie.host/6acb3d7f-047e-45a8-a621-7bc491c8688a/Odm0Zqw3tz.json"
            width="500px"
            height="500px"
          />
        </div>
      </div>
      </AnimatedPage>

      <AnimatedPage>
      <div className="flex flex-col items-center mt-16 sm:mt-20">
        <div className="flex justify-center gap-2">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">My</h1>
          <h1 className="text-2xl sm:text-3xl text-orange-500 font-bold">
            Qualifications
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 mb-16">
        <div className="w-full lg:w-1/2 lg:-ml-5 flex justify-center items-center">
          <LottiePlayer
            src="https://lottie.host/4fcec937-9651-4aee-9837-285ed03071bd/QuZehPzqVq.json"
            width="500px"
            height="500px"
          />
        </div>

        <div className="w-full lg:w-1/2 mt-2 lg:ml-20 lg:mt-8">
          <div className="bg-custom-4 bg-opacity-5 w-full lg:w-3/4 rounded-md p-4 mb-4 shadow-md hover:shadow-orange-600 hover:transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-orange-500 text-xl sm:text-2xl">
              Software Engineering Student
            </h1>
            <p className="text-white mt-2">
              As a diligent software engineering student, I'm honing my skills
              in various technologies, including the MERN stack. With a passion
              for learning and a drive for excellence, I'm committed to becoming
              a proficient developer capable of delivering innovative solutions
              and contributing to the field of software engineering.
            </p>
          </div>
          <div className="bg-custom-4 bg-opacity-5 w-full lg:w-3/4 rounded-md p-4 lg:ml-auto shadow-md hover:shadow-orange-600 hover:transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-orange-500 text-xl sm:text-2xl">
              MERN Stack Developer
            </h1>
            <p className="text-white mt-2">
              I'm a seasoned MERN stack developer specializing in React.js,
              Node.js, Express.js, MongoDB and PostgreSQL. With a focus on
              creating scalable and robust web solutions, I leverage my
              expertise to deliver high-quality applications that meet clients'
              needs and surpass expectations.
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
    </>
  );
}

export default About;
