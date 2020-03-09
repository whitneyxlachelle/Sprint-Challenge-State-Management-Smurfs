import React, { useContext } from 'react';

import SmurfCard from './SmurfCard';
import SmurfContext from '../../contexts/SmurfContext';

const SmurfList = () => {
    const smurf = useContext(SmurfContext);

    return (
        <div className="smurf-list">
            {smurf.map(blue => (
                <SmurfCard key={blue.id} blue={blue} />
            ))}
        </div>
    );
};

export default SmurfList;