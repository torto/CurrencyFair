import React from 'react'
import Card from '../../components/card/Card'

const LastMessage = ({refe, title, lastMessage}) => {
  return (
    <div ref={refe} className="col-12 mx-0 px-1">
      <Card>
        <div className="row mb-3 ml-1">
          <h5>{title}</h5>
        </div>
        <div className="row">
          <pre>
            {JSON.stringify(lastMessage, null, 2)}
          </pre>
        </div>
      </Card>
    </div>
  )
}

export default LastMessage
