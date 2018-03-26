import React from 'react'

import Right from './right'
import Left from './left'

export default ({ data }) => {
  const post = data.markdownRemark
  console.log('post', data)
  const posts = data.allMarkdownRemark.edges;
  const currentTitle = data.markdownRemark.frontmatter.title
  const currentIndex = posts.map((ele) => {return ele.node.frontmatter.title}).indexOf(currentTitle);
  let rightIndex = 0, leftIndex = 0;
  if( currentIndex < posts.length-1)
    rightIndex = currentIndex+1
  if(currentIndex > 0 )
    leftIndex = currentIndex-1
  const rightPath = posts[rightIndex].node.fields.slug;
  const leftPath = posts[leftIndex].node.fields.slug;
  console.log(currentTitle, rightPath)
  return (
    <div>
      <Left path={leftPath} />
      <Right path={rightPath} />
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
    }
  }
`
