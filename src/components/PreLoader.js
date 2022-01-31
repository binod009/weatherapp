import react  from "react";
import ReactLoading from 'react-loading';
const PreLoader = ()=>{
    return(
        <div className="loading">
         <ReactLoading type={"balls"} color={"orange"} height={'20%'} width={'20%'} />
        </div>
    )
}
export default PreLoader;