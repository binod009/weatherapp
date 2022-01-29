import React from 'react';
import './WeatherApp.css'


const weathericon = [{
Sunny:{
src:"./weatericon/sunny.png"
},
Clouds:{
  src:"./weatericon/cloud.png"
},
Rain:{
  src:"./weatericon/rain.png"
},
Clear:{
  src:"./weatericon/clearday.png"
},
Clearnight:{
src:"./weathericon/clearnight.png"
},
ClearDay:{
  src:"./weathericon/clearday.png"
}
}
]
console.log(weathericon[0].Sunny.src);

const time= new Date().toLocaleTimeString();
class Card extends React.Component{
  state  = {city:"",lat:"",lon:""}

  onFormSubmit=(event)=>{
   event.preventDefault();
   console.log('iam submitted');
   this.state.city === "" ? this.props.onLocationSubmit(this.state.lat,this.state.lon) : 
   this.props.onFormSubmit(this.state.city);
  
    }
 onInputchange=(event)=>{
  this.setState({city:event.target.value})
 }
 getMylocation =()=>{
  window.navigator.geolocation.getCurrentPosition(
  position=>{
    this.setState({
      lat:position.coords.latitude,
      lon:position.coords.longitude
    })
    },
    err=>console.log(err));
}
render(){

    return(
      <div>
          <button className="geolocation" onClick={this.getMylocation}><i class="map marker alternate icon"></i></button>
<form onSubmit={this.onFormSubmit}>
<div className="item-container">
        <div className="left-container">
            <div className="input-group">
            <div className="ui icon input">
            <i className="search icon"></i>
            <input style={{borderRadius:'5px'}}type="text" value={this.state.city}  onChange={this.onInputchange} placeholder="Enter city"/>
            </div>
            
            </div>
         
            <hr/>
            <div className="title">
            <h1 className="weather-title">Weather Details</h1>
           </div>
            <div className="weather-details">
         <div className="details-item">
          <div className="details-title">
            <div>Wind :</div>
            <div>Himudity :</div>
            <div>Cloud :</div>
            <div>Feels like:</div>
          </div>
          <div className="details-title-value">
             <div>{this.props.wind}</div>
             <div>{this.props.humidity}</div>
             <div>{this.props.cloud}</div>
             <div>{this.props.feels}</div>
            </div>
         </div>
         </div>
    </div>
           
  <div className="right-container">
 <div className="temp-container">
     <div className="temp-value">
          <div><h1>{this.props.temp}</h1></div>
     </div>
      
      <div className="location-timedate">
        <div className="location-text">{this.props.counryname},<span style={{color:'yellow'}}>{this.props.name}</span></div>
        <div className="location-text2">{} {this.props.day} {this.props.date}</div> 
   
      </div>
      <div className="icon-text">
        <div><img src="./weathericon.sunny.png" alt="icon"/></div> 
        <div>{this.props.main}</div>
      </div>


            </div>

            </div>
            
</div>
  </form> 
  </div>
        )
    }
}

Card.defaultProps = {
  humidity: "75%",
  cloud: "12%",
  wind: "1km/h",
  feels: "",
  countryname: "Nepal",
  time: "00:00:00",
  day: "Saturday",
  date: new Date().toLocaleDateString(),
  main: "sunny",
  name:'Kathmandu'
}
export default Card;