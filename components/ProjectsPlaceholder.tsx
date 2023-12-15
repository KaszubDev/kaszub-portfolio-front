import { Skeleton } from "./ui/skeleton"

const ProjectsPlaceholder = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="border border-solid border-slate-100 rounded-lg overflow-hidden">
          <Skeleton className="w-100 h-52"/>
          <div className="py-4 px-3">
            <Skeleton className="w-44 h-7 mb-4"/>
            <Skeleton className="w-100 h-32"/>
            <Skeleton className="w-32 h-4 mt-4"/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPlaceholder