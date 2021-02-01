import React from 'react';
import './index.css'

function ShowAvatar(props) {
    return(
        <div className = 'image'>
                <img className = 'aimage' src = {props.image}/>
            </div>
    )
}
export default ShowAvatar;