"use client"

import { Suspense, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FaLink } from "react-icons/fa6"
import LoadingSpinner from "./LoadSpinner"
import LazyLoad from "react-lazyload"
import AnimatedPage from "./AnimatedPage"

const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`https://portfolio-tonv.onrender.com/projects/${id}`);
        // const response = await axios.get(`http://localhost:3000/projects/${id}`)
        setProject(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjectDetails()
  }, [id])

  if (loading) return <LoadingSpinner />
  if (error) return <p className="text-center text-red-500">Error loading project details: {error.message}</p>

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }

  const getFullImageUrl = (relativePath) => {
    return `https://portfolio-tonv.onrender.com${relativePath.replace('../../', '/')}`;
    // return `http://localhost:3000${relativePath.replace("../../", "/")}`
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AnimatedPage>
        <div className="min-h-screen text-white p-6 max-w-7xl mx-auto">
        <div className="bg-[#292524]  rounded-lg py-6 px-2 mt-20 border-l-4 border-orange-500">
                <h1 className="text-5xl text-center font-semibold mb-4 mt">{project.name}</h1>
                <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
              </div>

          {/* Carousel */}
          <div className="relative mb-12 mt-8 w-full max-w-6xl mx-auto">
  {project.images.length > 0 && (
    <LazyLoad height={400} offset={100}>
      <img
        src={getFullImageUrl(project.images[currentImageIndex]) || "/placeholder.svg"}
        alt={`${project.name} screenshot ${currentImageIndex + 1}`}
        className="w-full h-[500px] object-fit rounded-lg"
      />
    </LazyLoad>
  )}
  {project.images.length > 1 && (
    <>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>
    </>
  )}
</div>


          {/* Modern Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Description */}
            <div className="bg-[#292524] rounded-lg p-6 border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-3"></span>
                Description
              </h2>
              <p className="text-gray-300 text-lg">{project.description}</p>
            </div>

            {/* Features */}
            <div className="bg-[#292524] rounded-lg p-6 border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-3"></span>
                Features
              </h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-lg">
                    <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-[#292524] rounded-lg p-6 border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-3"></span>
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-orange-500 text-gray-300 rounded-md text-sm font-medium border border-slate-600 hover:border-orange-500 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href={project.visitcode}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 flex justify-center items-center hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Visit Site
              <FaLink className="ml-2 text-white text-2xl" />
            </a>
          </div>
        </div>
      </AnimatedPage>
    </Suspense>
  )
}

export default ProjectDetail
