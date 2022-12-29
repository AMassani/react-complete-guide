// @ts-ignore
import React, {useEffect, useState} from 'react'

import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItemModel from "./components/Expenses/Model/ExpenseItemModel";
import exp from "constants";

function App() {

    const DUMMY_EXPENSES: Array<ExpenseItemModel> = [
        {
            id: 1,
            title: "Toilet Paper",
            amount: 50,
            date: new Date(2021, 5, 12)
        },
        {
            id: 2,
            title: "New TV",
            amount: 450,
            date: new Date(2021, 6, 1)
        },
        {
            id: 3,
            title: "Car Insurance",
            amount: 460,
            date: new Date(2020, 5, 2)
        },
        {
            id: 4,
            title: "New Desktop (Wooden)",
            amount: 1289.20,
            date: new Date(2020, 5, 5)
        }
    ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    //const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseDataHandler = (expense: ExpenseItemModel) => {
        console.log('In App.js');
        setExpenses((prevState) => {
            return [
                ...prevState,
                expense
            ]
        })
        //setFilteredExpenses(expenses);
    }

    return (
    <div className="App">
        <h2>Let's get started!</h2>
        <NewExpense updateExpensesHandler={addExpenseDataHandler} />
        <Expenses items ={ expenses } />
    </div>
  );
}

export default App;
