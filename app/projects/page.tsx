import ProjectsGrid from "@components/ProjectsGrid"
import { useFetchProjects } from "@hooks/useFetchProjects"
import ProjectsGridFilters from "@components/ProjectsGridFilters"
import { useFetchTags } from "@hooks/useFetchTags"

const Projects = async ({searchParams}:{searchParams: {filters: Text}}) => {
  const filterTags:String[] = searchParams.filters ? searchParams.filters.toString().split(',') : []
  const projects = await useFetchProjects(filterTags)
  const tags = await useFetchTags()

  tags.forEach((tag:Tag) => {
    if (filterTags.includes(tag.name) || filterTags.length === 0) {
      tag.checked = true
    }
  })

  return (
    <section className="container mx-auto relative sm:mb-5">
      <ProjectsGridFilters tags={tags}/>
      <ProjectsGrid projects={projects}/>
    </section>
  )
}

export default Projects