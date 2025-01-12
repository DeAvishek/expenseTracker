import React from 'react'
import { useSelector } from 'react-redux'
import Input from './Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from './Button'
import Alertbox from './Alertbox'
const url = process.env.REACT_APP_URL_LINK;
const Expenseform = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setloading] = useState(true)
    const [message, setmessage] = useState(null)
    const [alertstaus, setalertstaus] = useState(null)
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
            if (response.status === 201) {
                console.log(response.data)
                reset()
                setloading(false)
                setmessage("Expense created SuccessFully")
                setalertstaus("success")
            } else if (response.status === 401) {
                console.log("User Not found")
                setmessage("User Not found")
                setalertstaus("danger")
            } else if (response.status === 400) {
                console.log("Invalid data")
                setmessage("invalid data")
                setalertstaus("danger")
            } else {
                setmessage("Internal server Error")
                setalertstaus("danger")
            }
        } catch (error) {
            console.log(error.response.data)
        } 
    }

    return (
        <>
        <div>
            <Alertbox setmessage={message} loading={loading} setalertstaus={alertstaus}/>
        </div>
            <div className="container my-4 d-flex justify-content-center">
                <form
                    onSubmit={handleSubmit(createExpense)}
                    className="d-flex flex-column align-items-center p-4 rounded"
                    style={{
                        backgroundColor: "#FFC107", // Dark yellow
                        width: "400px", // Specific width
                        minHeight: "400px", // Specific height
                    }}
                >
                    <div className="mb-3 w-100">

                        <label htmlFor="amount" className="form-label text-dark fw-bold">
                            Amount:
                        </label>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Enter amount"
                            id="amount"
                            name="amount"
                            {...register("amount")}
                            style={{ height: "50px" }} // Adjust height
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label
                            htmlFor="category"
                            className="form-label text-dark fw-bold"
                        >
                            Category:
                        </label>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Enter category"
                            id="category"
                            name="category"
                            {...register("category")}
                            style={{ height: "50px" }} // Adjust height
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label
                            htmlFor="description"
                            className="form-label text-dark fw-bold"
                        >
                            Description:
                        </label>
                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Enter description"
                            id="description"
                            name="description"
                            {...register("description")}
                            style={{ height: "80px" }} // Adjust height
                        />
                    </div>

                    <div className="mt-3">
                        <Button
                            type="submit"
                            className="btn btn-dark btn-lg px-4"
                            style={{ width: "200px" }} // Button width
                        >
                            Create Expense
                        </Button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Expenseform
