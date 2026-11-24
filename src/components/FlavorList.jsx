
import FlavorCard from "./FlavorCard";
import "./FlavorList.css";

function FlavorList({
  flavors,
  showOnlyAvailable,
  setShowOnlyAvailable,
  totalScoops,
  scoopLimit,
  onAddScoop,
  onRemoveScoop,
}) {
  return (
    <section className="flavor-section">

      <div className="flavor-header">
        <h2>Our Flavors</h2>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={showOnlyAvailable}
            onChange={(e) =>
              setShowOnlyAvailable(e.target.checked)
            }
          />
          Show only available
        </label>
      </div>

      {flavors.length === 0 ? (
        <p className="empty-message">No flavors to show 🍦</p>
      ) : (
        <div className="flavor-grid">
          {flavors.map((flavor) => (
            <FlavorCard
              key={flavor.name}
              flavor={flavor}
              totalScoops={totalScoops}
              scoopLimit={scoopLimit}
              onAddScoop={onAddScoop}
              onRemoveScoop={onRemoveScoop}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default FlavorList;
