import ExpenseItemModel from "./Model/ExpenseItemModel";
import ExpenseItem from "./ExpenseItem";
import React from "react";

type Props = {
    expenseItems: Array<ExpenseItemModel>
}
const ExpenseList = (props: Props) => {
    const emptyComponent = (expenseData: Array<ExpenseItemModel>) => {
        return ( expenseData.length === 0 &&
            <div className="empty-resultset">
                <p>No expenses found</p>
            </div>
        );
    }

    const expenseContent=(expenseData: Array<ExpenseItemModel>)=> {
        return ( expenseData.length > 0 &&
            expenseData.map((item: ExpenseItemModel,
                             index: number) => {
                return <ExpenseItem
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    amount={item.amount} />
            })
        )
    }

    return (
      <>
          {emptyComponent(props.expenseItems)}
          {expenseContent(props.expenseItems)}
      </>
    );
}

export default ExpenseList;