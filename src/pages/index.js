import React from 'react'
import {navigateTo} from 'gatsby-link'
import  './card.css'
const IndexPage = () => (
  <div >
    <h1>Idols</h1>
    <p>From bondage to freedom</p>
   
      <a onClick={ () => navigateTo('/parents')} className="bttn">Continue</a>
    
    <button className="phase-0 bttn" onClick={ () => navigateTo('/parents')}>Enter</button>   
  </div>
)

export default IndexPage
