import ProjectsGrid from "@components/ProjectsGrid"
import { useFetchProjects } from "@hooks/useFetchProjects"

const Home = async () => {
  const projects:IProjectsGrid[] = await useFetchProjects()

  return (
    <section className="container mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
        <ProjectsGrid projects={projects}/>
      </div>
    </section>
  )
}

export default Home