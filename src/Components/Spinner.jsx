import React from 'react';
import "./Spinner.styles.css";
let Spinner=()=>
{
    return <div>
        <div className="container1">
            <div className="flex">
                <div className="loader"></div>
                <div className="load-text">Loading ..........</div>

            </div>
        </div>
    </div>;
};
 
export default Spinner;