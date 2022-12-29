import AvailableMealCssClass from './AvailableMeal.module.css';
import DUMMY_MEALS from "../../../data/DUMMY_MEALS";

const AvailableMeal = () => {

    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return (
        <section className={AvailableMealCssClass.meals}>
            <ul>
            {
                {mealsList}
            }
            </ul>
        </section>
    );
}

export  default AvailableMeal;