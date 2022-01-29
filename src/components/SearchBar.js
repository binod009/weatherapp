  import React from 'react';
  import LocationButton from './LocationButton';
  import Erroralert from './Erroralert';
class SearchBar extends React.Component{
  state={searchcity:"",errmsg:""}

  onInputchange=(event)=>{
    this.setState({searchcity:event.target.value})
  }
  onFormsubmit=(event)=>{
    event.preventDefault();
    this.props.onTermsearch(this.state.searchcity);
  }
errcapture=(msg)=>{
this.setState({errmsg:msg});
}
render(){
return(
<div className="search-bar">
<div><label>Enter City or country</label></div>
  <div className="ui input focus">
  <form onSubmit={this.onFormsubmit}>
         <input className="inpt" value={this.state.searchcity} type="text" onChange={this.onInputchange}/>
         <button className="searchbtn" type="submit">Search</button>
  </form>
        <LocationButton errcapture ={this.errcapture} ongetmylatlon={this.props.ongetmylatlon}/>
    </div>
 
   
    </div>
)
}


  }
  export default SearchBar;