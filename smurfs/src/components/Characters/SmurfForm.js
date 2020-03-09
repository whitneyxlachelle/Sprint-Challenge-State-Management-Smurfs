import React, { useState, useContext } from 'react';
import SmurfContext from '../../contexts/SmurfContext';

const SmurfForm = () => {
    const { addSmurf } = useContext(SmurfContext);

    const [newCharacter, setNewCharacter] = useState({});

    const handleChange = event => {
        setNewCharacter({
            ...newCharacter,
            [event.target.name]: event.target.value
        });
    };

    const handleSumbit = event => {
        event.preventDefault();
        addSmurf(newCharacter);
    };
    return (
        <div className="form">
            <form>
                <label>Name:</label>
                <input
                    name="name"
                    type="type"
                    placeholder="Name..."
                    onChange={handleChange}
                />
                <label>Age:</label>
                <input
                    name="age"
                    type="type"
                    placeholder="Age..."
                    onChange={handleChange}
                />
                <label>Height:</label>
                <input
                    name="Height"
                    type="type"
                    placeholder="Height..."
                    onChange={handleChange}
                />

                <button className="button" onClick={handleSumbit}>New Smurf!</button>
            </form>
        </div>
    );
};

export default SmurfForm;