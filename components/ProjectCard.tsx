import Image from "next/image"
import Link from 'next/link'
import TextOverflowChecker from "./TextOverflowChecker"
import TextOverflowCheckerCopy from "./TextOverflowChecker_copy"

interface IProjectCardProps {
  key?: number,
  name: string,
  slug: string,
  shortDescription: string,
  thumbnailUrl: string,
  thumbnailAltText: string,
  tags?: { data: [] }
}

const ProjectCard = (props:IProjectCardProps) => {
  const {name, slug, shortDescription, thumbnailUrl, thumbnailAltText, tags } = props

  return (
    <Link href={`/projects/${slug}`}>
      <div className="relative border border-solid border-black h-full rounded-lg overflow-hidden flex flex-col">
        <Image src={thumbnailUrl} width={400} height={300} alt={thumbnailAltText || `${name} project thumbnail`} />
        <div className="py-4 px-3 relative flex flex-col h-full">
          <span className="block text-xl lg:text-2xl lg:mb-2 font-bold">{name}</span>
          <TextOverflowCheckerCopy>
            {shortDescription}
          </TextOverflowCheckerCopy>
          <div className="flex flex-wrap gap-x-2 mt-auto">
              {tags?.data.map((tag:any) => (
                <span className="text-xs" key={tag.id}>#{tag.attributes.Name}</span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard