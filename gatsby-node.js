const { match } = require("assert")
const path = require("path")

exports.createPages = async ({graphql,actions}) => {
    const {createPage}=actions

const result = await graphql(`
                  
query MyQuery {
  allWordpressPost {
    nodes {
      categories {
        path
        name
        slug
      }
      slug
      title
      content
      excerpt
      featured_media {
        source_url
      }
    }
  }
}

  
  
`)
console.log(result)
if (result.errors) {
    throw new Error(result.errors)
}

const projects = result.data.allWordpressPost.nodes;
const projectpage = path.resolve(`./src/template/project.js`)


projects.forEach(node => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.

    
    var slug= node.categories[0].path.replace('/category','')+node.slug;
    console.log("=================================================")
    console.log(slug)
    console.log("=================================================")
    createPage({
        path: slug,
        component: projectpage,
        context: {
            project:node
        },
    })
})


}