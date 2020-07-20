import React from "react"
import Header from "../components/header"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <div>
      <Header siteTitle="Blog Page" />
      <div style={{ width: "80%", margin: "auto" }}>
        <h1>Latest Posts</h1>
        <div style={{ display: "flex" }}>
          {data.allMarkdownRemark.edges.map(post => (
            <div className="card" key={post.node.id}>
              <h3>{post.node.frontmatter.title}</h3>
              <hr />
              <small>
                - Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}{" "}
              </small>
              <br />
              <br />
              <Link to={post.node.frontmatter.path}>Read More...</Link>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
            author
          }
          id
        }
      }
    }
  }
`

export default BlogPage
