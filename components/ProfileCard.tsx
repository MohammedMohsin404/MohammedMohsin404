import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import { BsFillCloudArrowDownFill } from "react-icons/bs"
import { ProfileData } from "../types"
import MediaIcons from "./MediaIcons"
import MyLink from "./MyLink"
import Slide from "./Slide"
import Typing from "./Typing"
import Image from "next/image"
import { personalInfo } from "../data"

interface Props {
  profileData: ProfileData
}

export default function ProfileCard({ profileData }: Props) {
  const cvUrl = profileData.cv || personalInfo.cvUrl
  const hasCv = Boolean(cvUrl && cvUrl !== "#")

  return (
    <div className="profile h-full lg:w-[42rem] xl:w-[48rem] bg-gray-900 rounded-lg relative lg:block hidden">
      <div className="relative z-40 w-full h-full myShadow">
        <Slide images={profileData.bgImages} />

        <div className="relative z-20 w-56 h-56 mx-auto rounded-full -mt-36 profilePic">
          <Image
            width={140}
            height={140}
            src={profileData.ownersPhoto.url}
            alt="userPic"
            className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-4 border-[#1c1b1b] border-solid"
          />
        </div>

        <h1 className="text-center text-gray-300 text-[3.4rem] font-medium mt-4 mb-0.5">
          {profileData.name}
        </h1>

        <Typing />
        <MediaIcons />

        <div className="absolute bottom-0 left-0 flex w-full h-28 borderLeft customLine">
          <MyLink
            name={hasCv ? "download cv" : "github"}
            Icon={hasCv ? BsFillCloudArrowDownFill : AiOutlineGithub}
            url={hasCv ? cvUrl : personalInfo.githubUrl}
            border
          />
          <MyLink
            name="my linkedin"
            Icon={AiFillLinkedin}
            url={personalInfo.linkedInUrl}
          />
        </div>
      </div>
    </div>
  )
}
