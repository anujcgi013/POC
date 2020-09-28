import React from 'react';

function nameTag(props){
    return( 
        <div className="customStyle">
    <h3 style={props.style}>First Name:{props.firstName}</h3>
    <h3 style={props.style}>Last Name:{props.lastname}</h3>
    </div>
    )
}
export default nameTag;
