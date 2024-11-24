import TrackCardTable from "../TrackingTable/TrackCardTable";
import { useState } from "react";

const AddItemModal = () => {
  const [itemList, setItemList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    setItemList([...itemList, inputValue]);
    setInputValue("");
  };

  return (
    <dialog id="my_modal_1">
      <div className="modal-box">
        <div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1>Add Item</h1>
          <input
            data-testid="itemInput"
            placeholder="Item Name"
            value={inputValue}
            onChange={(value) => setInputValue(value.target.value)}
          />
          <button data-testid="submitButton" onClick={() => handleAddItem()}>
            Add
          </button>
          <TrackCardTable items={itemList} />
        </div>
      </div>
    </dialog>
  );
};

export default AddItemModal;
