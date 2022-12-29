import './assets/Card.css'
import '../Expenses/assets/ExpenseItem.css'
import React from 'react'

type Props = {
    id: number,
    children: any,
    className: string
}
const Card=(props: Props)=>{
    const classes = 'card ' + props.className;
    console.log('Card-Props:' + props);
    return(
        <div className={classes} >
            {props.children}
        </div>
    )
}

export default Card;