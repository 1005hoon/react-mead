import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    const data = localStorage.getItem("options");
    const options = JSON.parse(data);
    if (options) {
      this.setState({ options });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const data = JSON.stringify(this.state.options);
      localStorage.setItem("options", data);
    }
  }

  removeAllOptions = () => {
    this.setState({ options: [] });
  };

  setSelectedOption = () => {
    this.setState({ selectedOption: undefined });
  };

  pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    this.setState({ selectedOption: option });
  };

  deleteOption = (optionInd) => {
    const options = this.state.options.filter(
      (option, index) => index !== optionInd
    );
    this.setState({ options });
  };

  addOption = (option) => {
    if (!option) {
      return "Enter Valid Option to Add";
    } else if (this.state.options.includes(option)) {
      return "This Item Already Exists!";
    } else {
      const options = [...this.state.options, option];
      this.setState({ options });
    }
  };

  render() {
    const { title, subtitle, options, selectedOption } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action pickRandom={this.pickRandom} hasOptions={options.length > 0} />
        <Options
          removeAll={this.removeAllOptions}
          deleteOption={this.deleteOption}
          options={options}
        />
        <AddOption addOption={this.addOption} />
        <OptionModal
          setSelectedOption={this.setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
