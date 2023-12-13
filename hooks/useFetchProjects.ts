const URL = process.env.STRAPI_BASE_URL

export const useFetchProjects = async () => {
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
    
    const res = await fetch(`${URL}/graphql`, fetchParams)
    const projects = await res.json()
    
    // console.log(projects.data.projects.data)
    
    return projects.data.projects.data
}