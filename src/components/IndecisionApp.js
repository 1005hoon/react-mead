import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.pickRandom = this.pickRandom.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.state = {
      options: [],
    };
  }
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

  removeAllOptions() {
    this.setState({ options: [] });
  }

  pickRandom() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    alert(option);
  }

  deleteOption(optionInd) {
    const options = this.state.options.filter(
      (option, index) => index !== optionInd
    );
    this.setState({ options });
  }

  addOption(option) {
    if (!option) {
      return "Enter Valid Option to Add";
    } else if (this.state.options.includes(option)) {
      return "This Item Already Exists!";
    } else {
      const options = [...this.state.options, option];
      this.setState({ options });
    }
  }

  render() {
    const { title, subtitle, options } = this.state;
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
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

export default IndecisionApp;
