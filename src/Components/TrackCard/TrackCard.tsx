import AddItemModal from "../AddItemModal/AddItemModal";
import TrackCardTable from "../TrackingTable/TrackCardTable";
interface Props {
  mealOccasion?: string;
  calorieTarget?: number;
  items?: string[];
}

const TrackCard = ({ mealOccasion, calorieTarget, items }: Props) => {
  const 
  return (
    <div data-testid="trackCard">
      <article className="prose">
        <AddItemModal />
        <h2>{mealOccasion || "Meal"}</h2>
        <h3>{calorieTarget || 0}</h3>
        <TrackCardTable items={items || []} />
        <button
          data-testid="addItemButton"
          onClick={() => }
          className="btn"
        >
          Add Item
        </button>
      </article>
    </div>
  );
};
export default TrackCard;
