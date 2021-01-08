import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, setSelectedOption }) => {
  return (
    <div>
      <Modal
        onRequestClose={setSelectedOption}
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={300}
        className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        {selectedOption && <p className="modal__body">{selectedOption}</p>}
        <button className="button" onClick={setSelectedOption}>
          Okay
        </button>
      </Modal>
    </div>
  );
};

export default OptionModal;
