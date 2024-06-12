import Image from "next/image"
import Link from 'next/link'
import TextOverflowChecker from "./TextOverflowChecker"

interface IProjectCardProps {
  key?: number,
  name: string,
  slug: string,
  shortDescription: string,
  thumbnailUrl: string,
  thumbnailAltText: string,
  tags?: { data: [{
    id: number,
    attributes: {
      name: string,
    }
  }] }
}

const ProjectCard = (props:IProjectCardProps) => {
  const {name, slug, shortDescription, thumbnailUrl, thumbnailAltText, tags } = props

  return (
    <Link href={`/projects/${slug}`}>
      <div className="relative h-full overflow-hidden flex flex-col bg-white rounded-lg ring-1 ring-slate-900/5 shadow-xl transition-shadow hover:ring-slate-900/20">
        <Image src={thumbnailUrl} width={400} height={300} alt={thumbnailAltText || `${name} project thumbnail`} />
        <div className="py-6 px-4 relative flex flex-col h-full">
          <span className="block text-xl mb-1 lg:text-2xl lg:mb-2 font-bold">{name}</span>
          <TextOverflowChecker>
            {shortDescription}
          </TextOverflowChecker>
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