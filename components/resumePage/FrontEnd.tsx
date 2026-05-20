import { FieldValueData } from "../../types"
import { BsCheckLg } from "react-icons/bs"
import FrontEndSkeleton from "./FrontEndSkeleton"

interface Props {
  frontend: FieldValueData[] | undefined
}

export default function Development({ frontend }: Props) {
  return (
    <div className="pt-11">
      {frontend ? (
        frontend.map((f) => (
          <div key={f.id} className="mb-7">
            {f.value ? (
              <>
                <h3 className="capitalize text-2xl text-gray-300">
                  {f.field}
                </h3>
                <progress
                  className="progress progress-warning w-full bg-gray-800 mt-2.5"
                  value={f.value}
                  max="100"
                ></progress>
              </>
            ) : (
              <div className="flex items-center gap-5 text-gray-300 text-2xl">
                <BsCheckLg className="text-main-orange text-2xl" />
                <span>{f.field}</span>
              </div>
            )}
          </div>
        ))
      ) : (
        <>
          <FrontEndSkeleton />
          <FrontEndSkeleton />
          <FrontEndSkeleton />
          <FrontEndSkeleton />
        </>
      )}
    </div>
  )
}
