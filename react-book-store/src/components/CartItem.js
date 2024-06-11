import styles from "./CartItem.css.js";

function CartItem(props) {
  return (
    <div style={styles.cartItem}>
      <table style={styles.table}>
          <td style={styles.td}>
            {props.title} 
          </td>
          <td style={styles.td}>{props.price} USD</td> 
          <td style={styles.td}>
            <button
              onClick={(e) => {
                props.removeFromCart(props.id);
              }}
            >
              remove
            </button>
          </td>
      </table>
    </div>
  );
}

export default CartItem;