import React, { Component } from 'react'
import AverageCard from './components/AverageCard'
import MapCard from './components/MapCard'
import LastMessage from './components/LastMessage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadCounter } from '../../modules/sockets/counterReducer'
import { loadAverage } from '../../modules/sockets/averageReducer'
import { loadLastMessage } from '../../modules/sockets/lastMessageReducer'
import { loadCountrys } from '../../modules/sockets/countrysReducer'
import { loadToday } from '../../modules/sockets/todayReducer'
import { loadSocket } from '../../modules/socketRequest/socketAction'

import './home.css'

export class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        width: 450,
        height: 300
      }
      this.card = React.createRef();
      this.mountAverageSection = this.mountAverageSection.bind(this)
      this.mountMapSection = this.mountMapSection.bind(this)
      this.mountLastMessageSection = this.mountLastMessageSection.bind(this)
      this.loadAllSockets = this.loadAllSockets.bind(this)
    }

    loadAllSockets() {
      this.props.loadSocket()
      this.props.loadCounter()
      this.props.loadAverage()
      this.props.loadLastMessage()
      this.props.loadCountrys()
      this.props.loadToday()
    }

    componentDidMount() {
      this.loadAllSockets()
      this.setState({width: this.card.current.clientWidth - 25})
    }

    mountAverageSection(){
      const {
        count: { count },
        average: { amountBuy, amountSell },
        countrys: { countrys },
        today: {
          count: countToday,
          average: {
            amountBuy: amountBuyToday,
            amountSell: amountSellToday
          },
          countrys: countrysToday
        }
      } = this.props

      const { width, height} = this.state

      return (
        <div className="row mb-2">
          <AverageCard
            title="Average Requests (All)"
            count={count}
            amountBuy={amountBuy}
            amountSell={amountSell}
            countrys={countrys}
            width={width}
            height={height} />

          <AverageCard
            title="Average Requests (Today)"
            count={countToday}
            amountBuy={amountBuyToday}
            amountSell={amountSellToday}
            countrys={countrysToday} />
        </div>
      )
    }

    mountMapSection() {
      const {
        countrys: { countrys },
        today: { countrys: todayCountrys }
      } = this.props
      const { width, height} = this.state

      return(
        <div className="row mb-2">
          <MapCard
            refe={this.card}
            title="Country by Requests (All)"
            countrys={countrys}
            width={width}
            height={height} />

          <MapCard
            title="Country by Requests (Today)"
            countrys={todayCountrys}
            width={width}
            height={height} />
        </div>
      )
    }

    mountLastMessageSection() {
      const { lastMessage } = this.props
      return (
        <div className="row mb-2">
          <LastMessage
          title="Body the Last Request"
          lastMessage={lastMessage} />
        </div>
      )
    }

    render() {
      return (
        <div className="home">
          {this.mountAverageSection()}
          {this.mountMapSection()}
          {this.mountLastMessageSection()}
      </div>
      )
    }
}

export const mapStateToProps = ({ count, average, lastMessage, countrys, today }) => ({
  count,
  average,
  lastMessage,
  countrys,
  today
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCounter,
      loadAverage,
      loadLastMessage,
      loadCountrys,
      loadToday,
      loadSocket
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
