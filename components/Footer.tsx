import { useFetchCommon } from "@hooks/useFetchCommon"
import Link from "next/link"

const Footer = async () => {
  const common = await useFetchCommon()
  const {Linkedin, Github} = common.attributes

  return (
    <footer className="container mt-5 lg:mt-8 mx-auto">
        <div className="border-t border-t-gray-400 flex justify-center py-3">
            <div className="flex gap-x-6">
              <Link href={Github}>
                Github
              </Link>
              <Link href={Linkedin}>
                Linkedin
              </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer