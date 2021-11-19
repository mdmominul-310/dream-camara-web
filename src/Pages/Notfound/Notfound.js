import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="bg-dark not-found">
            <div className="not-found-wrapper">
                <h1 className="text-light text-center"> <span>404 </span>Page Not Found!</h1>
                <NavLink to="/home">Back to home page?</NavLink>
            </div>



        </div>
    );
};

export default Notfound;