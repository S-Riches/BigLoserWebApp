import TrackCard from "../Components/TrackCard/TrackCard";

const MEAL_OCCASIONS = ["Breakfast", "Lunch", "Dinner", "Snack"];

const TrackPage = () => {
  return (
    <div>
      <h1>Track Page</h1>
      <h3>Track your progress</h3>
      <div>
        {MEAL_OCCASIONS.map((mealOccasion, index) => (
          <TrackCard key={index} mealOccasion={mealOccasion} />
        ))}
      </div>
    </div>
  );
};

export default TrackPage;
