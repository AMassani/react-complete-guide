import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props: { onAddGoal: (arg0: string) => void; }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const goalInputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0){
            setIsValid(false);
            return;
        }
        setIsValid(true);
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid} ? 'invalid' : ''` }>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit" onClick={formSubmitHandler} className="">Add Goal</Button>
        </form>
    );
};

export default CourseInput;