import ProjectCard from "@components/ProjectCard"

interface IProjectsGridProps {
  projects: IProjectsGrid[]
}

const ProjectsGrid = ({projects}: IProjectsGridProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {projects.map((project) => {
          const {documentId, Name, Slug, Short_description, Thumbnail, Tags} = project
          return (
            <ProjectCard 
              key={documentId} 
              name={Name} 
              slug={Slug} 
              shortDescription={Short_description} 
              thumbnailUrl={Thumbnail?.url} 
              thumbnailAltText={Thumbnail?.alternativeText} 
              tags={Tags}
            />
          )
      })}
    </div>
  )
}

export default ProjectsGrid