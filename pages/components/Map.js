import React from 'react'
import { useEffect } from 'react';
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FybW8xMSIsImEiOiJjbGJtYjYxNnEwZmhhM290ZHA0dmZydWxlIn0.hpJ0KSIfHNtkUtlZNDBFDg';

const Map = () => {


    useEffect(() => {
        const map = new mapboxgl.Map({
         container : "map",
         style :'mapbox://styles/mapbox/streets-v12',
         center : [-99.29011,39.39172],
         zoom :3,
      })
    })
    

  return <Wrapper id = 'map'></Wrapper>
  
}

export default Map

const Wrapper = tw.div`
flex-1
`