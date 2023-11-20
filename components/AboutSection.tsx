import React from "react"
import Image from "next/image"

const languages = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" }
]

const skills = [
  { skill: "Design" },
  { skill: "Perfektionismus" },
  { skill: "Kreativ" },
  { skill: "Motiviert" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-white">
          Über Mich
          <hr className="w-6 h-1 mx-auto my-4 bg-green-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top px-6 text-white md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              Hi, mein name ist Till Jehhle und mein Ziel ist es einen Job in der IT-Branche zu bekommen. 
            </p>
            <br />
            <p>
              Ich bin 15 Jahre alt, in der 10. Klasse und mache dieses Jahr meinen Realschulabschluss.
              Meine interesse an Programmierung habe ich vor einem Jahr entdeckt. Davor habe ich versucht meine ersten Videospiele
              mit der Unreal Engine zu programmieren. Die Interesse im Bereich IT habe ich aber schon seit 3 Jahren.
            </p>
            <br />
            <p>
              Meine Hobbys außer programmieren sind teilweise sehr unterschiedlich. Ich zeichne, höre sehr viele Podcasts und mache sehr viel Sport.
            </p>
            <br />
            <p>
             Ich bin stehts motiviert und versuche mich immer wieder zu verbessern, meine Stärken in der Schule sind: Mathe, Englisch und
             Physik.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Programmiersprachen</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {languages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-neutral-600 px-4 py-2 mr-2 mt-2 rounded font-semibold text-white shadow-6xl shadow-green-400"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

            <h1 className="text-2xl text-white font-bold mb-6 pt-6">Meine Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-neutral-600 px-4 py-2 mr-2 mt-2 rounded font-semibold text-white shadow-6xl shadow-green-400"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
