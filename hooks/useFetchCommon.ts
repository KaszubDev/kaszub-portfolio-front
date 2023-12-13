const URL = process.env.STRAPI_BASE_URL

export const useFetchCommon = async () => {
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
    
    const res = await fetch(`${URL}/graphql`, fetchParams)
    const common = await res.json()
    
    return common.data.common.data
}