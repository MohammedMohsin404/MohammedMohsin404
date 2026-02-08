import { useQuery } from "@apollo/client"
import { FaReact } from "react-icons/fa"
import { SkillData } from "../../types"
import BackEnd from "./BackEnd"
import FrontEnd from "./FrontEnd"
import IconTitle from "./IconTitle"
import Knowledge from "./Knowledge"
import Languages from "./Languages"
import resumeOperations from "../../graphqlOperations/resume"
import { skillsData } from "../../data"

interface SkillQuery {
  skills: SkillData[]
}

export default function Skills() {
  const { data, error } = useQuery<SkillQuery>(
    resumeOperations.Queries.getSkills
  )

  if (error) console.log(error)

  const skills = data?.skills?.[0] ?? skillsData[0]

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 py-6">
          <IconTitle title="back-end" Icon={FaReact} />
          <BackEnd backend={skills?.backEnd} />
        </li>
        <li className="relative px-12 py-6 vCustomLine sm:before:block before:hidden before:left-0">
          <IconTitle title="knowledge" Icon={FaReact} />
          <Knowledge knowledge={skills?.knowledge} />
        </li>
      </ul>

      <ul className="grid grid-cols-1 sm:grid-cols-2">
        <li className="px-12 pt-6">
          <IconTitle title="front-end" Icon={FaReact} />
          <FrontEnd frontend={skills?.frontEnd} />
        </li>
        <li className="relative px-12 pt-6 vCustomLine before:left-0 sm:before:block before:hidden">
          <IconTitle title="languages" Icon={FaReact} />
          <Languages languages={skills?.languages} />
        </li>
      </ul>
    </>
  )
}
