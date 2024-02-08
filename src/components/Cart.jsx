import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

export default function Cart() {
  //this establish the connection with the CartContext in Shopping-cart-context file.
  // NOTE we use useContext to establish connection with the createContext api

  // const cartContext = useContext(CartContext);

  //we can again make it shorter by accessing items with destructuring like this
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {/* {cartContext.items.length === 0 && <p>No items in cart!</p>} */}
      {items.length === 0 && <p>No items in cart!</p>}

      {/* we did the same thing with the other items object */}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
