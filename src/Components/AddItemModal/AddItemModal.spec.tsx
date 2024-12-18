import { render, screen } from "@testing-library/react";
import AddItemModal from "./AddItemModal";
import userEvent from "@testing-library/user-event";

describe("Add Item Modal Tests", () => {
  const mockHandleClose = vi.fn();
  test("renders without crashing", () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);
  });
  test("renders an input field", () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);

    expect(screen.getByTestId("itemInput")).toBeInTheDocument();
  });
  test("renders a submit button", () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);

    expect(screen.getByTestId("submitButton")).toBeInTheDocument();
  });
  test("renders a cancel button", () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);

    expect(screen.getByTestId("cancelButton")).toBeInTheDocument();
  });
  test("renders a heading", () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);

    expect(screen.getByText("Add Item")).toBeInTheDocument();
  });
  test("renders a label of item after input", async () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);

    const user = userEvent.setup();
    expect(screen.getByTestId("itemInput")).toBeInTheDocument();
    await user.type(screen.getByTestId("itemInput"), "pizza");
    await user.click(screen.getByText("Add"));
    // maybe add msw in here to test the api call? for now we are just going to add items in as text
    expect(screen.getByText("pizza")).toBeInTheDocument();
  });

  test("when the user clicks off the modal, it should trigger the handleClose function", async () => {
    render(<AddItemModal isOpen={true} handleClose={mockHandleClose} />);
    await userEvent.click(screen.getByText("Cancel"));
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
