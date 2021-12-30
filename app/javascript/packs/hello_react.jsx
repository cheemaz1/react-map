// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { withScriptjs } from "@react-google-maps/api";

const instruction = []
const distonce = []
const total_time = []
const total_distance = []
const lng = []
const ltd = []
const longitude2 = []
const latitude2 = []
const destination = []

const Hello = props => {
  debugger;
  const directionsService = new google.maps.DirectionsService();
  const value = []
  const address = props.appointments.address
  destination.push(props.appointments.destination)
  lng.push(props.appointments.longitude)
  ltd.push(props.appointments.latitude)
  
  // ${ document.getElementById("myInput").value }
  // debugger;
  directionsService.route(
    {
      origin: `${address}`,
      destination: `${destination}`,
      travelMode: "DRIVING"
    },
    (response, status) => {
      console.log(response);
      var dir = response.routes[0].legs[0].steps
      total_time.push(response.routes[0].legs[0].duration.text)
      total_distance.push(response.routes[0].legs[0].distance.text)
      // console.log(dir);
      // console.log(dir.length);
      for (let i = 0; i < dir.length; i++) {
        distonce.push(dir[i].distance)
        instruction.push(dir[i].instructions)
      }
      console.log(distonce)
      console.log(instruction)
      console.log(total_distance)
    }
  )
  // debugger;
  var greeting = props.appointments.email.split('@')
  return (
    <div>
    <div className="greeting">
      Hello {greeting[0]}!
      
        {/* <button type="click" onClick={console.log(instruction)}>Find Directions</button> */}
    </div>

        <p className="info_dir">Please edit your profile and add an address to find directions</p>
    </div>
    
  )
}
const Mapp = props => {
  
  for (let z = 0; z < instruction.length; z++) {
    // var elem = document.createElement('li');
    var elem = document.body.appendChild(document.createElement('li'));
    elem.innerHTML = instruction[z] + " for " + distonce[z].text;
  }
  return (
    <div>
  
        <div className="duration">Total  Distance of the trip: {total_distance[0]}</div>
        <div className="duration">Total  Duration of the trip: {total_time[0]}</div>
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

window.addEventListener('load', function () {
  ReactDOM.render(
    <Mapp />,
    document.body.appendChild(document.createElement('div')),
  )
})
