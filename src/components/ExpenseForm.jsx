import React, { useEffect, useState } from 'react'

function ExpenseForm({onAddExpense, editingExpense }) {
const [date, setDate] = useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("");
const [note, setNote] = useState("");
const [formVaild , setFormVaild] = useState(true)


useEffect(() => {
  if (editingExpense) {
    setDate(editingExpense.date);
    setAmount(editingExpense.amount);
    setCategory(editingExpense.category);
    setNote(editingExpense.note);
  }
}, [editingExpense]);

function handleSumbit(e){
  e.preventDefault();

  if(!date || !amount || !category || !note){
    setFormVaild(false);
    return;
  }else{
    const expense = {
      id: editingExpense ? editingExpense.id : Math.random(),
      date,
      amount,
      category,
      note
    }
    
    onAddExpense(expense)
    setDate("")
    setAmount("")
    setCategory("")
    setNote("")
    setFormVaild(true)
  }
}



  return (
    <>
    {/* form */}
    <form onSubmit={handleSumbit} className='bg-slate-200 rounded-md mt-4 w-full flex flex-col items-start p-6 px-10 justify-center' >
    <label htmlFor="date">Date of purchase</label>
    <input type="date" value={date}  onChange={(e)=> setDate(e.target.value)}  name='date' className='outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black w-full my-2 py-1 px-3 rounded-sm ' placeholder='12/08/23' />

    <label htmlFor="amount">Amount</label>
    <input type="number" value= {amount} onChange={(e)=> setAmount(e.target.value)}  name='amount' className='outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black w-full my-2 py-1 px-3 rounded-sm ' placeholder='Enter purchase amount' />

    <label htmlFor="category">Category</label>
    <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)} className='outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black w-full my-2 py-1 px-3 rounded-sm ' >
        <option value="" >Select a Category</option>
        <option value="dining">Dining</option>
        <option value="houserent">House Rent</option>
        <option value="entertainment">Entertainment</option>
        <option value="trvel">Travel</option>
        <option value="bill&utilities">Bill & Utilities</option>
        <option value="other">other</option>
    </select>

    <label htmlFor="addNote">Purchase Note</label>
    <input type="text" value={note} onChange={(e)=> setNote(e.target.value)}  name='addNote' className='outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black w-full my-2 py-1 px-3 rounded-sm capitalize ' placeholder='Add a Purchase note' />

    <button type='submit' className='py-2 px-2 rounded-md bg-green-600 hover:bg-green-700 outline-none my-4 text-white'>{editingExpense ? "Edit Purchase" : "Add Purchase"}</button>

    {!formVaild && <p className='text-red-500'>Please enter vaild data!</p>}

    </form>
    </>
    
  )
}

export default ExpenseForm
