import React from 'react'

export default function HeadingAndDescription(props) {
  return (
    <div className="container text-center mt-5 ">
        <div className="row mt-4">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
    </div>
  )
}
