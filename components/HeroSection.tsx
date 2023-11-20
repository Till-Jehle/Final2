"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-24 flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-4/5 shadow-6xl shadow-green-400">
          <Image
            src="/headshot.png"
            alt=""
            width={1440}
            height={1920}
            className="justify-end"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 text-white md:text-6xl">Hi ich bin Till,</h1>
          <p className="text-lg text-white mt-4 mb-6 md:text-2xl">
            mein Ziel ist es {" "}
            <span className="font-semibold text-green-400">
              Fachinformatiker{" "}
            </span>
            zu werden und meine coding Skills auszubauen.
          </p>
          <Link
            to="projects"
            className="text-white font-semibold px-6 py-3 bg-neutral-600 rounded brightness-90 transition duration-500 shadow-md shadow-green-400"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projekte
          </Link>
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
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
