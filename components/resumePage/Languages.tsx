import { FieldValueData } from "../../types"
import { BsCheckLg } from "react-icons/bs"
import LanguageSkeleton from "./LanguageSkeleton"

interface Props {
  languages: FieldValueData[] | undefined
}

export default function Languages({ languages }: Props) {
  return (
    <div className="pt-10">
      {languages ? (
        languages.map((l) => {
          const level = Number(l.value)

          return (
            <div key={l.id} className="mb-6">
              {l.value ? (
                <>
                  <h3 className="capitalize text-2xl text-gray-300 mb-2.5">
                    {l.field}
                  </h3>
                  <div className="level flex justify-between items-center">
                    {new Array(10).fill(0).map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-6 h-6 rounded-full ${
                          idx < level ? "bg-main-orange" : "bg-gray-800"
                        }`}
                      ></span>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-5 text-gray-300 text-2xl">
                  <BsCheckLg className="text-main-orange text-2xl" />
                  <span>{l.field}</span>
                </div>
              )}
            </div>
          )
        })
      ) : (
        <>
          <LanguageSkeleton />
          <LanguageSkeleton />
          <LanguageSkeleton />
          <LanguageSkeleton />
        </>
      )}
    </div>
  )
}
