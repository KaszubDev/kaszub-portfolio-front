import { useFetchCommon } from "@hooks/useFetchCommon"
import Link from "next/link"
import GithubLogo from "./icons/GithubLogo"
import LinkedinLogo from "./icons/LinkedinLogo"

const Footer = async () => {
  const common = await useFetchCommon()
  const {Linkedin, Github} = common.attributes

  return (
    <footer className="container mt-3 md:mt-5 lg:mt-8 mx-auto">
        <div className="border-t border-t-gray-400 flex justify-center py-3">
            <div className="flex gap-x-6">
              {Github &&
              <Link href={Github} className="md:hover:fill-zinc-700" title="KaszubDev GitHub profile">
                <GithubLogo classes="h-5 w-5 md:h-6 md:w-6"/>
              </Link>
              }
              {Linkedin &&
              <Link href={Linkedin} className="md:hover:fill-zinc-700" title="My LinkedIn profile">
                <LinkedinLogo classes="h-5 w-5 md:h-6 md:w-6"/>
              </Link>
              }
            </div>
        </div>
    </footer>
  )
}

export default Footer