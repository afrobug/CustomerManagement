import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "./Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { modalData, updateTable } = React.useContext(ModalContext);
  const [formData, setFormData] = React.useState({
    //image field with url
    id: "",
    firstName: "",
    email: "",
    phone: "",
  });
  console.log("modalData", modalData);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    updateTable((prevData) => [...prevData, formData]);
    handleClose();
  };

  //   React.useEffect(() => {
  //   }, [handleSubmit]);
  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        onClick={handleOpen}
        style={{ width: "200px", height: "50px" }}
      >
        Add Customer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <label htmlFor="nameInput">Name</label>
            <input
              id="nameInput"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="emailInput">Email</label>
            <input
              id="emailInput"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="phoneInput">Phone</label>
            <input
              id="phoneInput"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
