import AddItemModal from "../AddItemModal/AddItemModal";
import TrackCardTable from "../TrackingTable/TrackCardTable";
import { useState } from "react";
interface Props {
  mealOccasion?: string;
  calorieTarget?: number;
  items?: string[];
}

const TrackCard = ({ mealOccasion, calorieTarget, items }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div data-testid="trackCard">
      <AddItemModal handleClose={() => setOpen(false)} isOpen={open} />
      <h1>{mealOccasion || "Meal"}</h1>
      <h3>{calorieTarget || 0}</h3>
      <TrackCardTable items={items || []} />
      <button data-testid="addItemButton" onClick={() => setOpen(true)}>
        Add Item
      </button>
    </div>
  );
};
export default TrackCard;
