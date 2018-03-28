import React from 'react'
import Link from 'gatsby-link'
import './navButton.css'
import { navigateTo } from 'gatsby-link'

export default props => {
  return (
    <a
      onClick={() => navigateTo(`${props.path}`)}
      className={`bttn ${props.position} color-${props.style}`}
    >
      {props.text}
    </a>
  )
}
