import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Unreal Engine",
    description:
      "In Unreal Engine entdeckte ich meine Leidenschaft für programmierung und IT. Ich erstellte meine ersten simplen Spiele und designte Landschaften und Szenen mithilfe von Fotorealistischen Assets. Bild: www.unrealengine.com/en-US",
    image: "/UE.webp",
    link: "/yoyo.tsx",
  },
  {
    name: "Websites",
    description:
      "Dies ist meine erste mit NextJs und TailwindCss gemachte Webseite. Davor nutzte ich für drei Webseiten Wordpress und für eine Html und Css.",
    image: "/Web.png",
    link: "https://katorfamilyphotos.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="p-8">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projekte
        <hr className="w-6 h-1 mx-auto my-4 bg-green-400 border-0 rounded"></hr>
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
                        className="rounded-xl shadow-xl pt-8 hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <p className="">Weiteres</p>
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