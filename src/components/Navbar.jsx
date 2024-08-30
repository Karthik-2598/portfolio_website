import logo from "../assets/karthiklogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Resume = 'https://drive.google.com/file/d/1T98tiHaLSaIEAcot_FYb4D7i396exb-v/view?usp=drive_link';
const CVDownloadLink = '/Sai_Karthik_Karra_Resume.pdf';
const linkedin = 'https://www.linkedin.com/in/karthik-karra/';
const git = 'https://github.com/Karthik-2598'
const Navbar = () => {
  const handleCV=(Resume)=>{
    window.open(Resume, '_blank');
  }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2"src={logo} alt="logo" style={{height:'50px', width:'50px'}}></img>
    </div>
    <div className="m-8 flex items-center justfiy-center gap-4 text-2xl">
      <a href={git} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <button className="bg-blue-400 hover:bg-dark-blue-400 text-white font-bold py-2 px-4 rounded" onClick={()=>{handleCV(Resume)}}>
        View CV
      </button>
      <a href={CVDownloadLink} download="Karra_Sai_karthik_Resume.pdf" className="bg-green-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">Download CV</a>
    </div>
  </nav>
  )
}

export default Navbar
