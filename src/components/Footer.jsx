import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaXTwitter /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-12 text-white border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-10">
        
        {/* 1. Project Identity */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold tracking-wide text-gray-100">CLICK</h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            A digital reflection on the moments we spend clicking.  
            Every click leaves a trace.
          </p>
        </div>

        {/* 2. Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-500 transition-all duration-300 hover:text-white hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* 3. Legal / Info */}
        <div className="text-center md:text-right">
          <a
            href="#about"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <span className="mx-3 text-gray-600">•</span>
          <a
            href="#terms"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            Terms
          </a>
        </div>
      </div>

      {/* 4. Bottom line */}
      <div className="mt-10 text-center text-xs text-gray-600">
        © 2025 CLICK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;