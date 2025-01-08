import React from 'react'
import {useSelector } from 'react-redux'
import Input from './Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from './Button'
const url = process.env.REACT_APP_URL_LINK;
const Expenseform = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setloading] = useState(false)
    const user = useSelector((state) => state.userData)
    const createExpense = async (data) => {
            try {
                setloading(true);
                const token = localStorage.getItem('bearerToken')
                const headers = {
                    'Content-Type': 'application/json',
                    'bearer': `${token}`
                }
                const response = await axios.post(`${url}/expense/addexpense`, data, { headers })
                if (response.status === 200) {
                    console.log(response.data)
                    reset()
                }
            } catch (error) {
                console.log(error.response.data)
            } finally {
                setloading(false)
            }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createExpense)}>
                <b>Amount:</b>
                <Input
                    placeholder="amount"
                    name="amount"
                    {...register("amount")}
                />

                <b>Category:</b>
                <Input
                    placeholder="category"
                    name="category"
                    {...register("category")}
                />

                <b>Description:</b>
                <Input
                    placeholder="description"
                    name="description"
                    {...register("description")}
                />
            </form>
        </div>
    )
}

export default Expenseform
