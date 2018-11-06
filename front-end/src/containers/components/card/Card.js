import React from 'react'

const Card = (props) => {
  const className = props.className ? `card ${props.className}` : 'card'
  return (<div className={className}>
      <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.children}
        </div>
    </div>
  )
}

export default Card
