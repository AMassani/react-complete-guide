import React from 'react';
import Chart from "../Chart/Chart";
import {ExpenseDataPoint} from "./Model/ExpenseDataPoint";
import ExpenseItemModel from "./Model/ExpenseItemModel";

type Props = {
    expenseItems: Array<ExpenseItemModel>
}

const ExpensesChart = (props: Props) => {

    let chartDataPoints : Array<ExpenseDataPoint>= [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    const buildChartDataPoints = (filteredExpenses: Array<ExpenseItemModel>):Array<ExpenseDataPoint> => {
        filteredExpenses.forEach((expenseItem) => {
            const expenseMonth = expenseItem.date.getMonth();
            chartDataPoints[expenseMonth].value += expenseItem.amount;
        });
        return chartDataPoints;
    }

    chartDataPoints = buildChartDataPoints(props.expenseItems);

    return (
        <Chart dataPoints={chartDataPoints} />
    );
}

export default ExpensesChart;