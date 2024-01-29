import { cache } from "react"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

export const useFetchProjects = cache(async () => {
    const fetchParams = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            {
            projects {
                    data {
                        id
                        attributes {
                            Name
                            Slug
                            Short_description
                            Thumbnail {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                            Tags {
                                data {
                                    id
                                    attributes {
                                        Name
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `
        })
    }
    
    const res = await fetch(`${URL}/graphql`, { ...fetchParams, next: {revalidate: 3600} })
    const projects = await res.json()
    
    // console.log(projects.data.projects.data)
    
    return projects.data.projects.data
})