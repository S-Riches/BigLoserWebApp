import AddItemModal from "../AddItemModal/AddItemModal";
import TrackCardTable from "../TrackingTable/TrackCardTable";
import { useState } from "react";
interface Props {
  mealOccasion?: string;
  calorieTarget?: number;
  items?: string[];
}

const TrackCard = ({ mealOccasion, calorieTarget, items }: Props) => {
  return (
    <div data-testid="trackCard">
      <AddItemModal />
      <h1>{mealOccasion || "Meal"}</h1>
      <h3>{calorieTarget || 0}</h3>
      <TrackCardTable items={items || []} />
      <button
        data-testid="addItemButton"
        onClick={() => document.getElementById("addItemModal").showModal()}
        className="btn"
      >
        Add Item
      </button>
    </div>
  );
};
export default TrackCard;
