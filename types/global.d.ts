export {}

declare global {
    interface IProjectCardProps {
        key?: number,
        name: string,
        slug: string,
        shortDescription: string,
        thumbnailUrl: string,
        tags?: { data: Array }
    }

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
}