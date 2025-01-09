import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faWrench } from '@fortawesome/free-solid-svg-icons';
const Expense = ({ expenseData, index }) => {
    return (
        <tr>
            <td id='row'className="text-center">{index + 1}</td>
            <td id='row'className="text-start">{expenseData.amount}</td>
            <td id='row'className="text-capitalize">{expenseData.category}</td>
            <td id='row'>{expenseData.description}</td>
            <td id='row'className="text-center">
                {new Date(expenseData.date).toLocaleDateString()}
            </td>
            <td id='row'className='text-center'>
                <FontAwesomeIcon id="trash" className='mx-3'icon={faTrash} />
                <FontAwesomeIcon id="wrench"className='mx-3' icon={faWrench} />
            </td>
        </tr>
    );
};

export default Expense;
