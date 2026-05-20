import MyInfo from "../MyInfo"
import { personalInfo } from "../../data"

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116961.14727096779!2d90.41025267635874!3d23.638887049079436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0x6d3af4457bec4c90!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1757540395118!5m2!1sen!2sbd" style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value={personalInfo.address} />
        <MyInfo field="email" value={personalInfo.email} />
        <MyInfo field="phone" value={personalInfo.phone} />
        <MyInfo field="availability" value={personalInfo.availability} />
      </ul>
    </div>
  )
}
