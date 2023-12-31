import React from "react"
import Image from "next/image"
import { AiOutlineFileJpg, AiOutlineGithub, AiOutlineHtml5 } from "react-icons/ai"

// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "Python" },
//   { skill: "C++" },
//   { skill: "Machine Learning" },
//   { skill: "Data Science" },
//   { skill: "Flutter" },
//   { skill: "GitHub" },
//   { skill: "MongoDB" },
// ]
// const skillsdesign = [
//   { skill: "Adobe Illustrator" },
//   { skill: "Adobe Photoshop" },
//   { skill: "PowerDirector" },
//   { skill: "Canva" },
// ]

// const skillsframes = [
//   { skill: "React" },
//   { skill: "Node" },
//   { skill: "Next.js" },
//   { skill: "Tailwind CSS" },
//   { skill: "BootStrap" },
//   { skill: "OpenCV" },
//   { skill: "MediaPipe " },
// ]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="  ">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is <span className="font-bold text-teal-500">Abhishek Jani </span>and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Full Stack Developer & Graphic Designer.
            </p>
            <br />
            <p>
              😄 I am pursuing Bachelor&#39;s of Engineering in Information Technology.<br></br>
              🚀 Currently, i am in my Final year of Engineering.<br></br>
              🪴 I am learning more about MERN Stack.<br></br>
              🙌 I also work on Freelancing Projects.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.🤩
            </p>
            <br />
            <Image
              src="/Programming-pana.png"
              alt=""
              width={350}
              height={350}
              className="hidden md:block md:relative md:bottom-4 md:left-0 md:z-0"
            />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>

            <h3 className="text-xl font-semibold mb-6">Programming Languages </h3>

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <AiOutlineHtml5
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                  size={30}
                />
                <h3> HTML </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/css-logo.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> CSS </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-javascript-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Javascript </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-c++-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> C++ </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-python-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Python </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-machine-learning-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Machine Learning </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-data-backup-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Data Science </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-flutter-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Flutter </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <AiOutlineGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                  size={30}
                />
                <h3> Github </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/mongologo.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> MongoDB </h3>
              </span>


            </div>


            <h3 className="text-xl font-semibold mb-6 pt-5">Frameworks & Libraries</h3>

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {/* {skillsframes.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white"
                  >
                    {item.skill}
                  </p>
                )
              })} */}

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-react-100.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> React </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-node-js-32.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Node </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/nextjs.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Next.js </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/tailwind css logo.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Tailwind CSS </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-bootstrap-logo-32.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> BootStrap </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-opencv-48.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> OpenCV </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/mediapipe logo.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> MediaPipe </h3>
              </span>


            </div>


            <h3 className="text-xl font-semibold mb-6 pt-5">UI & Design</h3>

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {/* {skillsdesign.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white"
                  >
                    {item.skill}
                  </p>
                )
              })} */}

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-adobe-illustrator-30.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Adobe Illustrator </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-adobe-photoshop-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Adobe Photoshop </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-old-vmware-logo-24.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> PowerDirector </h3>
              </span>

              <span className="flex flex-row bg-gray-200 px-4 py-2 mr-2 mt-2 text-cyan-500 rounded font-bold hover:bg-cyan-500 hover:text-white">
                <Image
                  src="/icons8-canva-50.png"
                  alt=""
                  width={30}
                  height={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-black"
                />
                <h3> Canva </h3>
              </span>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
