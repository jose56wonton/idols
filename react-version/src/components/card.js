import React from "react";
//import NavButton from "../components/navButton";
export default props => {
  // const post = data.markdownRemark

  // const posts = data.allMarkdownRemark.edges
  // const currentTitle = data.markdownRemark.frontmatter.title
  // const currentIndex = posts
  //   .map(ele => {
  //     return ele.node.frontmatter.title
  //   })
  //   .indexOf(currentTitle)
  // let rightIndex = 0,
  //   leftIndex = 0,
  //   rightPath,
  //   leftPath
  // if (currentIndex === posts.length - 1) {
  //   rightIndex = -1
  //   leftIndex = currentIndex - 1
  // } else if (currentIndex === 0) {
  //   rightIndex = currentIndex + 1
  //   leftIndex = -1
  // } else {
  //   rightIndex = currentIndex + 1
  //   leftIndex = currentIndex - 1
  // }

  // rightIndex === -1
  //   ? (rightPath = '/')
  //   : (rightPath = posts[rightIndex].node.fields.slug)
  // leftIndex === -1
  //   ? (leftPath = '/')
  //   : (leftPath = posts[leftIndex].node.fields.slug)
  // const currentColor = currentIndex +1
  // const asdf = "color-"+currentColor
  //<NavButton path={leftPath} position="left" text="Left" style={currentIndex+1}/>
  //<NavButton path={rightPath} position="right" text="Right" style={currentIndex+1} />
  return (
    <div className="card color-0">
      <h1>
        {props.title}
      </h1>
      <p>
        {props.sub}
      </p>
    </div>
  );
};
