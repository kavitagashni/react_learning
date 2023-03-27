import './Data.css';
import { useState } from 'react';

function Data(props) {
    const [DataOfUser, setDataOfUser] = useState(props.UserData);
    const [Counter, setCounter]= useState(props.UserData.length)
   

    function clickOnBtn() {
        setDataOfUser([]);
        setCount(0)
    }

    return (
        <div className='container'>
            <div className='headings'>
                <h2>user List</h2>
                <h3 className='counter'>{Counter}</h3>
            </div>
            {DataOfUser?.map((event, index) => {
                console.log("event" + event)
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
