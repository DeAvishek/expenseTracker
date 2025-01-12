import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart } from 'react-minimal-pie-chart';
const url = process.env.REACT_APP_URL_LINK
const Chart = () => {
    const [loading, setloading] = useState(true)
    const [chartdata, setchartdata] = useState([])
    const getChart = async () => {
        try {
            setloading(true)
            const token = localStorage.getItem('bearerToken');
            const headers = {
                'bearer': `${token}`
            }
            const response = await axios.get(`${url}/expense/category-totalamount`, { headers })
            if (response.status === 200) {
                console.log(response.data.result)
                const formattedData = response.data.result.map((item) => ({
                    title: item._id, // Assuming _id is the category name
                    value: item.totalExpense, // Assuming totalExpense is the value
                    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color for each slice
                }));
                setchartdata(formattedData)
                setloading(false)
            } else if (response.status === 404) {
                console.log("Unauthorized")
            } else {
                console.log("internal server error")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getChart()
    }, [])
    return (
        <div className="container my-4">
            <h2 className="text-center  mb-4">Expense Distribution by Category</h2>
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : chartdata.length > 0 ? (
                <PieChart
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    data={chartdata}
                    lengthAngle={360}
                    startAngle={0}
                    style={{ height: '300px' }}
                    label={({ dataEntry }) => `${dataEntry.title}`}
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'Arial, sans-serif',
                        fill: '#000',
                        // Adds a shadow effect to the text
                    }}
                // segmentsStyle={(index) => ({
                //     transform: 'scale(1.03)', // Slightly enlarges the segment for a 3D effect
                //     filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))', // Adds depth via shadow
                // })}
                />
            ) : (
                <p className="text-center">No expense data found.</p>
            )}
        </div>
    )
}

export default Chart
