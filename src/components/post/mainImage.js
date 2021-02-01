import React from 'react';
import './index.css'


function ShowMainImage(props) {
    return(
        <img className = 'cimage' src = {props.image}/>
    )
    
}
export default ShowMainImage;