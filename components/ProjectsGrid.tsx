import ProjectCard from "@components/ProjectCard"

const ProjectsGrid = (projects:IProjectsGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      {projects.projects.map((project) => {
          const {Name, Slug, Short_description, Thumbnail, Tags} = project.attributes
          const id = project.id
          
          return <ProjectCard key={id} name={Name} slug={Slug} shortDescription={Short_description} thumbnailUrl={Thumbnail?.data?.attributes.url} tags={Tags}/>
      })}
    </div>
  )
}

export default ProjectsGrid