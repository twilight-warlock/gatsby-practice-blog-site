import React from "react"
import Header from "../components/header"
import { Link, graphql } from "gatsby"

const blogpost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Header siteTitle="Codecell Blog" />
      <Link to="/blogs">Go Back</Link>
      <div style={{ width: "50%", margin: "auto" }}>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          - Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        author
        title
        date
      }
    }
  }
`

export default blogpost
