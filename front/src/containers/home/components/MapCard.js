import React from 'react'
import Card from '../../components/card/Card'
import Map, {scaleColor} from './Map/Map'
import countries from 'i18n-iso-countries'
import allCountry from 'i18n-iso-countries/langs/en.json'

const MapCard = (props) => {
  const { countrys, refe, title, width, height } = props
  countries.registerLocale(allCountry);
  const color = scaleColor(countrys)
  const mountListCountrys = () => countrys.sort((a, b) => a.value - b.value)
  .map((item, i) => (
    <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
      {countries.getNames('en')[item.key]}
      <span style={{'backgroundColor': color(item.value) }} className="badge badge-pill text-white">
        {item.value}
      </span>
    </li>))

  const listEmpty = () => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      No Values
    </li>)

  return (
    <div ref={refe} className="col-12 col-md-6 mx-0 px-1">
      <Card>
        <div className="row mb-3 ml-1">
          <h5>{title}</h5>
        </div>
        <div className="row">
          <Map width={width} height={height} countrys={countrys}/>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="list-group list-group-flush list-map-card">
              {!countrys.length && listEmpty()}
              {!!countrys.length && mountListCountrys()}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MapCard
