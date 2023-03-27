import './Data.css';
import { useState } from 'react';

function Data(props) {
    const [DataOfUser, setDataOfUser] = useState(props.UserData);
    var count = props.UserData.length;

    function clearDataBtn() {
        setDataOfUser();
    }

    return (
        <div className='container'>
            <div className='headings'>
                <h2>user List</h2>
                <h3 className='counter'>{count}</h3>
            </div>
            {DataOfUser?.map((event, index) => {
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
            <button onClick={clearDataBtn}>Clear All</button>
        </div>
    );
}


export default Data;
