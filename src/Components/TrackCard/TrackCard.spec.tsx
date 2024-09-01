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
  it("has a table", () => {
    render(<TrackCard items={["item1", "item2"]} />);

    expect(screen.getByTestId("trackTable")).toBeInTheDocument();
    expect(screen.getByText("item1")).toBeInTheDocument();
    expect(screen.getByText("item2")).toBeInTheDocument();
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
  it("has a table with no items if nothing is passed", () => {
    render(<TrackCard />);
    expect(screen.queryByTestId("trackTable")).toBeInTheDocument();
    expect(screen.queryByText("item1")).toBeNull();
  });
  it("has a default add item button", () => {
    render(<TrackCard />);
    expect(screen.getByTestId("addItemButton")).toBeInTheDocument();
  });
});
