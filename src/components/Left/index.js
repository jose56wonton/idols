import React from 'react'
import Link from 'gatsby-link'

const Left = () => (
  <h2
    style={{
      margin: 0,
      position: 'fixed',
      top: '50%',
      transform: 'translate(0%, -50%)',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'black',
        textDecoration: 'none',
      }}
    >
      Left
    </Link>
  </h2>
)

export default Left
