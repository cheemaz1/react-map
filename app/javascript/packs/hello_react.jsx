// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { withScriptjs } from "@react-google-maps/api";
import Map from './../component/map.js';


const Hello = props => {
  const MapLoader = withScriptjs(Map);
  debugger;
  return (
    <div>
      Hello {props.appointments.email}!
        <MapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU"
        loadingElement={<div style={{ height: `100%` }} />}
        />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('appointments_data')
  const data = JSON.parse(node.getAttribute('data'))  
  // const data = node.getAttribute('data') 
  ReactDOM.render(
    <Hello appointments={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})

