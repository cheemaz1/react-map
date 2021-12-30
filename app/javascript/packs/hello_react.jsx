// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { withScriptjs } from "@react-google-maps/api";

const instruction = []
const distonce = []

const Hello = props => {
  const directionsService = new google.maps.DirectionsService();
  const value = []
  const address = props.appointments.address
  const destination = props.appointments.destination


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
      // console.log(dir);
      // console.log(dir.length);
      for (let i = 0; i < dir.length; i++) {
        distonce.push(dir[i].distance)
        instruction.push(dir[i].instructions)
      }
      // console.log(distonce)
      // console.log(instruction)
    }
  )
  // debugger;
  return (
    <div>
      Hello {props.appointments.email}!
      
        {/* <button type="click" onClick={console.log(instruction)}>Find Directions</button> */}
        <p>
          {/* {console.log(distonce)} */}
        </p>
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
        {/* <button type="click" onClick={console.log(instruction)}>Find Directions</button> */}
        {/* <li>{distonce.forEach(ele => ele.toString())}</li> */}
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
