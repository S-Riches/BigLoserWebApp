import { useState, useEffect } from "react";
import {
  calculateExerciseCalorieBonus,
  calculateCalorieDeficit,
} from "../utils/weightCalculations";

const LossGoal = () => {
  const [maintenanceCalories, setMaintenanceCalories] = useState(0);
  const [activityLevel, setActivityLevel] = useState("none");
  const [fatLossPerWeek, setFatLossPerWeek] = useState("relaxed");
  const [calorieDeficit, setCalorieDeficit] = useState(0);

  const isVeryLow = calorieDeficit < 1500;
  useEffect(() => {
    setMaintenanceCalories(
      calculateExerciseCalorieBonus(bmrCookie, activityLevel),
    );
    setCalorieDeficit(
      calculateCalorieDeficit(fatLossPerWeek, maintenanceCalories),
    );
  }, [activityLevel, fatLossPerWeek, maintenanceCalories]);

  // for prototyping purposes, we will use a cookie to store the BMR
  const bmrCookie: number = Number(
    document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("bmr"))
      ?.split("=")[1] || 0,
  );

  return (
    <div>
      <h1>Loss Goal</h1>
      <h3>Based on your BMR, you can set your loss goal</h3>
      <h4>Your BMR = {bmrCookie}</h4>
      <h4>what level of Exercise a week?</h4>
      <select
        name="activity level"
        onChange={(event) => {
          setActivityLevel(event.target.value);
        }}
      >
        <option value="none">little to none</option>
        <option value="little">little (exercise 1-3 a week)</option>
        <option value="moderate">moderate (exercise 4-5 a week)</option>
        <option value="heavy">
          heavy (daily exercise or intense exercise 3-4 times a week)
        </option>
        <option value="daily">daily (intense exercise daily)</option>
      </select>
      <h3>Maintenance calories a week: {maintenanceCalories}</h3>
      <h4>How much body fat to lose a week?</h4>
      <h5>
        a kilogram of body fat is made up of 7,700kcals. to lose that in a week
        you would need to lower your calorie intake by 1100kcals a day
      </h5>
      <select
        name="fat loss each week"
        onChange={(event) => {
          setFatLossPerWeek(event.target.value);
        }}
      >
        <option value="relaxed">0.25kg</option>
        <option value="normal">0.5kg</option>
        <option value="extreme">1kg</option>
      </select>
      <h2>Your daily calorie target is: {calorieDeficit}</h2>
      {isVeryLow && (
        <h3>
          As your Target calorie goal is below 1,500kcals - please either
          reconsider your goal, or speak to a professional nutritionist.
        </h3>
      )}
    </div>
  );
};

export default LossGoal;
