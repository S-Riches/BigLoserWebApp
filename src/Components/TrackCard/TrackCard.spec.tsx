import { render, screen } from "@testing-library/react";
import TrackCard from "./TrackCard";

describe("Track Card Tests", () => {
  // happy path
  it("renders without crashing", () => {
    render(<TrackCard />);
    expect(screen.getByTestId("trackCard")).toBeInTheDocument();
  });
  it("renders a heading", () => {
    render(<TrackCard mealOccasion={"Breakfast"} />);
    expect(screen.getByText("Breakfast")).toBeInTheDocument();
  });
  it("renders a calorie target", () => {
    render(<TrackCard calorieTarget={500} />);
    expect(screen.getByText("500")).toBeInTheDocument();
  });
  it("has an add item button", () => {
    render(<TrackCard />);
    expect(screen.getByTestId("addItemButton")).toBeInTheDocument();
  });
  // unhappy path
  it("has a default calorie target of 0", () => {
    render(<TrackCard />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
  it("has a default meal occassion of 'Meal'", () => {
    render(<TrackCard />);
    expect(screen.getByText("Meal")).toBeInTheDocument();
  });
  it("has a default add item button", () => {
    render(<TrackCard />);
    expect(screen.getByTestId("addItemButton")).toBeInTheDocument();
  });
});
