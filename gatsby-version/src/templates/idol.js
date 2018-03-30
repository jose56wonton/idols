import React from 'react'
import { navigateTo } from 'gatsby-link'
import styles from './idols.module.css'
import NavButton from '../components/navButton'
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
  const currentColor = currentIndex +1
  const asdf = "color-"+currentColor
  console.log(asdf);
  return (
    <div >
      <NavButton path={leftPath} position="left" text="Left" style={currentIndex+1}/>
      <div
        onClick={() => navigateTo(rightPath)}
        className={`${styles.card} ${styles[asdf]}` }
      >
        <h1 className={styles.fadeIn}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <NavButton path={rightPath} position="right" text="Right" style={currentIndex+1} />
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
