import { cache } from "react"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

export const useFetchAbout = cache(async () => {
    const fetchParams = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            {
                about {
                    data {
                      attributes {
                        FullName
                        CurrentLocation
                        Interests
                        Skills
                        Education
                      }
                    }
                }
            }
            `
        })
    }
    
    const res = await fetch(`${URL}/graphql`, { ...fetchParams, next: {revalidate: 3600} })
    const about = await res.json()
    
    return about.data.about.data
})