import React from 'react';
import './assets/Chart.css';
import ChartBar from './ChartBar';

const Chart = (props: any) => {
    const dataPointValues= props.dataPoints.map((dataPoint: { value: any; }) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint: any, index: number) => {
                return <ChartBar value={dataPoint.value}
                                 maxValue={totalMaximum}
                                 label={dataPoint.label}
                                 key={dataPoint.label}/>
            })
            }
        </div>
    );
}

export default Chart;