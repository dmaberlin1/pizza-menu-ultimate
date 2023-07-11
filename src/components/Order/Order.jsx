import React from 'react';

const Order= ({isOpen}) => {
    switch (isOpen) {
        case true : return (<p>
            We're currently open
        </p>)
        case false: return  (<p>
            Sorry we're closed
        </p>)
        default: return (
            <p>
                Sorry we're closed
            </p>
        )
    }

};

export default Order;
