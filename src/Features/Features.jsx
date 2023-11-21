import React from 'react'

export const Features = (props) => {

    const {id, name, image, description} = props.data; 

  return (
    <div className = "featureitems">
        <img src = {image}/>
        <p>{description}</p>
    </div>
  )
}
