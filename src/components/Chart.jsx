import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ income, totalExpense }) {
   let expense = totalExpense.reduce((sum, item) => sum + parseFloat(item.amount), 0)
 const balance = income - expense
      

    
  const data = {
    labels: ['Income', 'Balance', "Expense"],
    datasets: [
      {
        label: 'Amount',
        data: [income, balance , expense],
        backgroundColor: ['#0D1282', '#D71313', '#F0DE36'], 
        borderColor: ['#0D1282', '#D71313','#F0DE36'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income, Expense, Balance',
      },
    },
  };

  return (
    <>
   {income > 0  ?  (<div className='border  p-8 rounded-lg h-96 w-full my-10 flex justify-between items-start '>
    <Doughnut  data={data} options={options} />
    <p className='text-white mt-10 mx-10 text-lg text-start'>This chart visually represents a comparison between your total income ( ₹{income} ), represented by the income variable, and your total expenses ( ₹{expense} ), represented by the totalExpense variable. The doughnut chart is divided into two segments: one that shows your income and another that reflects your totalExpense. By comparing these two segments, you can easily see how much of your income is being spent. Additionally, this chart helps you understand your overall financial balance, calculated as the difference between your income and totalExpense, giving you a clear picture of your financial situation.</p>
    </div>) : <p className='bg-gray-200 my-20 py-4 text-xl font-semibold'>Please enter income to view the chart</p>}
    </>
  )
}

export default Chart;

