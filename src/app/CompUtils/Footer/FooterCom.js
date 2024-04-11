import Image from "next/image";
import React from "react";
import logo from "../../../app/../../public/sbt.png";
import Link from "next/link";
import About from "../About";
import ContactUs from "../Contact";
import Privacy from "../Privacy";
import Refund from "../Refund";
export default function FooterCom() {
  return (
    <>
      <div className="relative mt-16 bg-teal-500 flex justify-center items-center">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-teal-500"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 flex flex-col gap-5 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className=" bg-white  p-3 rounded-lg flex justify-center items-center ">
            <Link
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <Image src={logo} alt="f" width={50} height={0} /> */}
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                <p className="lg:text-2xl text-xs flex lg:flex-row sm:flex-row text-black flex-col font-bold">
                  Sporto
                </p>
              </span>
            </Link>
          </div>

          <div className=" max-w-full flex lg:flex-row flex-col justify-center items-center gap-3">
            <p className="text-gray-100">Sporto</p>
            <p className="text-gray-100">sporto@7792gmail.com</p>
            <p className="text-gray-100">Pune, 411030</p>
            <p className="text-gray-100">Pune, Maharastra,India</p>
          </div>
          <div className="flex flex-row gap-7 justify-center items-center">
            {/* <div className="grid grid-cols-2 gap-3">
              <About />
              <ContactUs />
              <Privacy />
              <Refund />
            </div> */}
          </div>
          <p className="text-center text-white">
            {" "}
            +91-9156047792/+91-7387427755{" "}
          </p>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <div className="flex items-center bg-gray-100 justify-center gap-5 rounded-lg p-3 mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="transition-colors duration-300 text-cyan-500 hover:text-cyan-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/raj_wakarekar"
                className="transition-colors duration-300 text-pink-500 hover:text-red-700"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-blue-500 hover:text-blue-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/watch?v=eQbRWBlAV5I"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FF0000"
                  className="h-5"
                >
                  <path d="M23.6 6.3c-.3-1.1-1-2-2.1-2.3C19.5 3 12 3 12 3S4.5 3 2.5 4c-1.1.3-1.8 1.2-2.1 2.3C0 8.4 0 12 0 12s0 3.6.4 5.7c.3 1.1 1 2 2.1 2.3C4.5 21 12 21 12 21s7.5 0 9.5-1c1.1-.3 1.8-1.2 2.1-2.3.4-2.1.4-5.7.4-5.7s0-3.6-.4-5.7zm-15.6 9.7V7.9l6.2 3.6-6.2 3.5z" />
                </svg>
              </a>
            </div>
            <p className="text-sm p-3 texxt-center text-gray-100">
              © Copyright 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
