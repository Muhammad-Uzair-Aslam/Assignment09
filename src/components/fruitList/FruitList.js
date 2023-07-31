import React from 'react'
import Button from '../button/Button'
export default function FruitList(props) {
  return (
    <div className="row mt-4">
          <div className="col-lg-8 col-sm-12">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Button title="Buy Now" backgroundcolor="black" color="white" width="120px" margin="3px" padding="15px" />
          </div>
          <div className="col-lg-4 col-sm-12 text-center mt-4">
            <img src={props.Img} height={props.height} width="200px" alt=""/>
          </div>
        </div>
  )
}
