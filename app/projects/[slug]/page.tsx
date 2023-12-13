import { notFound } from "next/navigation"

const URL = process.env.STRAPI_BASE_URL
export const dynamicParams = true

export const generateStaticParams = async () => {
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
                    attributes {
                        Slug
                    }
                }
            }
        }
        `
    })
  }

  const res = await fetch(`${URL}/graphql`, fetchParams)
  const projects = await res.json()
  const params = projects.data.projects.data.map((project: { attributes: { Slug: Text } }) => {
    return { slug: project.attributes.Slug }
  })

  return params
}

const getProject = async (slug: Text) => {
  const fetchParams = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query: `
        {
          projects(filters: {Slug:{eq:"${slug}"}}) {
            data {
                attributes {
                    Name
                    Slug
                }
            }
          }
        }
        `
    }),
    next: {
      revalidate: 60
    }
  }

  const res = await fetch(`${URL}/graphql`, fetchParams)
  if (!res.ok) return undefined
  const project = await res.json()
  return project.data.projects.data[0]?.attributes
}


const Project = async ({params}:{params: any}) => {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto">
        <h1 className="text-3xl">Welcome to {project?.Name} project page</h1>
    </div>
  )
}

export default Project