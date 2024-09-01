import AddItemModal from "../AddItemModal/AddItemModal";
import { useState } from "react";
interface Props {
  mealOccasion?: string;
  calorieTarget?: number;
  items?: string[];
}

const TrackCard = ({ mealOccasion, calorieTarget, items }: Props) => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div data-testid="trackCard">
      <AddItemModal handleClose={handleClose} isOpen={open} />
      <h1>{mealOccasion || "Meal"}</h1>
      <h3>{calorieTarget || 0}</h3>
      <table data-testid="trackTable">
        <thead>
          <tr>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button data-testid="addItemButton" onClick={() => handleModalOpen()}>
        Add Item
      </button>
    </div>
  );
};
export default TrackCard;
