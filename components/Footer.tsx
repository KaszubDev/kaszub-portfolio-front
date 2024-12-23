import { useFetchCommon } from "@hooks/useFetchCommon"
import Link from "next/link"
import GithubLogo from "./icons/GithubLogo"
import LinkedinLogo from "./icons/LinkedinLogo"

const Footer = async () => {
  const common = await useFetchCommon()
  const {Linkedin, Github} = common

  return (
    <footer className="container mx-auto absolute bottom-0 left-0 right-0">
        <div className="border-t border-t-gray-400 flex justify-center py-4 2xl:py-5">
            <div className="flex gap-x-6">
              {Github &&
              <Link href={Github} className="dark:fill-foreground sm:hover:fill-foreground/80" title="KaszubDev GitHub profile">
                <GithubLogo classes="h-5 w-5 lg:h-6 lg:w-6"/>
              </Link>
              }
              {Linkedin &&
              <Link href={Linkedin} className="dark:fill-foreground sm:hover:fill-foreground/80" title="My LinkedIn profile">
                <LinkedinLogo classes="h-5 w-5 lg:h-6 lg:w-6"/>
              </Link>
              }
            </div>
        </div>
    </footer>
  )
}

export default Footer