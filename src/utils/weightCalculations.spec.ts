import {
  calculateBMR,
  calculateExerciseCalorieBonus,
  calculateCalorieDeficit,
} from "./weightCalculations";

describe("calculateBMR validation test", () => {
  it("should calculate BMR for a male with given weight, height, and age", () => {
    const weight = 80; // in kilograms
    const height = 180; // in centimeters
    const age = 30; // in years
    const isMale = true;

    const bmr = calculateBMR(weight, height, age, isMale);

    // Expected BMR calculation using Mifflin-St Jeor equation
    const expectedBMR = 10 * weight + 6.25 * height - 5 * age + 5;

    expect(bmr).toBe(expectedBMR);
  });

  it("should calculate BMR for a female with given weight, height, and age", () => {
    const weight = 65; // in kilograms
    const height = 160; // in centimeters
    const age = 25; // in years
    const isMale = false;

    const bmr = calculateBMR(weight, height, age, isMale);

    // Expected BMR calculation using Mifflin-St Jeor equation
    const expectedBMR = 10 * weight + 6.25 * height - 5 * age - 161;

    expect(bmr).toBe(expectedBMR);
  });
});

describe("calculateExerciseCalorieBonus validation test", () => {
  it("should calculate calorie bonus for given BMR and activity level", () => {
    const bmr = 2000;
    const activityLevel = "moderate";

    const calorieBonus = calculateExerciseCalorieBonus(bmr, activityLevel);

    // Expected calorie bonus calculation
    const expectedCalorieBonus = bmr * 1.55;

    expect(calorieBonus).toBe(expectedCalorieBonus);
  });
});

describe("calculateCalorieDeficit validation test", () => {
  it("should calculate calorie deficit for given BMR, activity level, and weight goal", () => {
    const weightGoal = "normal";
    const maintenanceCalories = 2500;
    const ONE_KILO_OF_FAT = 7700;
    const calorieDeficit = calculateCalorieDeficit(
      weightGoal,
      maintenanceCalories,
    );
    // Expected calorie deficit calculation
    const expectedCalorieDeficit =
      maintenanceCalories - (0.5 * ONE_KILO_OF_FAT) / 7;
    expect(calorieDeficit).toBe(expectedCalorieDeficit);
  });
});
