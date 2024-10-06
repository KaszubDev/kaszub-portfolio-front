'use client'
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

interface ProjectGalleryCarouselProps {
  project: IProjectDetails
}

const ProjectGalleryCarousel = ({project}:ProjectGalleryCarouselProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [selectedImage, setSelectedImage] = useState<Number>(0)

  useEffect(() => {
    if(!carouselApi) return
    carouselApi.on('select', () => {
      setSelectedImage(carouselApi.selectedScrollSnap())
    })
  }, [carouselApi])

  const changeSlide = (slideNumber: number) => {
    carouselApi.scrollTo(slideNumber)
  }

  return (
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

        <div className="hidden sm:block mt-4 border-t border-t-gray-400"></div>

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
  )
}

export default ProjectGalleryCarousel