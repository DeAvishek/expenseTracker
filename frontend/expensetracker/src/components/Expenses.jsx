import React from 'react'
import axios from 'axios'
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
            <h1 className='text-center mb-4'>Expense List</h1>
            {Loading ? (<div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>):(
                <div className="table-responsive">
                <table className='table table-bordered table-hover'>

                </table>
            </div>
            )}
            
        </div>
    )
}

export default Expenses
