import { Link } from "react-router-dom"

const ProjectCard = ({ image, alt, title, id }) => (
  <div className="group relative mx-3 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-2">
    {/* Decorative border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative overflow-hidden rounded-2xl">
      {/* Image container */}
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={alt}
          className="h-64 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        <div className="text-center space-y-4 backdrop-blur-sm bg-slate-900/30 rounded-xl p-6 border border-orange-500/20">
          <h1 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">{title}</h1>

          <Link to={`/project/${id}`}>
            <button className="group/btn relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 active:scale-95">
              <span className="relative z-10">See Details</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Subtle glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-slate-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
  </div>
)

export default ProjectCard
