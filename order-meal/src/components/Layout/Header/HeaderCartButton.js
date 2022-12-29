import CartIcon from "../../Cart/CartIcon";
import headerCartButtonCss from './HeaderCartButton.module.css'
const HeaderCartButton = props => {
    return (
      <button className={headerCartButtonCss.button}>
          <span className={headerCartButtonCss.icon}>
              <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={headerCartButtonCss.badge}>{props.totalCartItems}</span>
      </button>
    );
}

export default HeaderCartButton;