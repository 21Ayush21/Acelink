import React from "react";
import image from "../assets/Acelinklogo.png";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 bg-footer-linear-gradient gap-y-12 gap-x-8 p-16 md:grid-cols-4 xl:grid-cols-4 font-inter">
      <div className="col-span-full xl:col-span-1 md:col-span-1 ">
        <img src={image} alt="company_logo" className="xl:h-[170px]" />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h3 className="font-bold text-2xl text-center sm:text-start">
          Follow Us
        </h3>
        <div>
          <div className="flex flex-col opacity-60 hover:opacity-100 items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <a href="#" className="ml-2 text-center">
              Twitter
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col opacity-60 hover:opacity-100 items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <a href="#" className=" ml-2">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col opacity-60 hover:opacity-100 items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <a href="#" className=" ml-2">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-white">
        <h3 className="font-bold text-2xl text-center sm:text-start">
          Privacy Policy
        </h3>
        <div>
          <div className="flex flex-col opacity-60 hover:opacity-100 items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-file-text"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <a href="#" className="ml-2 text-center">
              Terms of service{" "}
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center opacity-60 hover:opacity-100 sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-file-text"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <a href="#" className="ml-2 text-center">
              Policy
            </a>
          </div>
        </div>
        <div>
          <a href="#" className="opacity-60 hover:opacity-100"></a>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-white cursor-pointer ">
        <h3 className="font-bold text-2xl text-center sm:text-start">
          Contact Us
        </h3>
        <div>
          <div className="flex flex-col opacity-60 hover:opacity-100 items-center sm:flex-row">
            <a href="#" className=" md:text-lg ml-2 sm:text break-all">
              Email - tristanhancock@acelink.in
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col opacity-60 hover:opacity-100 items-center sm:flex-row">
            <a href="#" className=" text-lg ml-2 sm:text-center md:text-start">
              Phone - 9819861904
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
