import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrackCardTable from "./TrackCardTable";

describe("Track Card Table Tests", () => {
  it("renders without crashing", () => {
    render(<TrackCardTable />);
  });

  it("has a table", () => {
    render(<TrackCardTable items={["item1", "item2"]} />);
    expect(screen.getByTestId("trackTable")).toBeInTheDocument();
    expect(screen.getByText("item1")).toBeInTheDocument();
    expect(screen.getByText("item2")).toBeInTheDocument();
  });

  it("has a table with no items if nothing is passed", () => {
    render(<TrackCardTable />);
    expect(screen.queryByTestId("trackTable")).toBeInTheDocument();
    expect(screen.queryByText("item1")).toBeNull();
  });

  it("when removing a duplicate item, it should only remove one", async () => {
    render(<TrackCardTable items={[]} />);
    const user = userEvent.setup();
    await user.type(screen.getByTestId("itemInput"), "pizza");
    await user.click(screen.getByText("Add"));
    await user.type(screen.getByTestId("itemInput"), "pizza");
    await user.click(screen.getByText("Add"));
    expect(screen.getAllByText("pizza").length).toBe(2);
    await user.click(screen.getAllByText("X")[0]);
    expect(screen.getAllByText("pizza").length).toBe(1);
  });
  test("the user should be able to remove items", async () => {
    render(<TrackCardTable items={[]} />);

    const user = userEvent.setup();
    await user.type(screen.getByTestId("itemInput"), "pizza");
    await user.click(screen.getByText("Add"));
    await user.type(screen.getByTestId("itemInput"), "pasta");
    await user.click(screen.getByText("Add"));
    expect(screen.getByText("pizza")).toBeInTheDocument();
    expect(screen.getByText("pasta")).toBeInTheDocument();
    await user.click(screen.getAllByText("X")[0]);
    expect(screen.queryByText("pizza")).not.toBeInTheDocument();
  });

  test("the user should be able to add multiple items", async () => {
    render(<TrackCardTable items={[]} />);
    const user = userEvent.setup();
    await user.type(screen.getByTestId("itemInput"), "pizza");
    await user.click(screen.getByText("Add"));
    await user.type(screen.getByTestId("itemInput"), "pasta");
    await user.click(screen.getByText("Add"));
    expect(screen.getByText("pizza")).toBeInTheDocument();
    expect(screen.getByText("pasta")).toBeInTheDocument();
  });
});
