import ProjectsGrid from "@components/ProjectsGrid"
import { useFetchProjects } from "@hooks/useFetchProjects"

const ProjectsTest = async () => {
  const projects = await useFetchProjects()


  return (
    <section className="container mx-auto relative">
    <ProjectsGrid projects={projects}/>
      
    </section>
  )
}

export default ProjectsTest