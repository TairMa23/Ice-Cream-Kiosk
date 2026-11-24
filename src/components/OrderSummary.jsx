
import "./OrderSummary.css";

function OrderSummary({
  totalScoops,
  totalPrice,
  onClearOrder,
}) {
  return (
    <section className="order-summary">

      <h2>Order Summary</h2>

      <p>
        Total Scoops: <strong>{totalScoops}</strong>
      </p>

      <p>
        Total Price: <strong>₪{totalPrice}</strong>
      </p>

      {totalScoops === 0 && (
        <p className="empty-order">
          Your order is empty
        </p>
      )}

      <button
        className="clear-button"
        onClick={onClearOrder}
        disabled={totalScoops === 0}
      >
        Clear Order
      </button>

    </section>
  );
}

export default OrderSummary;
