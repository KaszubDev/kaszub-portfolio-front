import Image from "next/image"
import Link from 'next/link'

type IProjectCardProps = {
  key?: number,
  name: string,
  slug: string,
  shortDescription: string,
  thumbnailUrl: string,
  tags?: { data: [] }
}

const ProjectCard = (props:IProjectCardProps) => {
  const {name, slug, shortDescription, thumbnailUrl, tags } = props

  return (
    <Link href={`/projects/${slug}`}>
      <div className="border border-solid border-black rounded-lg overflow-hidden">
        <Image src={thumbnailUrl} width={500} height={350} alt="sample project image" />
        <div className="py-4 px-3">
          <span className="text-xl lg:text-2xl font-bold">{name}</span>
          <p className="text-sm lg:text-base">{shortDescription}</p>
          <div className="flex flex-wrap gap-x-2 mt-2">
              {tags?.data.map((tag:any) => {
                return <span className="text-xs" key={tag.id}>#{tag.attributes.Name}</span>
              })}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard