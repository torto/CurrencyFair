import React, { Component } from 'react'
import Card from '../components/card/Card'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';

import { getList } from '../../modules/listRequest/listAction'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import './allRequests.css'

export class AllRequests extends Component {
    constructor(props) {
      super(props)
      this.state = {
        list: []
      }
    }

    componentDidMount() {
      this.props.getList()
    }

    render() {
      const columns = [{
        dataField: 'userId',
        text: 'User ID',
        sort: true,
        filter: numberFilter()
      }, {
        dataField: 'originatingCountry',
        text: 'Originating Country',
        sort: true,
        filter: textFilter()
      }, {
        dataField: 'currencyFrom',
        text: 'Currency From',
        sort: true,
        filter: textFilter()
      }, {
        dataField: 'currencyTo',
        text: 'Currency To',
        sort: true,
        filter: textFilter()
      }, {
        dataField: 'amountBuy',
        text: 'Amount Buy',
        sort: true,
        filter: numberFilter()
      }, {
        dataField: 'amountSell',
        text: 'Currency Sell',
        sort: true,
        filter: numberFilter()
      }, {
        dataField: 'rate',
        text: 'Rate',
        sort: true,
        filter: numberFilter()
      }, {
        dataField: 'timePlaced',
        text: 'Time Placed',
        sort: true,
        filter: textFilter()
      }]
      return (
        <div className="home">
        <div className="row mb-2">
          <Card className="col-12" title="List All Requests">
            <BootstrapTable
              keyField='index'
              data={ this.props.list.data.map((item, index) => {
                item['index'] = index
                return item
              }) }
              columns={ columns }
              pagination={ paginationFactory() }
              filter={ filterFactory() }/>
          </Card>

        </div>
      </div>
      )
    }
}

export const mapStateToProps = ({ list }) => ({
  list
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getList
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRequests)
