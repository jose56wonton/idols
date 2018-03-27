import React from 'react'
import { navigateTo } from 'gatsby-link'
import Right from '../components/right'
import Left from '../components/left'
import styles from './idols.module.css'

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
    leftIndex = 0,
    rightPath,
    leftPath
  if (currentIndex === posts.length - 1) {
    rightIndex = -1
    leftIndex = currentIndex - 1
  } else if (currentIndex === 0) {
    rightIndex = currentIndex + 1
    leftIndex = -1
  } else {
    rightIndex = currentIndex + 1
    leftIndex = currentIndex - 1
  }

  rightIndex === -1
    ? (rightPath = '/')
    : (rightPath = posts[rightIndex].node.fields.slug)
  leftIndex === -1
    ? (leftPath = '/')
    : (leftPath = posts[leftIndex].node.fields.slug)

  return (
    <div>
      <Left path={leftPath} />
      <div
        onClick={() => navigateTo(rightPath)}
        className={styles[`phase-${currentIndex + 1}`] + ' ' + styles.card}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Right path={rightPath} />
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
