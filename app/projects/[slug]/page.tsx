import { Button } from "@components/ui/button"
import { useFetchProjectBySlug } from "@hooks/useFetchProjectBySlug"
import { notFound } from "next/navigation"
import GithubLogo from "@components/icons/GithubLogo"
import Link from "next/link"
import ProjectGalleryCarousel from "@components/ProjectGalleryCarousel"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

// Dynamic segments not included in generateStaticParams are generated on demand.
export const dynamicParams = true

export const generateStaticParams = async () => {
  const fetchParams = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query: `
        {
            projects {
                data {
                    attributes {
                        Slug
                    }
                }
            }
        }
        `
    })
  }

  const res = await fetch(`${URL}/graphql`, fetchParams)
  const projects = await res.json()
  const params = projects.data.projects.data.map((project: { attributes: { Slug: Text } }) => {
    return { slug: project.attributes.Slug }
  })

  return params
}


const Project = async ({params}:{params: {slug: Text}}) => {
  const fetchedProject:IProjectDetails = await useFetchProjectBySlug(params.slug)

  if (!fetchedProject) {
    notFound()
  }

  return (
    <div className="container mx-auto pt-2 mb-7">
      <div className="grid lg:grid-cols-2 lg:gap-x-20">
        <div className="lg:order-2">
          <h1 className="text-2xl font-bold lg:text-4xl">{fetchedProject?.Name}</h1>
          <div className="flex flex-wrap gap-x-2 mt-2">
            {fetchedProject?.Tags?.data.map((tag:Tag) => (
              <span className="text-xs" key={tag.id}>#{tag.attributes.Name}</span>
            ))}
          </div>

          <p className="mt-5">{fetchedProject?.Description}</p>

          <div className="flex gap-x-5 mt-6">
            {fetchedProject?.Demo_url && 
            <Link href={fetchedProject.Demo_url}>
              <Button>Live Demo</Button>
            </Link>
            }
            {fetchedProject?.Github_url &&
            <Link href={fetchedProject.Github_url}>
              <Button variant="outline">
                <GithubLogo classes="h-5 w-5 mr-2"/>
                View source
              </Button>
            </Link>
            }
          </div>
        </div>

        {fetchedProject && fetchedProject.Gallery.data.length > 0 && 
          <ProjectGalleryCarousel project={fetchedProject}/>
        }
      </div>
    </div>
  )
}

export default Project