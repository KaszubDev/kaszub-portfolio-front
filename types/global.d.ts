export {}

declare global {
    // zrobic uniwersalny type dla obrazkow (Thumbnail i galeria projektow)

    // Types
    type Tag = {
        id: number,
        attributes: {
          Name: string
        },
        checked?: boolean
    }

    type Image = {
        id: number,
        attributes: {
            url: string,
            alternativeText: string
        }
    }

    // Interfaces
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

    interface IProjectsGridProps {
        projects: IProjectsGrid[]
    }

    interface ITagsProps {
        tags: Tag[]
    }

    interface IProjectDetails {
        Name: string,
        Description: string,
        Slug: string,
        Short_description: string,
        Tags: { data: Array }
        Gallery: { data: Image[] }
    }
}