'use client'
import { Button } from "@components/ui/button"
import { useFetchProjectBySlug } from "@hooks/useFetchProjectBySlug"
import { notFound } from "next/navigation"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import ProjectPagePlaceholder from "@components/ProjectPagePlaceholder"
import GithubLogo from "@components/icons/GithubLogo"
import { type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"

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


const Project = ({params}:{params: {slug: Text}}) => {
  const [project, setProject] = useState<IProjectDetails>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [selectedImage, setSelectedImage] = useState<Number>(0)

  useEffect(() => {
    (async () => {
      const fetchedProject:IProjectDetails = await useFetchProjectBySlug(params.slug)
      setProject(fetchedProject)
      console.log(fetchedProject)
    })().then(() => {
      setIsLoading(false)
    }).catch((err) => console.log("Error during fetching project data: " + err))
  }, [])

  if (!project && !isLoading) {
    notFound()
  }

  useEffect(() => {
    if(!carouselApi) return
    carouselApi.on('select', () => {
      setSelectedImage(carouselApi.selectedScrollSnap())
    })
  }, [carouselApi])

  const changeSlide = (slideNumber: number) => {
    carouselApi.scrollTo(slideNumber)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto pt-2">
        <ProjectPagePlaceholder/>
      </div>
    )
  }

  return (
    <div className="container mx-auto pt-2 mb-7">
      <div className="grid lg:grid-cols-2 lg:gap-x-20">
        <div className="lg:order-2">
          <h1 className="text-2xl font-bold lg:text-4xl">{project?.Name}</h1>
          <div className="flex flex-wrap gap-x-2 mt-2">
            {project?.Tags?.data.map((tag:Tag) => (
              <span className="text-xs" key={tag.id}>#{tag.attributes.Name}</span>
            ))}
          </div>

          <p className="mt-5">{project?.Description}</p>

          <div className="flex gap-x-5 mt-6">
            {project?.Demo_url && 
            <Link href={project.Demo_url}>
              <Button>Live Demo</Button>
            </Link>
            }
            {project?.Github_url &&
            <Link href={project.Github_url}>
              <Button variant="outline">
                <GithubLogo classes="h-5 w-5 mr-2"/>
                View source
              </Button>
            </Link>
            }
          </div>
        </div>

        {project && project.Gallery.data.length > 0 && 
        <div className="mt-7 lg:order-1 lg:mt-0">
        <Carousel
          plugins={[]}
          className=""
          opts={{
            loop: true
          }}
          setApi={setCarouselApi}
          >
          <CarouselContent>
            {project.Gallery.data.map((item: Image) => (
              <CarouselItem key={item.id}>
                <Image 
                  src={item.attributes.url}
                  alt={item.attributes.alternativeText || `screenshot from ${project.Name} project`}
                  width={750}
                  height={365}
                  placeholder="blur"
                  blurDataURL={item.attributes.url}
                  sizes="(max-width: 768px) 100vw, (min-width: 1200px) 50vw"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 2xl:gap-7 2xl:mt-7">
          {project.Gallery.data.map((item: Image, index) => (
            <button 
              onClick={() => changeSlide(index)}
              className={`transition-opacity ${index === selectedImage ? 'opacity-100' : 'opacity-40'}`}
              key={item.id}
              >
              <Image 
                src={item.attributes.url}
                alt={item.attributes.alternativeText || `screenshot from ${project.Name} project`}
                placeholder="blur"
                blurDataURL={item.attributes.url}
                width={220}
                height={150}
              />
            </button>
          ))}
        </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Project