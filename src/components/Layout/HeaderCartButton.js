import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;

  if (cartCtx && cartCtx.items && cartCtx.items.length > 0) {
    cartCtx.items.forEach((item) => {
      if (item && item.quantity) {
        quantity = quantity + Number(item.quantity);
      }
    });
  }

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{cartCtx.message}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
