/**  
 * Hook for fetching projects from the database with filtering based on project tags.
 * If @param tags is not provided, then all projects will be fetched
*/
import { cache } from "react"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

export const useFetchProjects = cache(async (tags: String[]) => {
    const fetchParams = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            {
            projects${tags.length > 0 ? `(filters: { Tags: { Name: { in: [${tags.map(tag => `"${tag}"`)}] } } })` : ``} {
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
    
    return projects.data.projects.data
})