
import { useEffect, useState } from 'react'
import './App.css'
import ExpenseTable from './components/ExpenseTable'
import ExpenseForm from './components/ExpenseForm'
import IncomeForm from './components/IncomeForm'
import Chart from './components/Chart'
function App() {
  const [ExpenseData, setExpenseData] = useState([])
  const [editingExpense, setEditingExpense] = useState(null);
  const [income, setIncome] = useState(0);
  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem('expenseData')) || [];
    setExpenseData(storedData)
    }, [])

   const  addExpense = (newExpense)=>{
    if (editingExpense) {
      setExpenseData((prevData) => {
        const newData = prevData.map((expense) =>
          expense.id === editingExpense.id ? newExpense : expense
        );
        localStorage.setItem("expenseData", JSON.stringify(newData));
        return newData;
      });
      setEditingExpense(null); 
    } else {
      setExpenseData((prevData) => {
        const newData = [...prevData, newExpense];
        localStorage.setItem("expenseData", JSON.stringify(newData));
        return newData;
      });
    }
  };

   const  deleteExpense = (id)=>{
    setExpenseData((prevData)=>{
      const newData = prevData.filter((expense)=> expense.id !== id)
      localStorage.setItem("expenseData", JSON.stringify(newData))
      return newData
    })
   } 

  const editExpense = (expense) => {
    setEditingExpense(expense); 
  };

  const handleIncome = (newIncome) => {
    setIncome(newIncome);
  };



  return (
    <>
            <h1 className='text-white text-3xl my-0'>Expense Tracker</h1>
            <div className='text-black flex gap-10 w-[80vw] '>

                <div className='w-5/6'>
                    <IncomeForm expenseData = {ExpenseData} onSetIncome ={handleIncome} />
                    <ExpenseForm onAddExpense = {addExpense} editingExpense={editingExpense} />
                </div>
                <ExpenseTable onDeleteExpense= {deleteExpense} expenseData = {ExpenseData} onEditExpense = {editExpense} income = {income}/>
            </div>
            <Chart income={income} totalExpense = {ExpenseData}/>

        </>
  )
}

export default App
