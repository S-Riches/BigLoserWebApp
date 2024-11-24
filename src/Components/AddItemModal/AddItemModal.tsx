import TrackCardTable from "../TrackingTable/TrackCardTable";
import { useState } from "react";

interface AddItemModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const AddItemModal = ({ isOpen, handleClose }: AddItemModalProps) => {
  const [itemList, setItemList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    setItemList([...itemList, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <modal open={isOpen} onClose={handleClose}>
        <div>
          <h1>Add Item</h1>
          <Input
            data-testid="itemInput"
            placeholder="Item Name"
            value={inputValue}
            onChange={(value) => setInputValue(value.target.value)}
          />
          <button data-testid="submitButton" onClick={() => handleAddItem()}>
            Add
          </button>
          <button data-testid="cancelButton" onClick={handleClose}>
            Cancel
          </button>
          <TrackCardTable items={itemList} />
        </div>
      </modal>
    </div>
  );
};

export default AddItemModal;
