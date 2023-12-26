import { Skeleton } from "./ui/skeleton"

const ProjectPagePlaceholder = () => {
  return (
    <>
        <Skeleton className="w-44 h-8 mb-4"/>
        <Skeleton className="w-32 h-4"/>
        <Skeleton className="w-100 h-72 mt-5"/>
        <Skeleton className="w-3/4 h-10 mt-6"/>
        <Skeleton className="w-100 h-48 mt-7"/>
    </>
  )
}

export default ProjectPagePlaceholder