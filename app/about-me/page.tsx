import AboutDataBlock from "@components/AboutDataBlock"
import { useFetchAbout } from "@hooks/useFetchAbout"
import { useFetchCommon } from "@hooks/useFetchCommon"
import Link from 'next/link'

const AboutPage = async () => {
  const aboutData = await useFetchAbout()
  const common = await useFetchCommon()

  // Extract data and create a new array
  const extractedData = Object.entries(aboutData.attributes).map(([title, content]) => ({
    title: `KaszubDev.${title}`,
    content: Array.isArray(content) ? `["${(content as string[]).join('", "')}"]` : `"${content}"` as string
  }))

  const extractedDataCommon = Object.entries(common.attributes).map(([title, url]) => ({
    title,
    url: url as string
  }))

  return (
    <div className="container mx-auto">
      <div className="max-w-5xl mx-auto font-mono text-white rounded-md overflow-hidden">
        <div className="bg-[#E4E3E5] h-8">
          <div className="flex h-100 items-center ml-[10px] h-full">
            <div className=" w-[14px] h-[14px] bg-[#F96256] rounded-full mr-2"></div>
            <div className=" w-[14px] h-[14px] bg-[#FDBC3D] rounded-full mr-2"></div>
            <div className=" w-[14px] h-[14px] bg-[#33C948] rounded-full"></div>
          </div>
        </div>
        <div className="bg-[#5A5D7A]">
          <div className="p-5 lg:p-9">
            {extractedData.map(item => (
              <AboutDataBlock title={item.title} content={item.content} classes="mb-6"/>
            ))}
            <div className="mb-6">
                <span className="block">&gt; KaszubDev.ContactInfo</span>
                <span className="text-[#E7D184]">[
                  {extractedDataCommon.map((item, index) => (
                    <>"
                    <span className="text-[#35FEFF]">
                    <Link href={item.url} className="transition-opacity hover:opacity-80">
                      {item.title}
                    </Link>
                    </span>
                    {index+1 === extractedDataCommon.length ? '"' : '", '}</>
                  ))}
                ]</span>
            </div>

            <div>
              <span className="flex items-center">&gt; <span className="ml-2 w-2 bg-slate-300 h-5 inline-block animate-blink"></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage