import React from 'react'

import Right from './right'
import Left from './left'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log('post', data)
  return (
    <div>
      <Left />
      <Right />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query IdolQuery($slug: String!) {
    
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    },
  }
`
