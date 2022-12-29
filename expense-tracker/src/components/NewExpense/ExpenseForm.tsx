import './assets/ExpenseForm.css'
import {EventHandler, useState} from "react";
import ExpenseItemModel from "../Expenses/Model/ExpenseItemModel";
import React from 'react';

type Props = {
    onSaveExpenseData: EventHandler<any>
    onCancelClicked: any
}

const ExpenseForm=(props: Props)=>{

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangedHandler=(event: any)=>{
        const target = event.target;
        const value = target.value;
        setTitle(value);
    }

    const amountChangeHandler=(event: any)=>{
        const target = event.target;
        const value = target.value;

        setAmount(value);
    }

    const dateChangeHandler=(event: any)=>{
        const target = event.target;
        const value = target.value;

        setDate(value);
    }

    const formSubmitHandler=(event: any)=>{
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        console.log('The following date will be submitted:');

        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    }

    return (
    <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangedHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={props.onCancelClicked}>Cancel</button>
        </div>

    </form>
    );
}

export default ExpenseForm;