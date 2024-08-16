import React from 'react'

function ExpenseTable({ onDeleteExpense, expenseData, onEditExpense, income }) {
  let expenseDataRow = null;


  if (expenseData.length > 0) {
    expenseDataRow = expenseData.map((expense) => (
      <tr key={expense.id} className='bg-slate-300  '>
        <td className='border py-2 capitalize'>{expense.date}</td>
        <td className='border py-2 capitalize' > ₹{expense.amount}</td>
        <td className='border py-2 capitalize'>{expense.category}</td>
        <td className='border py-2 capitalize'>{expense.note}</td>
        <td className='border py-2 capitalize'>
          <button onClick={() => onEditExpense(expense)} className='bg-yellow-300 w-10 text-black py-1 px-[2px] rounded-md'>Edit</button>
          <button onClick={() => onDeleteExpense(expense.id)} className='bg-red-300 text-black py-1 ml-2 px-[2px] w-12 rounded-md'>Delete</button>
        </td>

      </tr>
    ))
  } else {
    expenseDataRow = (
      <p className=' bg-gray-300'>No Expense Found</p>
    )
  }



  return (
    <>
      {/* expense history */}
      <div className='bg-slate-200 rounded-md mt-10 w-2/3 '>
        <h2 className='text-xl py-4 font-semibold'>Expense History</h2>
        <table className="min-w-full  divide-y divide-gray-200">
          <thead className="bg-gray-50 w-full">
            <tr>
              <th scope="col" className="px-4  w-1/5 py-3.5 text-left text-sm font-normal text-gray-700">
                <span className='font-semibold'>Date</span>
              </th>
              <th scope="col" className="px-4  w-1/5  py-3.5 text-left text-sm font-semibold text-gray-700" >
                Amount
              </th>

              <th scope="col" className="px-4 w-1/5 py-3.5 text-left text-sm font-semibold text-gray-700"  >
                Category
              </th>

              <th scope="col" className="px-4 w-1/5 py-3.5 text-left text-sm font-semibold text-gray-700">
                Purchase Note
              </th>
              <th scope="col" className="px-4  w-1/5 py-3.5 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {expenseDataRow}

          </tbody>
        </table>
       
        {income > 0 && <div className='w-full py-3 font-semibold mt-6 bg-gray-400 flex justify-start px-4'>
          <p className='pr-8 '>Total income</p>
          <p> ₹ {income}</p>
        </div>}
        {expenseData.length > 0 && (
          <div className='w-full py-3 font-semibold mt-6 bg-gray-400 flex justify-start px-4'>

            <p className='pr-8 '>Total Expense</p>
            <p> ₹{expenseData.reduce((sum, item) => sum + parseFloat(item.amount), 0)}</p>

          </div>
        )}

        {income > 0 && <div className='w-full py-3 font-semibold mt-6 bg-gray-400 flex justify-start px-4'>
          <p className='pr-8 '>Balance</p>
          <p> ₹ {income - (expenseData.reduce((sum, item) => sum + parseFloat(item.amount), 0))} </p>
        </div>}

        {income == 0 && <div className='w-full py-3 font-semibold mt-6 text-center flex justify-center px-4'>
          <p className='pr-8 '>**Please Enter monthly income**</p>
        </div>}
        
        
      </div>
    </>

  )
}

export default ExpenseTable
