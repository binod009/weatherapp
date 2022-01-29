import React from 'react'
import './WeatherApp.css'

function getday(data){
 if(data){
const today = new Date(data.dt * 1000).toLocaleDateString("en", {
    weekday: "long",
});
return today;
}

}
function getdate(data){
if(data){
 const date = new Date(data.dt * 1000).toLocaleDateString();
        return date;
    }
}
function getsrc(data){
    const src = "http://openweathermap.org/img/wn/"+data.weather[0].icon +".png";
    return src;
    
}
const NewCard = props =>{
    return(
        <>
        <div className='container'>
        <div className="container-weather">
             <div className="ddp-container">
             <br/>
            <span style={{fontSize:"25px",fontWeight:"bold",color:"#e65965",fontFamily:"serif"}}>{props.nextday!==undefined ? getday(props.nextday): props.day}</span><br/>
           <span style={{fontSize:"18px",color:"#34495E",fontFamily:"Georgia"}}>Date:{props.nextday!==undefined ? getdate(props.nextday): props.date}</span>
       <hr/>
             <span style={{fontSize:"22px",color:"#b2abff",fontFamily:"serif",margin:"10px",lineHeight:"20px"}}>Feels_Like: {props.nextday!==undefined ? props.nextday.feels_like.day : '**'}℃</span>
            </div><br/>
            <div className="imagetemp-container">
               <div><img width="50px" height="50px" src={props.nextday!==undefined?getsrc(props.nextday):props.icon} alt="weather-icon"/></div>
                <span style={{color:"#e65965"}}><h1>{props.nextday!==undefined ? props.nextday.temp.day: props.day}℃</h1></span>
                <span style={{fontFamily:"sans-seri",fontSize:"20px",color:"#DC7633"}}><p>{props.nextday!==undefined ? props.nextday.weather[0].description : props.description}</p></span>
            </div> 
            
        </div>
        </div>
        </>
    )
}
NewCard.defaultProps = {
    today:"***",
    description:"----",
    date:"-/--/-",
    day:'*',
    icon:'http://openweathermap.org/img/wn/01d.png',


}
export default NewCard;
