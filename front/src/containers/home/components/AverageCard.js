import React from 'react'
import Card from '../../components/card/Card'

const AverageCard = (props) => {
  const { amountBuy: buy, amountSell: sell, count, title, countrys } = props
  const amountSell = parseFloat(sell).toFixed(2)
  const amountBuy = parseFloat(buy).toFixed(2)
  return (
    <div className="col-12 col-md-6 mx-0 px-1">
      <Card>
        <div className="row mb-3 ml-1">
          <h5>{title}</h5>
        </div>
        <div className="row text-center mb-2">
          <div className="col-md-12 text-center">
            <h6>Total Requests</h6>
          </div>
          <div className="col-md-12 text-center">
            <h5>{count}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 text-center">
            <div className="row">
              <h6 className="col-md-12">Amount Sell</h6>
            </div>
            <div className="row">
              <h5 className="col-md-12">{!isNaN(amountSell) ? amountSell : '0.00'}</h5>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 text-center">
            <div className="row">
              <h6 className="col-md-12">Amount Buy</h6>
            </div>
            <div className="row">
              <h5 className="col-md-12">{!isNaN(amountBuy) ? amountBuy : '0.00'}</h5>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 text-center px-0">
            <div className="row">
              <h6 className="col-md-12">Number of Countrys</h6>
            </div>
            <div className="row">
              <h5 className="col-md-12">{countrys.length}</h5>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AverageCard
