import React from 'react';
import './index.css';

function ShowComment(props) {
    return(
        <div className = 'comment'>
                <span> {props.content} </span>
        </div>
    )
}

export default ShowComment;