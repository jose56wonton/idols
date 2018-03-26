import React from 'react'
import {navigateTo} from 'gatsby-link'
import  './card.css'
const IndexPage = () => (
  <div className="card card-0" onClick={ () => navigateTo('/parents')}>
    <h1>Idols</h1>
    <p>From bondage to freedom</p>    
  </div>
)

export default IndexPage
