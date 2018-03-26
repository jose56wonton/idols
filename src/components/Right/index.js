import React from 'react'
import Link from 'gatsby-link'

const Right = () => (
  <h2
    style={{
      margin: 0,
      position: 'fixed',
      top: '50%',
      right: '0%',
      transform: 'translate(0%, -50%)',
    }}
  >
    <Link
      to="/asdf"
      style={{
        color: 'black',
        textDecoration: 'none',
      }}
    >
      Right
    </Link>
  </h2>
)

export default Right
