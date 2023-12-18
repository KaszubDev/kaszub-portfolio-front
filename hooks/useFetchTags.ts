import { cache } from "react"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

export const useFetchTags = cache(async () => {
    const fetchParams = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            {
                tags {
                    data {
                        id
                        attributes {
                            Name
                        }
                    }
                }
            }
            `
        })
    }
    
    const res = await fetch(`${URL}/graphql`, { ...fetchParams, next: {revalidate: 3600} })
    const tags = await res.json()
    
    return tags.data.tags.data
})