import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white max-w-[1600px] lg:px-[120px] lg:pt-[120px] sm:p-10 px-4 py-8 mx-auto">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-[120px]">
          {/* Logo & Social */}
          <div className="space-y-4 sm:space-y-7">
            <h2 className="font-bold text-black text-[20px] sm:text-[32px]">
              Business Logo
            </h2>
            <div className="flex items-center gap-4 text-xl text-black">
              <FaFacebook className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>

          {/* Services & Useful Links */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
            <div className="w-[168px] lg:w-auto">
              <h3 className="font-semibold mb-4 lg:mb-6 text-[14px] whitespace-nowrap">
                Our Services
              </h3>
              <ul className="space-y-4 text-[14px] text-[#2A2F32] whitespace-nowrap">
                <li>Plumbing</li>
                <li>Drainage</li>
                <li>Bathrooms</li>
                <li>Commercial</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 lg:mb-6 text-[14px] whitespace-nowrap">
                Useful Links
              </h3>
              <ul className="columns-2 [column-gap:0px] space-y-4 text-[14px] text-[#2A2F32] whitespace-nowrap">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Updates</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Rates</a>
                </li>
                <li>
                  <a href="#">Customer Services</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-[14px] font-semibold mb-4 lg:mb-6">
              Contact Info
            </h2>
            <div className="space-y-4 sm:space-y-5 text-[#2A2F32]">
              <p className="flex items-center gap-3">
                <CiLocationOn className="text-xl" />
                <span className="font-semibold text-[14px]">
                  1 Sail Street, London, SE11 6NQ
                </span>
              </p>
              <p className="flex items-center gap-3">
                <MdOutlineEmail className="text-xl" />
                <span className="font-semibold text-[14px]">
                  enquiries@PlumbingPros.com
                </span>
              </p>
              <p className="flex items-center gap-3">
                <LuPhoneCall className="text-xl" />
                <span className="font-semibold text-[14px]">020 4527 6474</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 sm:pt-10 lg:pt-[80px] lg:pb-[60px] flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-4 text-[#2A2F32] opacity-50 text-[10px] sm:text-[14px]">
        <p>&copy; Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
};

export default Footer;
