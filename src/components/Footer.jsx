import React from "react";
import image from "../assets/Acelinklogo.png";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 bg-footer-linear-gradient gap-y-12 gap-x-8 p-16 md:grid-cols-4 xl:grid-cols-4 font-inter">
      <div className="col-span-full xl:col-span-1 md:col-span-1 ">
        <img src={image} alt="company_logo" className="xl:h-[170px]" />
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h3 className="font-bold text-2xl text-center sm:text-start">Follow Us</h3>
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
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <a href="#" className=" ml-2">
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-white">
        <h3 className="font-bold text-2xl text-center sm:text-start">Privacy Policy</h3>
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
        <h3 className="font-bold text-2xl text-center sm:text-start">Contact Us</h3>
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
              class="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a href="#" className=" text-lg ml-2">
              Email
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
              class="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="#" className=" text-lg ml-2">
              Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
