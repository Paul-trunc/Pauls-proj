import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a 
      href="https://www.linkedin.com/in/christian-paul-montebon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="hover:text-blue-600"
      >
        <FaLinkedin />
        </a>
        <a
         href="https://github.com/Paul-trunc/Pauls-proj"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="GitHub"
         className="hover:text-gray-800"
        >
        <FaGithub /> 
        </a>
        
        <a
          href="https://www.instagram.com/mysterypauuul/profilecard/?igsh=M2ZubnE1dDYyMDMw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500"
        >
        <FaInstagram />
        </a>
    </div>
  </nav>
}
//

export default Navbar