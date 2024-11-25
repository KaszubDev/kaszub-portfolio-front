import { cache } from "react"

const URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL

export const useFetchProjectBySlug = cache(async (slug: Text) => {
    const fetchParams = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          query: `
          {
            projects(filters: {Slug:{eq:"${slug}"}}){
              Name
              Slug
              Description
              Tags {
                documentId
                Name
              }
              Demo_url
              Github_url
              Gallery {
                documentId
                  url
                  alternativeText
              }
            }
          }
          `
      }),
      next: {
        revalidate: 3600
      }
    }
  
    const res = await fetch(`${URL}/graphql`, fetchParams)
    if (!res.ok) return undefined
    const project = await res.json()
    
    return project.data.projects[0]
  })