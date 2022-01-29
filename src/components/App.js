import React from 'react';
import './WeatherApp.css'
import reactDOM from 'react-dom';
import Card from './Card';
import axios from 'axios';
import SearchBar from './SearchBar';
import Content from './Content';
import LocationButton from './LocationButton';
import 'react-toastify/dist/ReactToastify.css';
import weather from '../apis/weather';
import { toast, ToastContainer } from 'react-toastify';




const KEY = "ffc44228cc6a329afede43e24d918213";

const endpoints = [
 'https://api.openweathermap.org/data/2.5/weather?',
 'https://api.openweathermap.org/data/2.5/onecall?&exclude=current,minutely,hourly,alerts',
];

let forecast = [];
class App  extends React.Component{
  state={currentweather:[],ffforecast:[],time:"",errmsg:""}
  onsetlatlon = async (lat,lon)=>{
  const time=new Date().toLocaleTimeString();
  this.setState({time:time})
  const response = await axios.all(endpoints.map(endpoint=>axios.get(endpoint,{
    params:{
      lat:lat,
      lon:lon,
      units:'metric',
      appid:KEY,
        }  
     }),
  ));
  
forecast = response[1].data.daily.slice(1,7);
 this.setState({
      currentweather:response[0].data,
      ffforecast:forecast, 
    })
    console.log(this.state.ffforecast);
   forecast=[];
}

 
ontermsendRequest = async (term)=>{
 await axios.get(endpoints[0]+`q=${term}&units=metric&appid=${KEY}`).then(response=>{
  this.setState({
    currentweather:response.data
  })
}).catch(err=>{
 if(err){
   toast.error("Type City Name correctly ")
 }
})
}

renderconditional(props){
if(props.weather.length<=0){
return <Content/>
}
const src="http://openweathermap.org/img/wn/"+props.weather.weather[0].icon +".png";
return<>
<Content ffforecast = {props.ffforecast} src={src}temp={props.weather.main.temp} temp_min={props.weather.main.temp_min} temp_max={props.weather.main.temp_max} country={props.weather.sys.country} city={props.weather.name} description={props.weather.weather[0].description} />
<ToastContainer/>
</>
} 


  render(){
    return(
      <div>
        <SearchBar onTermsearch={this.ontermsendRequest} ongetmylatlon={this.onsetlatlon}/>
     
       <this.renderconditional ffforecast = {this.state.ffforecast} weather={this.state.currentweather} time={this.state.time}/>
      </div>

    )
  }

  }

export default App;