'use client'
import ProjectsPlaceholder from "@components/ProjectsPlaceholder"
import ProjectsGrid from "@components/ProjectsGrid"
import { ProjectsGridFilters } from "@components/ProjectsGridFilters"
import { useFetchProjects } from "@hooks/useFetchProjects"
import { useEffect, useState } from "react"

const Home = () => {
  const [projects, setProjects] = useState<IProjectsGrid[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const res:IProjectsGrid[] = await useFetchProjects()
      setProjects(res)

      console.log(res.filter(project => project.attributes.Name === 'FitEat'))
      
    })().then(() => {
      setIsLoading(false)
    }).catch((err) => {
      console.log("Error during fetching projects: " + err)
    })
    
  }, [])

  return (
    <section className="container mx-auto relative">
      <ProjectsGridFilters/>
      {isLoading && <ProjectsPlaceholder/>}
      <ProjectsGrid projects={projects}/>
    </section>
  )
}

export default Home