import React from 'react'
import {scaleQuantize} from '@vx/scale'
import { schemeAccent } from 'd3-scale-chromatic';
import {Mercator} from '@vx/geo'
import * as topojson from 'topojson-client'
import topology from './world-topo.json'
import parseCountry from 'i18n-iso-countries'

export function scaleColor (countrys) {
  const valuesCountrys = countrys.map(item => item.value)
  return scaleQuantize({
    domain: [
      Math.min(...valuesCountrys),
      Math.max(...valuesCountrys)
    ],
    range: schemeAccent
  })
}

const Map = ({
  width,
  height,
  events=false,
  countrys
}) => {

  const world = topojson.feature(topology, topology.objects.units)
  let objectCountry = {}
  for (var i = 0; i < countrys.length; i++) {
    objectCountry[countrys[i].key] = countrys[i].value
  }

  const color = scaleColor(countrys)
  return (
    <svg width ={width} height ={height} className="ml-1">
    <rect x={0} y={0} width={width} height={height} fill={`#A1D8FF`} rx={5} />

      <Mercator data={world.features}
        scale={width / 630 * 100}
        translate={[width / 2, height / 2 + 50]}
        fill={feature => {
          const valueItem = objectCountry[parseCountry.alpha3ToAlpha2(feature.id)]
          const colorValue = color(valueItem)
          if(!colorValue) return '#E7E7E7'
          return colorValue
        }}
        stroke={() => '#D4D4D4'}
      />
    </svg>)
}

export default Map
