import React, { useState } from "react";
import "./Dashboard.css";
import "react-toggle/style.css";
import Topbar from "./Topbar";
import { Table } from "./Table/Table";
import { Button } from "react-bootstrap";
import Toggle from "react-toggle";
import Modal from "./modal";

const Dashboard = (props1) => {
  const [showModal, setShowModal] = useState(true);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="head">
      <Topbar />
      <div style={{ marginLeft: "68vw" }}>
        <Modal />
      </div>
      {/* {showModal && (
        <AddModal
          showModal={showModal}
          openModal={openModal}
          closeModal={closeModal}
        />
      )} */}
      <Table />
      <div className="footer">
        <div className="colrTheme">
          <input
            type="button"
            style={{
              background: "rgb(255, 145, 0)",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
          <input
            type="button"
            style={{
              background: "rgb(0, 255, 72)",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
          <input
            type="button"
            style={{
              background: "rgb(38, 0, 255)",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
          <input
            type="button"
            style={{
              background: "rgb(255, 0, 251)",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
          <input
            type="button"
            style={{
              background: "rgb(255, 0, 0)",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <div
          className="DarkMode"
          // style={{ whiteSpace: "nowrap", backgroundColor: "white" }}
          style={{
            width: "10vw",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            borderRadius: "10px", // Set your desired border radius
            padding: "10px", // Optional: Add padding for better visual appeal
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle box shadow
          }}
        >
          <label>
            <span>Dark Mode</span>
            {"   "}
            <Toggle
              defaultChecked={false}
              icons={false}
              onChange={() => {
                setToggle(true);
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

// const AddModal = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setphone] = useState("0");

//   const resetFormFields = () => {
//     setName("");
//     setEmail("");
//     setphone("0");
//   };

//   console.log("Props1 : ", props);
//   const formSubmitHandler = async (event) => {
//     event.preventDefault();

//     let payload = {};
//     try {
//       if (validateForm("#HolidayForm")) {
//         const response = await fetch(`jhjhgjgjjg`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         });
//         const dataResponse = await response.json();
//         if (dataResponse.length) {
//           if (dataResponse[0].statusCode == "201") {
//             console.log(dataResponse[0].statusReason);
//             console.log(dataResponse[0].recordsCreated);
//             resetFormFields();
//             props.closeModal();
//             console.log("Holiday Added Successfully");
//           } else console.log(dataResponse[0].errorMessage);
//         } else console.log("Some Error occured.");
//       }
//     } catch {
//       console.log("Some Error occured.");
//     }
//   };

//   return (
//     <Modal show={props.showModal} onHide={props.closeModal}>
//       <Modal.Header closeButton onClick={props.closeModal}>
//         <Modal.Title>
//           <h6>Add a new Customer</h6>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={formSubmitHandler} id="HolidayForm" noValidate>
//           <div className="row">
//             <div className="col-md-6 form-group" id="Occasion">
//               <label className="form-label" htmlFor="holidayOccasion">
//                 Customer Name
//               </label>
//               <span className="requiredField">*</span>

//               <input
//                 required
//                 type="text"
//                 className="form-control"
//                 id="holidayOccasion"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <div className="error"></div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-8"></div>
//             <div className="col-md-4">
//               <button
//                 type="reset"
//                 onClick={resetFormFields}
//                 className="btn btn-primary resetButton"
//               >
//                 Reset
//               </button>
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{ float: "right" }}
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

export default Dashboard;
