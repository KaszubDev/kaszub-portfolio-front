export {}

declare global {
    // Types
    
    // Interfaces
    interface Tag {
        documentId: number,
        Name: string,
        checked?: boolean
    }

    interface Image {
        documentId: number,
        url: string,
        alternativeText: string
    }

    interface IProjectsGrid {
        documentId: number,
        Name: string,
        Slug: string,
        Short_description: string,
        Thumbnail: Image,
        Tags: Tag[]
    }

    interface ITagsProps {
        tags: Tag[]
    }

    interface IProjectDetails {
        Name: string,
        Description: string,
        Slug: string,
        Short_description: string,
        Tags: Array<Tag>,
        Demo_url: string,
        Github_url: string,
        Gallery: Image[]
    }
}