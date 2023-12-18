export {}

declare global {
    interface IProjectsGrid {
        id: number,
        attributes: {
            Name: string,
            Slug: string,
            Short_description: string,
            Thumbnail: { 
                data: {
                    attributes: {
                        url: string
                    }
                }
            },
            Tags: { data: Array }
        }
    }

    interface IProjectsGridProps {
        projects: IProjectsGrid[]
    }

    type Tag = {
        id: number,
        attributes: {
          Name: string
        },
        checked: boolean
    }

    interface ITagsProps {
        tags: Tag[]
    }
}