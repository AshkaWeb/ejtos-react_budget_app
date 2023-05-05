import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const divStyle = {
        transform: `translate3d(0px, 44px, 0px)`,
        backgroundColor: '#fff3cd',
        width: '100%',
        border: '0'
    }

    const changeCurrency = (val) => {

        dispatch({
            type: "CHG_CURRENCY",
            payload: val
        });
    }

    return (
        <div className='alert alert-warning'> 
              <button type="button" class="p-0 border-0 btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency {currency}
                </button>
                <ul class="dropdown-menu" style={divStyle}>
                    <li><a class="dropdown-item" href="#" id="£" onClick={event=>changeCurrency(event.target.id)}>£ Pound</a></li>
                    <li><a class="dropdown-item" href="#" id="₹" onClick={event=>changeCurrency(event.target.id)}>₹ Ruppee</a></li>
                    <li><a class="dropdown-item" href="#" id="€" onClick={event=>changeCurrency(event.target.id)}>€ Euro</a></li>
                    <li><a class="dropdown-item" href="#" id="$" onClick={event=>changeCurrency(event.target.id)}>$ Dollar</a></li>
                </ul>
        </div>
    );
}

export default Currency;