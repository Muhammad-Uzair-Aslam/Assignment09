import React from 'react'

export default function Button(props) {
    return (
        <button
            className="btn btn-warning button-nav"
            style={{backgroundColor:props.backgroundcolor,color:props.color,width:props.width,margin:props.margin,padding:props.padding}}
        >
            {props.title}
        </button>
    )
}

