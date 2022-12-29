import React, {useState} from 'react'
import './assets/ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

type Props = {
    title: string,
    key: number,
    date: Date,
    amount: number
}

const ExpenseItem=(props: Props)=>{

    const [title, setTitle] = useState(props.title);
    const handleChangeTitle = (event: any) => {
        console.log("Button click event invoked;");
        setTitle('Updated');
    };
    return (
        <Card className="expense-item" id={props.key}>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
            <h2>{title}</h2>
                <div className="expense-item__price">
                    <p>$ {props.amount}</p>
                </div>
            </div>
            <button onClick={(event) => handleChangeTitle(event)}>Change later</button>
        </Card>
    );
}

export default ExpenseItem;