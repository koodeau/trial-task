import routes from "./src/config/constants/routes";

const path = require("path")

exports.createPages = async ({ graphql, actions }: {graphql: any, actions: any}) => {
    const { createPage } = actions
    const queryResults = await graphql(`
    query AllPosts {
      allGraphCmsPost {
        nodes {
          title
          createdAt
          slug
          body
          image {
            url
          }
          categories {
            name
          }
          publishedBy {
            name
          }
        }
      }
    }
  `)

    const blogTemplate = path.resolve(`src/pages/Blog.tsx`)

    queryResults.data.allGraphCmsPost.nodes.forEach((node: { slug: string }) => {
        createPage({
            path: `${routes.BLOG + node.slug}`,
            component: blogTemplate,
            context: {
                blogData: node,
            },
        })
    })
}
