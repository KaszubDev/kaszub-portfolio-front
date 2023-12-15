import { useFetchCommon } from "@hooks/useFetchCommon"
import Link from "next/link"

const Footer = async () => {
  const common = await useFetchCommon()
  const {Linkedin, Github} = common.attributes

  return (
    <footer className="container mt-5 lg:mt-8 mx-auto">
        <div className="border-t border-t-gray-400 flex justify-center py-3">
            <div className="flex gap-x-6">
              {Github &&
              <Link href={Github} className="hover:opacity-80" title="KaszubDev GitHub profile">
                <svg className="h-5 w-5 md:h-6 md:w-6" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 97.6 96">
                <path d="M48.9,0C21.8,0,0,22,0,49.2C0,71,14,89.4,33.4,95.9c2.4,0.5,3.3-1.1,3.3-2.4c0-1.1-0.1-5.1-0.1-9.1
                  c-13.6,2.9-16.4-5.9-16.4-5.9c-2.2-5.7-5.4-7.2-5.4-7.2c-4.4-3,0.3-3,0.3-3c4.9,0.3,7.5,5.1,7.5,5.1c4.4,7.5,11.4,5.4,14.2,4.1
                  c0.4-3.2,1.7-5.4,3.1-6.6c-10.8-1.1-22.2-5.4-22.2-24.3c0-5.4,1.9-9.8,5-13.2c-0.5-1.2-2.2-6.3,0.5-13c0,0,4.1-1.3,13.4,5.1
                  c4-1.1,8.1-1.6,12.2-1.6c4.1,0,8.3,0.6,12.2,1.6c9.3-6.4,13.4-5.1,13.4-5.1c2.7,6.8,1,11.8,0.5,13c3.2,3.4,5,7.8,5,13.2
                  c0,18.9-11.4,23.1-22.3,24.3c1.8,1.5,3.3,4.5,3.3,9.1c0,6.6-0.1,11.9-0.1,13.5c0,1.3,0.9,2.9,3.3,2.4C83.6,89.4,97.6,71,97.6,49.2
                  C97.7,22,75.8,0,48.9,0z"/>
                </svg>
              </Link>
              }
              {Linkedin &&
              <Link href={Linkedin} className="hover:opacity-80" title="My LinkedIn profile">
                <svg className="h-5 w-5 md:h-6 md:w-6" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 310 309.3">
                <g id="XMLID_801_">
                  <path id="XMLID_802_" d="M72.2,99.4H9.9c-2.8,0-5,2.2-5,5v199.9c0,2.8,2.2,5,5,5h62.2c2.8,0,5-2.2,5-5V104.4
                    C77.2,101.6,74.9,99.4,72.2,99.4z"/>
                  <path id="XMLID_803_" d="M41.1,0C18.4,0,0,18.4,0,41c0,22.6,18.4,41,41.1,41c22.6,0,41-18.4,41-41C82.1,18.4,63.7,0,41.1,0z"/>
                  <path id="XMLID_804_" d="M230.5,94.4c-25,0-43.5,10.7-54.7,23v-13c0-2.8-2.2-5-5-5h-59.6c-2.8,0-5,2.2-5,5v199.9c0,2.8,2.2,5,5,5
                    h62.1c2.8,0,5-2.2,5-5v-98.9c0-33.3,9.1-46.3,32.3-46.3c25.3,0,27.3,20.8,27.3,48v97.2c0,2.8,2.2,5,5,5H305c2.8,0,5-2.2,5-5V194.7
                    C310,145.1,300.5,94.4,230.5,94.4z"/>
                </g>
                </svg>
              </Link>
              }
            </div>
        </div>
    </footer>
  )
}

export default Footer