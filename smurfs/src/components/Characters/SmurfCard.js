import React from 'react'; 

const SmurfCard = props => {
    console.log(props);
    return (
        <div>
            <h1>{props.blue.name}</h1>
            <h2>{props.blue.age}</h2>
            <h3>{props.blue.height}</h3>
        </div>
    );
};

export default SmurfCard;