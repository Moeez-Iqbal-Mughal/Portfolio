import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Travelix from "../assets/Travelix.png";
import Netflix from "../assets/Netflix.png";
import EstateExplorer from "../assets/Estate Explorers.png";
import FlexiFly from "../assets/FlexiFly.png";
import Apollo from "../assets/AP1.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";

function Project() {
  return (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 md:mt-16">
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
        <ProjectCard
          id={4}
          image={EstateExplorer}
          alt="Estate Explorer Project"
          title="Real Estate Full Stack"
        />
        <ProjectCard
          id={5}
          image={Apollo}
          alt="Apollo Frontend"
          title="Email Marketing Dashboard Design"
          className="lg:col-start-1 lg:col-span-2"
        />
      </div>
    </div>
    </AnimatedPage>
  );
}

export default Project;
