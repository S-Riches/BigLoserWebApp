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
    <div className="place-content-center">
      <article className="prose lg:prose-md">
        <h2>Loss Goal</h2>
        <p>
          Based on your BMR, you can set your loss goal:
          <strong> BMR = {bmrCookie}</strong>
        </p>
      </article>
      <div className="label">
        <label>What level of Exercise a week?</label>
      </div>
      <select
        name="activity level"
        className="select select-bordered"
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
      <article className="prose md:prose-md">
        <h3>
          Maintenance calories a week: <strong>{maintenanceCalories}</strong>
        </h3>
        <div className="label">
          <label>How much body fat to lose a week?</label>
        </div>
        <select
          className="select select-bordered"
          name="fat loss each week"
          onChange={(event) => {
            setFatLossPerWeek(event.target.value);
          }}
        >
          <option value="relaxed">0.25kg</option>
          <option value="normal">0.5kg</option>
          <option value="extreme">1kg</option>
        </select>
        <p>
          A kilogram of body fat is made up of 7,700kcals. to lose that in a
          week you would need to lower your calorie intake by 1100kcals a day
        </p>
      </article>
      {calorieDeficit > 0 && (
        <article className="prose">
          <h3>
            Your daily calorie target is: <strong>{calorieDeficit}</strong>
          </h3>
          <button
            onClick={() => (window.location.href = "/track")}
            className="btn"
          >
            Next Page
          </button>
        </article>
      )}
      {isVeryLow && (
        <article className="prose md:prose-md">
          <h3>
            As your Target calorie goal is below 1,500kcals - please either
            reconsider your goal, or speak to a professional nutritionist.
          </h3>
        </article>
      )}
    </div>
  );
};

export default LossGoal;
