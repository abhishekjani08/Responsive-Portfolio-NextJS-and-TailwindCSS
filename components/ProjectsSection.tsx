import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Yoga Posture Detection and Correction System",
    description:
      "It is a Machine Learning based project which detects the correct posture for the user and shows the accuracy in Real-Time.",
    image: "/proj1.png",
    github: "https://github.com/abhishekjani08/Yoga-Posture-Detection-using-Mediapipe",
    link: "https://github.com/abhishekjani08/Yoga-Posture-Detection-using-Mediapipe",
  },
  {
    name: "Sign Language Recognition System",
    description: "This project identifies the American sign language as well as the gestures associated with it. It facilitates communication for Deaf and Mute persons. For the majority of the alphabets, we produced our own dataset and trained them to generate a haar cascade file",
    image: "/proj2.png",
    github: "https://github.com/abhishekjani08/Sign-language-Recognition-System",
    link: "https://www.linkedin.com/posts/abhishekjani08_miniproject-project-teamwork-activity-6939890954661154816-j9CH?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Productivity WebApp",
    description:
      "A productivity app is a software application designed to help individuals or teams manage their tasks and optimize their productivity. It provides a centralized platform where users can organize, prioritize, and track their work, ultimately enabling them to accomplish more in less time.",
    image: "/proj3.png",
    github: "https://github.com/abhishekjani08/Productivity-App/tree/main/mini_project_main",
    link: "https://github.com/abhishekjani08/Productivity-App/tree/main/mini_project_main",
  },
  {
    name: "Car Rental WebApp using MERN stack",
    description:
      "This is a Full Stack (MERN) car rental Application with admin panel & ant design for styling components and to book cars with the cars availability. It is developed using React for Front End , Redux-Thunk for Asynchronous operations, Node JS for Runtime environment , Express JS for Backend Routing and Mongo DB for Database.",
    image: "/proj4.png",
    github: "https://github.com/abhishekjani08/CarDekho_RentCars_MERN",
    link: "https://www.linkedin.com/posts/abhishekjani08_project-softwaredevelopment-mern-activity-7034234653586694144-_aaT?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Candy Crush Clone in Flutter",
    description:
      "The Candy Crush Flutter project was an exciting part of my Mobile App Development Lab in Flutter. While the application is already functional, there are still many things that I plan to update and improve upon.",
    image: "/proj5.png",
    github: "https://github.com/abhishekjani08/Candy-crush-Flutter",
    link: "https://www.linkedin.com/posts/abhishekjani08_android-flutter-androiddev-activity-7067101062389710848-_u9Y?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "REMOTE CONTROLLED GRASS CUTTING ROBOT",
    description:
      "This robot can be operated using android phone. This system can be created with minimum cost as compared to other existing systems. This is rugged, durable and maintenance free.",
    image: "/proj6.png",
    github: "https://github.com/abhishekjani08/REMOTE-CONTROLLED-GRASS-CUTTING-ROBOT",
    link: "https://drive.google.com/file/d/1WCCiDeKETXXuUdmuvV3SDNr5pm5zsWE6/view",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-l leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
