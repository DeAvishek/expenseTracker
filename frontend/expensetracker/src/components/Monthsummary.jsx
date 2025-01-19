import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend,PointElement,LineElement , Title} from "chart.js";
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );
const url=process.env.REACT_APP_URL_LINK

const Monthsummary = () => {
    const  [chartData, setchartData] = useState(null)
    const [loading, setloading] = useState(true)

    const getMonthData=async()=>{
        try {
            setloading(true);
            const token=localStorage.getItem('bearerToken')
            const headers={
                'bearer':`${token}`
            }
            const response=await axios.get(`${url}/monthsummary`,{headers})

            if(response.status===200){
                console.log(response.data.summary)
                
                setloading(false);
                const labels=response.data.summary.map((item)=>
                 item.month
                )
                const values=response.data.summary.map((item)=>item.totalExpense)

                setchartData({
                    labels,
                    datasets: [
                        {
                          label: "total expense",
                          data: values,
                          borderColor: "rgba(75, 192, 192, 1)",
                          borderWidth: 2,
                          fill:false
                        }
                    ]
                })    
            }else if(response.status===404){
                console.log("No user Found")
            }else{
                console.log("Internal server error")
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
      getMonthData()
    }, [])
    
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };


  return (
   
     <>
          {loading ?(
            <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
          ):chartData?(<Line data={chartData} options={options}></Line>):<p>loading...</p>}
     </>
  )
}

export default Monthsummary
