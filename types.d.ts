import { IconType } from "react-icons"

export interface ProfileData {
  id: string
  cv: string
  name: string
  ownersPhoto: { url: string }
  bgImages: { url: string }[]
}

export interface partOfProfile {
  name: string
  ownersPhoto: { url: string }
}

export interface ServiceData {
  id: number
  title: string
  Icon: IconType
  description: string
}

export interface PriceData {
  id: string
  packageName: string
  packagePrice: number
  priceType: string
  freelanceUrl: string
  packageServices: PackageServiceData[]
}

export interface PackageServiceData {
  id: string
  isIncluded: boolean
  packageService: string
}

export interface ClientData {
  id: number
  linkLocation: string
  imgLocation: string
}

export interface TestimonialData {
  id: string
  userName: string
  userProfession: string
  quote: string
  userImage: { url: string }
}

export interface ExperienceData {
  id: string
  badge: string
  desc: string
  experience: boolean
  subTitle: string
  title: string
  logo: { url: string }
}

export interface SkillData {
  id: string
  knowledge: string[]
  backEnd: FieldValueData[]
  frontEnd: FieldValueData[]
  languages: FieldValueData[]
}

export interface FieldValueData {
  id?: string
  field: string
  value?: string
}

export interface WorksData {
  id: string
  title: string
  images: { url: string }[]
  workTabs: { tab: String }[]
}

export interface PageInfoData {
  hasNextPage: boolean
  endCursor: string
}

export interface WorksConnectionData {
  edges: { node: WorksData }[]
  pageInfo: PageInfoData
}

export interface SingleWorkData {
  id: string
  description: string
  title: string
  workUrl: string
  githubUrl: string
  clientName: string
  ownerName: string
  techStack: string[]
  userActions: string[]
  images: { url: string }[]
  date: Date
}

export interface BlogData {
  id: string
  blogUrl: string
  description: string
  title: string
  thumbnail: { url: string }
  date: Date
}

export interface BlogsQuery {
  blogs: BlogData[]
}

export interface MenuData {
  id: number
  label: string
  Icon: IconType
  Component: () => JSX.Element
}

export interface guestBooksConnection {
  edges: {
    node: {
      id: string
      name: string
      comment: string
      createdAt: Date
    }
  }[]
  pageInfo: PageInfoData
}

export interface StatisticsData {
  title: string
  info: string | number
  externalLink?: string
}

export interface SocialMedia {
  id: number
  label: string
  mediaUrl: string
  logoColor: string
  info: string
  Icon: IconType
}

export interface CertificationData {
  id: string
  title: string
  issuer: string
}

export interface PersonalInfo {
  fullName: string
  headline: string
  roles: string[]
  email: string
  phone: string
  address: string
  residence: string
  availability: string
  githubUrl: string
  linkedInUrl: string
  portfolioUrl: string
  cvUrl: string
  avatarUrl: string
  summary: string
}

export interface blog {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id: number
  published_timestamp: string
  positive_reactions_count: number
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at?: null
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list?: string[] | null
  tags: string
  user: User
}
export interface User {
  name: string
  username: string
  twitter_username: string
  github_username: string
  user_id: number
  website_url: string
  profile_image: string
  profile_image_90: string
}
