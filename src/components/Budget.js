
import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Budget = () => {
   
    const {dispatch, budget, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const updateBudget = (cost) => {

        const newBudget = parseInt(cost);

        if(cost > 20000) {
            alert("The value cannot exceed £20,000");
            return;
        }

        if(cost < totalExpenses) {
            alert("The value cannot be lower than your expenses");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input 
                    required="required" 
                    type="number" 
                    id="budget" 
                    value={budget}
                    step="10"
                    max="20000"
                    style={{ size: 10}}
                    onChange={(event) => updateBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;