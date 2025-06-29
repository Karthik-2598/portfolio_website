import logo from "../assets/karthiklogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Resume = 'https://drive.google.com/file/d/1nQQyIsU4EKamcxP84qFBcrvE8l9msqTx/view?usp=drive_link';
const CVDownloadLink = './Karra_Sai_Karthik_SDE_1.pdf';
const linkedin = 'https://www.linkedin.com/in/karthik-karra/';
const git = 'https://github.com/Karthik-2598';

const Navbar = () => {
  const handleCV = (Resume) => {
    window.open(Resume, '_blank');
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 shadow-md">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 transition-transform duration-500 hover:scale-110"
          src={logo}
          alt="logo"
          style={{ height: '50px', width: '50px' }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 transition-transform duration-500 hover:scale-125 hover:text-purple-600"
        >
          <FaGithub />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 transition-transform duration-500 hover:scale-125 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-500 hover:scale-110"
          onClick={() => {
            handleCV(Resume);
          }}
        >
          View CV
        </button>
        <a
          href={CVDownloadLink}
          download="Karra_Sai_Karthik_SDE_1.pdf"
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-500 hover:scale-110"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;