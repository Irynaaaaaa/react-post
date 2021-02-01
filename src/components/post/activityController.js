import React from 'react';
import './index.css'

function ShowIcons(props) {
    return(
        
        <div className = 'icon'>
            <img className = 'im'src = {props.icon}/>
            <span className = 'iconSpan'>{props.amount}</span>
        </div>
    )
}
export default ShowIcons;