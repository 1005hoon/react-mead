import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, setSelectedOption }) => {
  return (
    <div>
      <Modal
        onRequestClose={setSelectedOption}
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
      >
        <h3>Selected Option</h3>
        {selectedOption && <p>{selectedOption}</p>}
        <button onClick={setSelectedOption}>Okay</button>
      </Modal>
    </div>
  );
};

export default OptionModal;
