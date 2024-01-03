import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <>
      <div className="flex bg-blue-900 justify-evenly py-3">
        <div className="flex-col">
          <h1 className="text-2xl text-yellow-300 font-semibold cursor-default">
            INFORMATION
          </h1>
          <div className="text-white">
            <a
              href="https://www.cmrit.ac.in/"
              className="hover:text-blue-300 visited:text-white"
            >
              C2I4 2021
            </a>
            <br />
            <a
              href="https://www.cmrit.ac.in/media-coverage/"
              className="hover:text-blue-300 visited:text-white"
            >
              Media Coverage
            </a>
            <br />
            <a
              href="https://erp.cmrit.ac.in/login.htm"
              className="hover:text-blue-300 visited:text-white">
              Grievance & Complaints
            </a>
            <br />
            <a
              href="https://vtu.ac.in/en/"
              className="hover:text-blue-300 visited:text-white"
            >
              VTU Regulations
            </a>
            <br />
            <a
              href="https://sites.google.com/cmrit.ac.in/cmrit-pbc-cell/activities?authuser=0"
              className=" hover:text-blue-300 visited:text-white"
            >
              Professional Body Activities
            </a>
            <br />
            <a
              href="https://www.cmrit.ac.in/campus/facility-usage-cmrit/"
              className=" hover:text-blue-300 visited:text-white"
            >
              Facility Usage
            </a>
            <br />
            <a
              href="https://sites.google.com/cmrit.ac.in/sttplttp/home"
              className=" hover:text-blue-300 visited:text-white"
            >
              STTP/LTTP
            </a>
            <br />
            <a
              href="https://www.cmrit.ac.in/cet-comedk-codes"
              className=" hover:text-blue-300 visited:text-white"
            >
              CET & COMEDK Codes
            </a>
            <br />
            <a
              href="https://www.cmrit.ac.in/wp-content/uploads/2022/05/Statutory-Notification.pdf"
              className=" hover:text-blue-300 visited:text-white"
            >
              Statutory Notification
            </a>
            <br />
            <a
              href="https://www.cmrit.ac.in/sitemap/"
              className="hover:text-blue-300 visited:text-white"
            >
              Sitemap
            </a>
            <br />
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-yellow-300 font-semibold cursor-default">
            FIND US
          </h1>
          <div className="text-white">
            <p>
              CMR Institute of Technology
              <br />
              132 AECS Layout
              <br />
              ITPL Main Road, Kundalahalli Bangalore 560037, India
            </p>
            <br />
            <p>
              T:{" "}
              <a
                href="tel:+91 80 28524466 / 77"
                className=" hover:text-yellow-300 visited:text-white"
              >
                +91 80 28524466 / 77
              </a>
            </p>
            <p>
              E:{" "}
              <a
                href="mailto: info@cmrit.ac.in"
                className=" hover:text-yellow-300 hover:underline visited:text-white"
              >
                info@cmrit.ac.in
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-yellow-300 font-semibold cursor-default">
            FOLLOW US
          </h2>
          <div className="flex space-x-5 text-3xl mt-2">
            <a
              href="https://www.youtube.com/channel/UCpi96paEf16WS-Xf0_xyL9Q"
              className="text-red-600 bg-white py-1 px-1 border-1 rounded-md"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://twitter.com/CMRIT_Bengaluru"
              className="bg-blue-500 text-white py-1 px-1 border-1 rounded-md"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/school/cmr-institute-of-technology-bengaluru/"
              className="text-white bg-blue-800 py-1 px-1 border-1 rounded-md"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/cmrit.bangalore/"
              className="text-white bg-gradient-to-b from-indigo-600 via-pink-600 to-yellow-500 py-1 px-1 border-1 rounded-md"
            >
              <SlSocialInstagram />
            </a>
            <a
              href="https://www.facebook.com/CMRInstituteOfTechnologyBangalore/"
              className="text-white bg-blue-800 py-1 px-1 border-1 rounded-md"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
