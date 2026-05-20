import Typewriter from "typewriter-effect"
import { personalInfo } from "../data"

export default function Typing() {
  return (
    <div className="text-center h-8">
      <Typewriter
        onInit={(typewriter) => {
          personalInfo.roles.forEach((role) => {
            typewriter
              .typeString(
                `<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">${role}</span>`
              )
              .pauseFor(2500)
              .deleteAll()
          })

          typewriter.start()
        }}
        options={{
          autoStart: false,
          loop: true,
          cursor: "",
          delay: 17,
        }}
      />
    </div>
  )
}
