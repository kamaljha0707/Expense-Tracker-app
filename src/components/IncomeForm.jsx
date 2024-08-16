import React, { useEffect } from 'react'
import { useState } from 'react'

function IncomeForm({onSetIncome }) {
  const [incomeInput, setIncomeInput] = useState(null);

    
  function handleIncome(e) {
    e.preventDefault();
    onSetIncome(parseFloat(incomeInput));
    setIncomeInput(incomeInput)
    setIncomeInput(""); 
  }

  console.log(incomeInput);
  
  return (
    <>
                         <form className='bg-slate-200 rounded-md mt-4 w-full flex flex-col items-start p-6 px-10 justify-center'>
      <label htmlFor="income">Enter Income <span className='text-red-500'>*</span></label>

      <input
        type="number"
        value={incomeInput}
        required
        onChange={(e) => setIncomeInput(e.target.value)}
        name='income'
        className='outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black w-full my-2 py-1 px-3 rounded-sm'
        placeholder='Enter your income'
      />
      <button
        type='button' // Changed to button type
        onClick={handleIncome}
        className='py-2 px-2 rounded-md bg-red-600 hover:bg-red-700 outline-none my-4 text-white'
      >
        Add
      </button>
    </form>
    </>
  )
}

export default IncomeForm
