

import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


const mapStyles = {
  width: '100px',
  height: '90px',
};

    
   
function map()
{
    return (
    <div >
  <div>
    <Map google={this.props.google} 
    zoom={14}
    style={mapStyles}
    initialCenter={{ lat: 47.444, lng: -122.176}}
    >
       <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
      </div>
      
    </div>
    );
    }
 


   export default GoogleApiWrapper({
    apiKey: ('YOUR_API_KEY_HERE')
   })(Map);