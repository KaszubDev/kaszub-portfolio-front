import { cache } from "react"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

export const useFetchCommon = cache(async () => {
    const fetchParams = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            {
                common {
                    data {
                        attributes {
                            Linkedin
                            Github
                        }
                    }
                }
            }
            `
        })
    }
    
    const res = await fetch(`${URL}/graphql`, { ...fetchParams, next: {revalidate: 3600} })
    const common = await res.json()
    
    return common.data.common.data
})