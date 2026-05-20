import { useQuery } from "@apollo/client"
import MyInfo from "../MyInfo"
import profileOperations from "../../graphqlOperations/profile"
import AboutMeSkeleton from "./AboutMeSkeleton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { personalInfo } from "../../data"
import { hasGraphqlConfig } from "../../apollo-client"

interface GetUserBio {
  profiles: [{ bio: string }]
}

export default function AboutMe() {
  const { loading, error, data } = useQuery<GetUserBio>(
    profileOperations.Queries.getBio,
    { skip: !hasGraphqlConfig }
  )

  if (error) {
    console.log(error)
  }

  if (loading && data === undefined) return <AboutMeSkeleton />

  const bio = data?.profiles?.[0]?.bio || personalInfo.summary

  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{bio}</ReactMarkdown>
      </article>

      <ul className="grid grid-cols-1 mt-6 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="role" value="Software & Technical Executive" />
        <MyInfo field="residence" value={personalInfo.residence} />
        <MyInfo field="availability" value={personalInfo.availability} />
        <MyInfo field="address" value={personalInfo.address} />
      </ul>
    </div>
  )
}
