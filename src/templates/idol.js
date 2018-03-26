import React from 'react'
import { navigateTo } from 'gatsby-link'
import Right from '../components/right'
import Left from '../components/left'
import styles from '../styles/card.module.css'

export default ({ data }) => {
  const post = data.markdownRemark

  const posts = data.allMarkdownRemark.edges
  const currentTitle = data.markdownRemark.frontmatter.title
  const currentIndex = posts
    .map(ele => {
      return ele.node.frontmatter.title
    })
    .indexOf(currentTitle)
  let rightIndex = 0,
    rightPath
  currentIndex === posts.length - 1
    ? (rightIndex = -1)
    : (rightIndex = currentIndex + 1)
  rightIndex === -1
    ? (rightPath = '/')
    : (rightPath = posts[rightIndex].node.fields.slug)

  return (
    <div
      onClick={() => navigateTo(rightPath)}
      className={styles[`card-${currentIndex+1}`]+" "+styles.card}
    >
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
