import mealsImage from './assets/meals.jpg';
import cssClasses from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <>
            <header className={cssClasses.header}>
                <h1>React Meals</h1>
                <HeaderCartButton totalCartItems={0} />
            </header>
            <div className={cssClasses['main-image']}>
                <img src={mealsImage} alt="Meals"/>
            </div>
        </>
    );
}

export default Header;