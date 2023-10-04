import React from 'react'

import DocsTypeCard from '../Components/DocsTypeCard/DocsTypeCard'

const DocsTypePage = () => {
  return (
    <div>
      <div className="text-container">
            <p className="text-text">
                Culpa ullamco reprehenderit commodo do aute deserunt ipsum irure esse deserunt minim dolor non. Laboris sint incididunt ea veniam dolor ad ipsum laboris mollit exercitation occaecat ea. Sint nisi culpa minim laboris occaecat pariatur consequat magna quis. Ipsum sit eu qui fugiat officia ipsum velit est in exercitation do deserunt. Adipisicing esse consectetur sit in aliquip mollit veniam. Non anim officia reprehenderit ipsum exercitation. Dolore consequat eiusmod magna ipsum sit Lorem fugiat ut elit nulla.
            </p>
        </div>
        <div className="docs-card_container">
            <DocsTypeCard visa="F-4" />    
            <DocsTypeCard visa="H-2" />    
            <DocsTypeCard visa="F-1" />    
            <DocsTypeCard visa="F-5" />    
        </div>


    </div>
  )
}

export default DocsTypePage
