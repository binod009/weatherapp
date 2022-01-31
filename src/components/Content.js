import React from 'react';
import './WeatherApp.css'
import Tabldata from './Tabledata';
import NewCard from './NewCard';
const Content=(props)=>{
       return(
        <>
        <div className="wrapper-container">
            <div className="wrapper-div">
                <div className="weatherimage">
                    <img width="60px" height="60px" alt="weather icon"src={props.src}/>
                <span style={{color:"white",fontSize:"22px",fontWeight:"bold"}}>{props.description}</span>
                    </div>
               <div className="temp-location">
                   <span style={{fontSize:"38px"}}>{props.temp}℃</span>
                   <span style={{fontSize:"30px",padding:"5px",fontFamily:"sans-serif"}}>{props.city},</span>
                   <span style={{fontSize:"35px",fontFamily:"sans-serif",fontWeight:"bold",lineHeight:"35px"}}>{props.country}</span>
            </div>
           <div className="flex-sunriseset">
            <div style={{fontSize:"20px",color:"white",fontWeight:"bold",fontFamily:"monospace"}}>Temp_min:<span style={{color:"#73c2fb",fontSize:"18px"}}>{props.temp_min}℃</span></div>
            {/* <p style={{color:"#F7E985",fontSize:"18px",textAlign:"center"}}>{props.temp_min}</p> */}
           <div style={{fontSize:"20px",color:"white",fontWeight:"bold",fontFamily:"monospace"}}>Temp_max:<span style={{color:"#73c2fb",fontSize:"18px"}}>{props.temp_max}℃</span></div>
           {/* <p style={{color:"#DC5200",fontSize:"18px",textAlign:"center"}}>{props.temp_max}</p></div> */}
           </div>
           
            
            </div>
           
        </div>
            <br/>

<div className="weather-container">
    {
     props.ffforecast !==undefined   ? props.ffforecast.map((item,index)=>{
        return <NewCard key={index} nextday={item}/>
    }) : <NewCard />
  
    }
    
  
  
    
    
    

    

</div>
</>
 )

}
Content.defaultProps= {
    city:"Dhankuta",
    description:"Feels good",
    country:"Nepal",
    temp:"18",
    day:"Haze",
    src:"http://openweathermap.org/img/wn/01d.png",
    sunrise:"00:00:00",
    sunset:"00:00:00",
    temp_min:"--",
    temp_max:"--"

}

export default Content;