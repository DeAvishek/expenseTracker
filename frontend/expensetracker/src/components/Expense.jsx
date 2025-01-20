import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWrench } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
import Alertbox from './Alertbox';
import { useNavigate } from 'react-router-dom'
// import Divalert from './Divalert';

const url = process.env.REACT_APP_URL_LINK
const Expense = ({ expenseData, index }) => {
    const [loading, setloading] = useState(true)
    const [formData, setformData] = useState({
        amount: expenseData.amount,
        category: expenseData.category,
        description: expenseData.description,
    })
    const [modalstatus, setmodalstatus] = useState(false)
    const navigate = useNavigate();
    const deleteExpense = async () => {
        try {
            const token = localStorage.getItem('bearerToken');
            const headers = {
                'bearer': `${token}`
            }
            const response = await axios.delete(`${url}/expense/deleteexpense/${expenseData._id}`, { headers })
            if (response.status === 200) {
                setloading(false)
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleModalClose = () => {
        setmodalstatus(false)
    }
    const handleModelopen = () => {
        setmodalstatus(true)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({ ...prev, [name]: value }))
    }

    const updateExpense = async () => {
        try {
            setloading(true)
            const token = localStorage.getItem('bearerToken')
            const headers = {
                'Content-Type': 'application/json',
                'bearer': `${token}`
            }
            const response = await axios.put(`${url}/expense/updateexpense/${expenseData._id}`, formData, { headers })
            if (response.status === 200) {
                setmodalstatus(false)
                setloading(false)
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <tr>
                <td id='row' className="text-center">{index + 1}</td>
                <td id='row' className="text-start">{expenseData.amount}</td>
                <td id='row' className="text-capitalize">{expenseData.category}</td>
                <td id='row'>{expenseData.description}</td>
                <td id='row' className="text-center">
                    {new Date(expenseData.date).toLocaleDateString()}
                </td>
                <td id='row' className='text-center'>
                    <FontAwesomeIcon onClick={deleteExpense} id="trash" className='mx-3' icon={faTrash} />
                    <FontAwesomeIcon onClick={handleModelopen} id="wrench" className='mx-3' icon={faWrench} />
                </td>
            </tr>
            {modalstatus && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <h5 className="modal-title">Update Expense</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleModalClose}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">
                                        Amount
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        className="form-control"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        className="form-control"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        className="form-control"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={updateExpense}
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleModalClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </>
    );
};

export default Expense;
