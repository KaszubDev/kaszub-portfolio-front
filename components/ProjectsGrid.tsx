import ProjectCard from "@components/ProjectCard"

const ProjectsGrid = (projects:IProjectsGridProps) => {
  return (
    <>
    {projects.projects.map((project) => {
        const {Name, Slug, Short_description, Thumbnail, Tags} = project.attributes
        const id = project.id
        
        return <ProjectCard key={id} name={Name} slug={Slug} shortDescription={Short_description} thumbnailUrl={Thumbnail?.data?.attributes.url} tags={Tags}/>
    })}
    </>
  )
}

export default ProjectsGrid