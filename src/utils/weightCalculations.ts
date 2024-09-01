// using mifflin-st jeor equation to calculate BMR
export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  isMale: boolean,
): number {
  // Mifflin-St Jeor equation uses different constants depending on sex, i would have called it SEX_CONSTANT, but alas i am a child and think thats too funny for a variable name
  const GENDER_CONSTANT = isMale ? 5 : -161;
  const bmrCalculation =
    10 * weight + 6.25 * height - 5 * age + GENDER_CONSTANT;
  return Math.round(bmrCalculation);
}

// a function for calculating the calorie bonus from exercise
export function calculateExerciseCalorieBonus(
  bmr: number,
  activityLevel: string,
): number {
  const activityLevelMap = {
    none: 1.0,
    little: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    daily: 1.9,
  };
  return Math.round(
    bmr * activityLevelMap[activityLevel as keyof typeof activityLevelMap],
  );
}

// a function for calculating the calorie deficit needed to lose a certain amount of weight in kilograms
export function calculateCalorieDeficit(
  weightLossPerWeek: string,
  maintenanceCalories: number,
): number {
  const ONE_KILO_OF_FAT = 7700;
  const calorieDeficitMap = {
    relaxed: 0.25,
    normal: 0.5,
    extreme: 1,
  };
  const dailyDeficit =
    (calorieDeficitMap[weightLossPerWeek as keyof typeof calorieDeficitMap] *
      ONE_KILO_OF_FAT) /
    7;
  return Math.round(maintenanceCalories - dailyDeficit);
}
