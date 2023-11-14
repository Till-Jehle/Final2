import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Design" },
  { skill: "Perfektionismus" },
  { skill: "Kreativ" },
  { skill: "Motiviert" },
  { skill: "Tailwind CSS"},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Über Mich
          <hr className="w-6 h-1 mx-auto my-4 bg-green-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top px-6 md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              Hi, mein name ist Till Jehhle und mein Ziel ist Web-developer
              zu werden.
            </p>
            <br />
            <p>
              Ich bin 15 Jahre alt, in der 10. Klasse und mache dieses Jahr meinen Realschulabschluss.
              Meine interesse an Web-Development habe ich letztes Jahr gefunden. Davor habe ich versucht meine ersten Videospiele
              mit der Unreal Engine zu programieren. Angefangen mich mit Programiersprachen und Technik zu befassen
              habe ich im Jahr 2020. 
            </p>
            <br />
            <p>
              Meine Hobbys außer programieren sind teilweise sehr unterschiedlich. Ich zeichne öfters an meinem Grafiktablet,
              fotografiere und filme sehr gerne mit meinem Handy, mache sehr viel sport und Boxe ab und zu. 
            </p>
            <br />
            <p>
             Ich bin motiviert und versuche mich immer wieder mich zu verbessern, meine Stärken in der Schule sind: Mathe, Englisch,
             Physik und Sport.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Programmiersprachen</h1>
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

            <h1 className="text-2xl font-bold mb-6 mt-6">Meine Skills</h1>
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