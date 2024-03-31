'use client'
import ProjectsPlaceholder from "@components/ProjectsPlaceholder"
import ProjectsGrid from "@components/ProjectsGrid"
import ProjectsGridFilters from "@components/ProjectsGridFilters"
import { useFetchProjects } from "@hooks/useFetchProjects"
import { useEffect, useState } from "react"
import { useFetchTags } from "@hooks/useFetchTags"

const Home = () => {
  const [projects, setProjects] = useState<IProjectsGrid[]>([])
  const [filteredProjects, setFilteredProjects] = useState<IProjectsGrid[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [tags, setTags] = useState<Tag[]>([])
  const [isAnyTagSelected, setIsAnyTagSelected] = useState<Boolean>(true)

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const res:IProjectsGrid[] = await useFetchProjects()
      setProjects(res)
    })().then(() => {
      setIsLoading(false)
    }).catch((err) => {
      console.log("Error during fetching projects: " + err)
    })
  }, [])

  const handleApplyFilters = (tags:Tag[]) => {
    const filters = tags.filter(tag => tag.checked).map(tag => tag.attributes.Name)
    if (filters.length > 0) {
        const filteredProjects = projects.filter((project) =>
          project.attributes.Tags.data.some((tag:any) => filters.includes(tag.attributes.Name)
        ))
        setFilteredProjects(filteredProjects)
    } else {
      setFilteredProjects([])
    }
  }

  useEffect(() => {
    (async () => {
      const tags = await useFetchTags()
      tags.forEach((tag: { checked: boolean }) => tag.checked = true)
      setTags(tags)
    })().catch((err) => console.log("Error during fetching tags: " + err))
  }, [])

  useEffect(() => {
    setIsAnyTagSelected(tags.some((tag: Tag) => tag.checked))
  }, [tags, filteredProjects])

  
  return (
    <section className="container mx-auto relative">
      <ProjectsGridFilters tags={tags} changeTags={setTags} applyFilters={handleApplyFilters}/>
      {isLoading && <ProjectsPlaceholder/>}
      {tags.length > 0 && !isAnyTagSelected && <p className="text-center mt-3">Please select at least one category (technology)</p>}
      {
        isAnyTagSelected &&
        <ProjectsGrid projects={filteredProjects.length > 0 ? filteredProjects : projects}/>
      }
    </section>
  )
}

export default Home