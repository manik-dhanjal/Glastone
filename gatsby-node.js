const path = require("path")
const products =require("./src/template/product/productData.js") 
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
if (result.errors) {
    throw new Error(result.errors)
}

const projects = result.data.allWordpressPost.nodes;
const projectpage = path.resolve(`./src/template/project.js`)
const productpage=path.resolve("./src/template/product/product.js")


products.data.forEach((product) => { 
  var slug= "/product/"+product.slug;
  console.log("=================================================")
  console.log(slug)
  console.log("=================================================")
  createPage({
      path: slug,
      component: productpage,
      context: {
          product:product
      },
  })
})
projects.forEach((node,i) => { 
    var slug= node.categories[0].path.replace('/category','')+node.slug;
    console.log("=================================================")
    console.log(slug,i)
    console.log("=================================================")
    createPage({
        path: slug,
        component: projectpage,
        context: {
            project:node,
            nextProject:projects[i<projects.length-1?(i+1):0],
            prevProject:projects[i>0?(i-1):(projects.length-1)]
        },
    })
})


}