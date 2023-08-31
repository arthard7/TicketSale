import React from 'react';
import {Link} from "react-router-dom";


const EmptyCart: React.FC = () => {
    return (
        <div className='cart cart--empty'>
            <h2> Empty Cart </h2>
            <p>
                You didn't but any tickets.<br/>
                For that you need to return for main page
            </p>

            <Link to='/' className='button button--black'>
                <span> Come back </span>
            </Link>
        </div>
    );
};

export default EmptyCart;