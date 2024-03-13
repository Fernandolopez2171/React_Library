import React from "react";
import "../assets/Styles/Modal.css";

const Modal = ({ title, body, buttons }) => {
  return (
    <div className="modal-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div>{body}</div>
      {buttons}
    </div>
  );
};

export default Modal;
