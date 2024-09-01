import { Modal, Input } from "@mui/material";

interface AddItemModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const AddItemModal = ({ isOpen, handleClose }: AddItemModalProps) => {
  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <div>
          <h1>Add Item</h1>
          <Input data-testid="itemInput" placeholder="Item Name" />
          <button data-testid="submitButton">Submit</button>
          <button data-testid="cancelButton" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddItemModal;
