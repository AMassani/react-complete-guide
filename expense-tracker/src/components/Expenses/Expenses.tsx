import React, {useState} from "react";
import ExpenseItemModel from "./Model/ExpenseItemModel";
import './assets/Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

type Props = {
    items: Array<ExpenseItemModel>
}
const Expenses=(props: Props)=>{
    const [filteredYear, setFilteredYear] = useState('2020');
    const onSelectedYearChange=(selectedYear: string)=>{
        if (selectedYear){
            //props.filterListByYear(selectedYear);
            setFilteredYear(selectedYear);
        }
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div className="expenses">
            <ExpenseFilter selected={filteredYear}
                           onYearChangeHandler={onSelectedYearChange} />
            <ExpensesChart expenseItems={filteredExpenses} />
            <ExpenseList expenseItems={filteredExpenses} />
        </div>
    );
}

export default Expenses;