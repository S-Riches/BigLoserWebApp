import {
  Modal,
  Input,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";

interface AddItemModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const AddItemModal = ({ isOpen, handleClose }: AddItemModalProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [itemList, setItemList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    setItemList([...itemList, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item Name:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item}
                      <Button
                        onClick={() =>
                          setItemList(itemList.filter((i) => i !== item))
                        }
                      >
                        X
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default AddItemModal;
