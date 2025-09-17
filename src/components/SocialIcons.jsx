import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export const SocialIcons = () => (
  <div className="flex space-x-4 mt-5">
    <a href="https://instagram.com/dino.dinac/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="w-6 h-6 text-white" />
    </a>
    <a href="https://linkedin.com/in/dinogavrovski" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="w-6 h-6 text-white" />
    </a>
    <a href="https://github.com/dinogavrovski/" target="_blank" rel="noopener noreferrer">
      <FaGithub className="w-6 h-6 text-white" />
    </a>
  </div>
);
