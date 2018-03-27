import React from 'react'
import Link from 'gatsby-link'
import './navButton.css'
import { navigateTo } from 'gatsby-link'

export default props => {
  console.log(props.path)
  return (
    <a
      onClick={() => navigateTo(`${props.path}`)}
      className={`bttn ${props.position}`}
    >
      {props.text}
    </a>
  )
}
