import { useState } from "react";
import { calculateBMR } from "../utils/weightCalculations";

const LandingPage = () => {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [sex, setSex] = useState("Male");

  // TODO add validation for input fields
  const onClick = () => {
    const isMale = sex === "Male";
    const bmrValue = calculateBMR(weight, height, age, isMale);
    document.cookie = `bmr=${bmrValue}`;
    window.location.href = "/loss-goal";
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Big Loser</h1>
      <div>
        <input
          className="input grid input-bordered w-full max-w-xs"
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <input
          className="input grid input-bordered w-full max-w-xs"
          type="text"
          placeholder="Weight (KG)"
          onChange={(event) => setWeight(Number(event.target.value))}
        />
        <input
          className="input grid input-bordered w-full max-w-xs"
          type="text"
          placeholder="Height (CM)"
          onChange={(event) => setHeight(Number(event.target.value))}
        />
        <select
          onChange={(event) => setSex(event.target.value)}
          className="select grid select-bordered w-full max-w-xs"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button onClick={onClick} className="btn">
        Go
      </button>
    </div>
  );
};

export default LandingPage;
