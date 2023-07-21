"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useTheme } from "next-themes"
import "./HeroSection.css"

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineBehance,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const HeroSection = () => {
  // const [currentTheme, setCurrentTheme] = useState('dark');
  // const toggleTheme = () => {
  //   setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  // };

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-8 sm:py-32 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          {/* <Image
            src={currentTheme === 'dark' ? '/AJ.png' : '/jani6.jpg'}
            alt=""
            width={300}
            height={300}
            className="headerimg"
          /> */}

          {currentTheme === "light" ? (
            <button
              onClick={() => setTheme("dark")}
            >
              <Image
                src="/AJ2.png"
                alt=""
                width={300}
                height={300}
                className="headerimg w-200 sm:w-full md:h-auto"
              />
            </button>
          ) : (
            <button
              onClick={() => setTheme("light")}

            >
              <Image
                src="/AJ.png"
                alt=""
                width={300}
                height={300}
                className="headerimg w-200 sm:w-full md:h-auto"
              />
            </button>
          )}
        </div>
        <div className="md:mt-2 md:w-3/5">
          <div className="fontsfamily">

            <h1 className="text-4xl  font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m
              <div className="text-teal-500">Abhishek Jani 
                <div className="waving-hand">&nbsp;
                  <div className="hand">
                    <span role="img" aria-label="Waving Hand" className="hand-emoji"> 
                    <Image src="/icons8-waving-hand-803.png"  alt=""
              width={50}
              height={50}></Image></span>
                  </div>
                </div>

              </div>
            </h1>
            <div className="text-md mt-4 mb-6 md:text-2xl">
              <p className="animated-text-1 ">I&#39;m a{" "}
                <span className="font-medium text-teal-500">
                  Full Stack Developer  {" "}
                </span> & <span className="font-medium text-teal-500">Graphic Designer</span>
              </p>

              <p id="animated-text-2">I am a Final year IT Engineering Student.</p>
              <p id="animated-text-3"> Enhancing my MERN Stack Skills.</p>
            </div>
          </div>

          <div className="flex flex-row space-x-2 mb-1 justify-center md:justify-start">
            <a href="https://github.com/abhishekjani08" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
                size={30}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishekjani08/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
                size={30}
              />
            </a>

            <a
              href="https://flowcv.com/resume/h1nh5esfq4"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLink
                className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
                size={30}
              />
            </a>

            <a
              href="https://www.behance.net/abhishek2003"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineBehance
                className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
                size={30}
              />
            </a>
            <a
              href="https://wa.me/919552874929"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineWhatsApp
                className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
