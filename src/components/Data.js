import './Data.css';
import { useState } from 'react';

function Data(props) {


    function clickOnBtn() {
        props.UserData.forEach(function (element, index) {
            console.log("d" + element, index)
            delete element.name;
        });


    }

    return (
        <div className='container'>
            <h2>user List</h2>
            {props.UserData.map((event, index) => {
                return (
                    <div className="data" key={index}>
                        <img src={event.image} />
                        <div className='box'>
                            <h3>{event.name}</h3>
                            <p>{event.age} years</p>
                        </div>
                    </div>
                );
            })}
            <button onClick={clickOnBtn}>Clear All</button>
        </div>
    );
}


export default Data;