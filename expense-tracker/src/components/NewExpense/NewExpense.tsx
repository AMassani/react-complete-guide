import ExpenseForm from "./ExpenseForm";
import './assets/NewExpense.css'
import React, {EventHandler, useState} from "react";

type Props = {
    updateExpensesHandler: EventHandler<any>
}

const NewExpense=(props: Props)=> {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler=(enteredData: any)=>{
        const expenseData={
            ...enteredData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.updateExpensesHandler(expenseData);
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing &&
                <button onClick={startEditingHandler}>Add New Expense</button>
            }
            {isEditing &&
                <ExpenseForm onCancelClicked={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
            }
        </div>
    );
}

export default NewExpense;