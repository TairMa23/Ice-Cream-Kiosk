
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import NoticeArea from "./components/NoticeArea";
import FlavorList from "./components/FlavorList";
import OrderSummary from "./components/OrderSummary";

function App() {
  // All available ice cream flavors
  const [flavors, setFlavors] = useState([
    { name: "Vanilla", isSoldOut: false, scoopsSelected: 0 },
    { name: "Chocolate", isSoldOut: false, scoopsSelected: 0 },
    { name: "Strawberry", isSoldOut: true, scoopsSelected: 0 },
    { name: "Pistachio", isSoldOut: false, scoopsSelected: 0 },
    { name: "Mango", isSoldOut: false, scoopsSelected: 0 },
  ]);

  // Maximum number of scoops per order
  const [scoopLimit] = useState(5);

  // Show only flavors that are available
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  // Calculate total scoops
  const totalScoops = flavors.reduce(
    (total, flavor) => total + flavor.scoopsSelected,
    0
  );

  // Calculate total price
  const totalPrice = totalScoops * 5;

  // Add one scoop
  const handleAddScoop = (flavorName) => {
    if (totalScoops >= scoopLimit) return;

    setFlavors((prevFlavors) =>
      prevFlavors.map((flavor) => {
        if (flavor.name === flavorName && !flavor.isSoldOut) {
          return {
            ...flavor,
            scoopsSelected: flavor.scoopsSelected + 1,
          };
        }

        return flavor;
      })
    );
  };

  // Remove one scoop
  const handleRemoveScoop = (flavorName) => {
    setFlavors((prevFlavors) =>
      prevFlavors.map((flavor) => {
        if (
          flavor.name === flavorName &&
          !flavor.isSoldOut &&
          flavor.scoopsSelected > 0
        ) {
          return {
            ...flavor,
            scoopsSelected: flavor.scoopsSelected - 1,
          };
        }

        return flavor;
      })
    );
  };

  // Filter flavors
  const visibleFlavors = showOnlyAvailable
    ? flavors.filter((flavor) => !flavor.isSoldOut)
    : flavors;

  // Clear order
  const handleClearOrder = () => {
    setFlavors((prevFlavors) =>
      prevFlavors.map((flavor) => ({
        ...flavor,
        scoopsSelected: 0,
      }))
    );
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">

        <NoticeArea
          totalScoops={totalScoops}
          scoopLimit={scoopLimit}
        />

        <FlavorList
          flavors={visibleFlavors}
          showOnlyAvailable={showOnlyAvailable}
          setShowOnlyAvailable={setShowOnlyAvailable}
          totalScoops={totalScoops}
          scoopLimit={scoopLimit}
          onAddScoop={handleAddScoop}
          onRemoveScoop={handleRemoveScoop}
        />

        <OrderSummary
          totalScoops={totalScoops}
          totalPrice={totalPrice}
          onClearOrder={handleClearOrder}
        />

      </main>
    </div>
  );
}

export default App;
