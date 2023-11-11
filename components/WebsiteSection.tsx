import React from "react"
import Image from "next/image"
import React from "react"



const WebsiteSection = () => {
  return (
    <div className="my-24 flex flex-col text-center items-center justify-center md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-4/5 shadow-6xl shadow-green-400">
            <image
            src="/headshot.png"
            width={1440}
            height={1920}
            className="justify-end"
            />

        </div>
    </div>
  )
}

export default WebsiteSection