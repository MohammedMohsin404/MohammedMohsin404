import Title from "../Title"
import Certifications from "./Certifications"
import MyResume from "./MyResume"
import Skills from "./Skills"

export default function Resume() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

      <Title name="skills" />
      <Skills />

      <Title name="certifications & courses" />
      <Certifications />
    </section>
  )
}
