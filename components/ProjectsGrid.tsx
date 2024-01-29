import ProjectCard from "@components/ProjectCard"

interface IProjectsGridProps {
  projects: IProjectsGrid[]
}

const ProjectsGrid = (projects:IProjectsGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
      {projects.projects.map((project) => {
          const {Name, Slug, Short_description, Thumbnail, Tags} = project.attributes
          const id = project.id
          return (
            <ProjectCard 
              key={id} 
              name={Name} 
              slug={Slug} 
              shortDescription={Short_description} 
              thumbnailUrl={Thumbnail?.data?.attributes.url} 
              thumbnailAltText={Thumbnail?.data?.attributes.alternativeText} 
              tags={Tags}
            />
          )
      })}
    </div>
  )
}

export default ProjectsGrid