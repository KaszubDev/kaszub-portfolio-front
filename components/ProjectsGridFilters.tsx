'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from 'next/navigation'

interface ProjectsGridFiltersProps {
  tags: Tag[]
}

const ProjectsGridFilters = ({tags}: ProjectsGridFiltersProps) => {
  const router = useRouter()
  const [localTags, setLocalTags] = useState<Tag[]>([...tags])
  
  const handleTagOnClick = (inputTag:Tag) => {
    const updatedTags = localTags.map(tag => tag.documentId === inputTag.documentId ? {...tag, checked: !inputTag.checked} : tag)
    setLocalTags(updatedTags)
  }

  const handleAllOnClick = () => {
    if (localTags.every(tag => tag.checked)) {
      setLocalTags(localTags.map((tag) => ({
        ...tag,
        checked: false
      })))
    } else {
      setLocalTags(localTags.map((tag) => ({
        ...tag,
        checked: true
      })))
    }
  }

  const handleApplyOnClick = () => {
    if (localTags.every(tag => tag.checked)) {
      router.push('/projects')
    } else {
      router.push(`/projects?filters=${localTags.filter(tag => tag.checked).map(tag => tag.Name).join(',')}`)
    }
  }

  return (
    <>
      <Dialog>
        <div className="text-right mb-2">
        <DialogTrigger asChild>
            <Button size="icon" variant="ghost" className="">
              <svg className="w-6 h-auto dark:fill-foreground" version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 666.7 566.6">
                <path d="M433.3,233.3c51.6,0,97.1-33.9,111.8-83.3h88.2c18.4,0,33.3-14.9,33.3-33.3s-14.9-33.3-33.3-33.3h-88.2
                  c-18.5-61.8-83.5-96.9-145.3-78.4c-37.6,11.3-67.1,40.7-78.4,78.4H33.3C14.9,83.3,0,98.2,0,116.6S14.9,150,33.3,150h288.2
                  C336.3,199.4,381.7,233.3,433.3,233.3z M33.3,416.6C14.9,416.6,0,431.6,0,450s14.9,33.3,33.3,33.3h71.5
                  c18.5,61.8,83.5,96.9,145.3,78.4c37.6-11.3,67.1-40.7,78.4-78.4h304.8c18.4,0,33.3-14.9,33.3-33.3s-14.9-33.3-33.3-33.3H328.5
                  c-18.5-61.8-83.5-96.9-145.3-78.4c-37.6,11.3-67.1,40.7-78.4,78.4H33.3z"/>
              </svg>
            </Button>
        </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filters</DialogTitle>
            <DialogDescription>
              Adjust the displayed projects depending on the technologies used.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-1">
              <Checkbox id="all" onCheckedChange={() => handleAllOnClick()} checked={localTags.every(tag => tag.checked)} />
              <Label htmlFor="all" className="text-right cursor-pointer">All</Label>
            </div>

            {localTags.map(tag => (
              <div key={tag.documentId} className="flex items-center gap-1">
                <Checkbox id={tag.Name} onCheckedChange={() => handleTagOnClick(tag)} checked={tag.checked}/>
                <Label htmlFor={tag.Name} className="text-right cursor-pointer">{tag.Name}</Label>
              </div>
            ))}
            
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button 
                type="submit" 
                onClick={handleApplyOnClick}
                disabled={localTags.every(tag => !tag.checked)}>
                  Apply
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectsGridFilters