import { BsCheckLg } from "react-icons/bs"
import { certificationsData } from "../../data"

export default function Certifications() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 px-12 py-10 gap-x-10 gap-y-6">
      {certificationsData.map((certification) => (
        <li
          key={certification.id}
          className="flex items-start gap-5 text-gray-300"
        >
          <BsCheckLg className="mt-1 text-2xl text-main-orange flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-medium tracking-wide">
              {certification.title}
            </h3>
            <p className="mt-2 text-xl text-gray-500">
              {certification.issuer}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
