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

type ProjectsGridFiltersProps = {
  applyFilters: () => void,
  changeTags: (arr: Tag[]) => void,
  tags: Tag[]
}

const ProjectsGridFilters = ({applyFilters, changeTags, tags}:ProjectsGridFiltersProps) => {
  
  const handleTagOnClick = (inputTag:Tag) => {
    inputTag.checked = !inputTag.checked
    let tempTags = [...tags]
    // Find the index of the tag with the specified id, then update state
    const index = tempTags.findIndex(tag => tag.id === inputTag.id)
    tempTags[index] = inputTag
    changeTags(tempTags)
  }

  const handleAllOnClick = () => {
    let tempTags = [...tags]
    if (tags.every(tag => tag.checked)) {
      tempTags.forEach(tag => tag.checked = false)
    } else {
      tempTags.forEach(tag => tag.checked = true)
    }
    changeTags(tempTags)
  }


  return (
    <>
      <Dialog>
        <div className="text-right lg:mb-2">
        <DialogTrigger asChild>
            <Button size="icon" variant="ghost" className=" hover:bg-transparent hover:fill-zinc-700">
              <svg className="w-6 h-auto" version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
              <Checkbox id="all" onCheckedChange={() => handleAllOnClick()} checked={tags.every(tag => tag.checked)} />
              <Label htmlFor="all" className="text-right cursor-pointer">All</Label>
            </div>

            {tags.map(tag => (
              <div key={tag.id} className="flex items-center gap-1">
                <Checkbox id={tag.attributes.Name} onCheckedChange={() => handleTagOnClick(tag)} checked={tag.checked}/>
                <Label htmlFor={tag.attributes.Name} className="text-right cursor-pointer">{tag.attributes.Name}</Label>
              </div>
            ))}
            
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={() => applyFilters()}>Apply</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProjectsGridFilters