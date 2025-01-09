import React from 'react'

const Expense = ({expenseData}) => {
  return (
    <div>
        <tr>
            <td>{index + 1}</td>
            <td>{expenseData.amount}</td>
            <td>{expenseData.category}</td>
            <td>{expenseData.description}</td>
            <td>{new Date(expenseData.date).toLocaleDateString()}</td>
        </tr>
    </div>
  )
}

export default Expense
