
import "./FlavorCard.css";

function FlavorCard({
  flavor,
  totalScoops,
  scoopLimit,
  onAddScoop,
  onRemoveScoop,
}) {
  const isLimitReached = totalScoops >= scoopLimit;

  return (
    <div
      className={`flavor-card ${
        flavor.isSoldOut ? "sold-out" : ""
      }`}
    >

      <div className="card-header">
        <h3>{flavor.name}</h3>

        {flavor.isSoldOut && (
          <span className="sold-out-badge">
            Sold Out
          </span>
        )}
      </div>

      <p>
        Scoops selected: {flavor.scoopsSelected}
      </p>

      <div className="card-buttons">

        <button
          onClick={() => onRemoveScoop(flavor.name)}
          disabled={
            flavor.isSoldOut ||
            flavor.scoopsSelected === 0
          }
        >
          −
        </button>

        <button
          onClick={() => onAddScoop(flavor.name)}
          disabled={
            flavor.isSoldOut || isLimitReached
          }
        >
          +
        </button>

      </div>

    </div>
  );
}

export default FlavorCard;
