import React from 'react'
import Link from 'gatsby-link'

const Left = () => (
  <h2 style={{ margin: 0 }}>
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
