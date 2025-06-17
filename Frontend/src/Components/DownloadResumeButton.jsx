import { FaDownload } from "react-icons/fa";
import Resume from '../assets/Resumee.pdf'

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.setAttribute("download", "Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadResumeButton = () => (
  <button
    className="bg-orange-500 p-2 w-full lg:w-32 text-white rounded-lg hover:bg-gray-700 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center mb-4 lg:mb-0"
    onClick={handleDownload}
  >
    <span className="mr-2">Resume</span>
    <FaDownload />
  </button>
);

export default DownloadResumeButton;
