"use client";

import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import { mainLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-gray-900 mt-10">
      <div className="main-container">
        <div className="py-5 mb-5 border-b border-gray-300 border-opacity-20 flex justify-between items-center max-md:flex-col max-md:gap-8">
          <div className="flex flex-1 gap-1 items-center text-xl font-medium text-white">
            <h1>Techloom Solutions</h1>
         
          </div>

          <ul className="flex items-center justify-center gap-16 flex-1 text-white max-md:flex-col max-md:gap-5">
            {mainLinks.map((link, index) => (
              <Link key={index} href={link.route}>
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>

          <div className="flex gap-5 text-white flex-1 justify-end text-2xl">
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareSnapchat />
          </div>
        </div>

        <div className="w-full text-center text-sm text-white flex flex-col gap-5 md:flex-row justify-center items-center">
          <span>All Rights Reserved techloomsolutions.tech</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
