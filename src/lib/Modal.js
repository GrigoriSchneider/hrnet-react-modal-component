import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <Container
      modalStatus={props.modalStatus}
      onClick={props.onClickOutside ? props.onClickOutside : props.onConfirm}
    >
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalMessage>
          {" User Created succesfully "}
          {props.message ? props.message : "Confirm"}{" "}
        </ModalMessage>
        <Button onClick={props.onConfirm}>
          <p>Submit</p>
        </Button>
      </ModalContainer>
    </Container>
  );
};

Modal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string,
  onClickOutside: PropTypes.func,
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  cursor: default;
  width: 100vw;
  height: 100vh;
  background-color: #c6e512;
  display: ${(props) => (props.modalStatus ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  transition: background-color 0.75s;

  :hover {
    background-color: #6d7e1e;
  }
`;

const ModalContainer = styled.div`
  width: fit-content;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  padding: 0;
  cursor: default;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 30px -6px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  height: 100%;
  width: 60px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  background-color: #6d7e1e;
  padding: auto;
  border: 0;
`;

const ModalMessage = styled.span`
  color: "#32D7F0";
  margin-left: 20px;
  margin-right: 20px;
`;
