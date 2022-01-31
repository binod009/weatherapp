import React from 'react';
import './WeatherApp.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LocationButton=(props)=>{

const getMylocation=()=>{
        window.navigator.geolocation.getCurrentPosition(
        position=>{
          props.ongetmylatlon(position.coords.latitude,position.coords.longitude)
           },
          err=>{
            console.log(err);
          }
          )}
return( 
  <>
   <button onClick={getMylocation} className="btn"><i className="fa fa-map-marker"></i></button>         
  <ToastContainer/>
  </>
   )
}
export default LocationButton;