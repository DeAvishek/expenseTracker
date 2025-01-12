import React from 'react'
import axios from 'axios'
import Expense from './Expense'
import { useState, useEffect } from 'react'
const url = process.env.REACT_APP_URL_LINK
const Expenses = () => {
    const [Loading, setLoading] = useState(false)
    const [expenseData, setexpenseData] = useState([])
    const getData = async () => {
        try {
            setLoading(true)
            const token = localStorage.getItem('bearerToken');
            const headers = {
                'bearer': `${token}`
            }
            const response = await axios.get(`${url}/expense/allexpenses`, { headers })
            if (response.status === 400) {
                console.log("user not found")
            }
            else if (response.status === 200) {
                console.log("Expense feched successfully")
                setexpenseData(response.data)
                console.log(expenseData)
            } else if (response.status === 204) {
                console.log("No expense found")
            }
            else {
                console.log("Internal server error")
            }
        } catch (error) {
            console.oog(error.data)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="container my-4">
            <h1 className='text-center mb-4 text-black'>Expense List</h1>
            {Loading ? (<div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>) : (
                <div className="table-responsive">
                    <table className='table table-bordered table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th className="text-center">Date</th>
                                <th className="text-center">Manupulate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseData.length > 0 ? (
                                expenseData.map((expense, index) => (
                                    <Expense key={expense._id} expenseData={expense} index={index} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No expenses found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}


export default Expenses
