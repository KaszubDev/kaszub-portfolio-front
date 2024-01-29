export {}

declare global {
    // Types
    
    // Interfaces
    interface Tag {
        id: number,
        attributes: {
          Name: string
        },
        checked?: boolean
    }

    interface Image {
        id: number,
        attributes: {
            url: string,
            alternativeText: string
        }
    }

    interface IProjectsGrid {
        id: number,
        attributes: {
            Name: string,
            Slug: string,
            Short_description: string,
            Thumbnail: { data: Image },
            Tags: { data: Array }
        }
    }

    interface ITagsProps {
        tags: Tag[]
    }

    interface IProjectDetails {
        Name: string,
        Description: string,
        Slug: string,
        Short_description: string,
        Tags: { data: Array },
        Demo_url: string,
        Github_url: string,
        Gallery: { data: Image[] }
    }
}