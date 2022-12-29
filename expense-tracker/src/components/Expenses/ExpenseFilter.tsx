import React, {useState} from "react";
import './assets/ExpenseFilter.css';

type Props = {
    onYearChangeHandler: any
    selected: string
}
const ExpenseFilter=(props: Props)=>{
    const years: Array<string> = ["2019", "2020", "2021", "2022"];
    const [selectedYear, setSelectedYear] = useState(props.selected);

    const handleYearChange = (event: any) => {
        setSelectedYear(event.target.value);
        if (props.onYearChangeHandler){
            props.onYearChangeHandler(event.target.value);
        }
    }

    return(
      <div className="expenses-filter">
          <div className="expenses-filter__control">
              <label>Filter by year</label>
              <select onChange={handleYearChange} value={selectedYear}>
                  <option value="⬇️ Select a fruit ⬇️"> -- Select a year -- </option>
                  {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
                  {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
          </div>
      </div>
    );
}

export default ExpenseFilter;