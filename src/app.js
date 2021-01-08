import React from "react";
import ReactDOM from "react-dom";

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

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
};

const Action = ({ pickRandom, hasOptions }) => {
  return (
    <div>
      <button onClick={pickRandom} disabled={!hasOptions}>
        What should i do?
      </button>
    </div>
  );
};

const Options = ({ options, removeAll, deleteOption }) => {
  return (
    <div>
      <button onClick={removeAll}>Remove All</button>
      {options.length === 0 && <p>Please Add an Option to Get Started!</p>}
      {options.map((option, index) => (
        <Option
          index={index}
          deleteOption={deleteOption}
          key={option}
          option={option}
        />
      ))}
    </div>
  );
};

const Option = ({ option, index, deleteOption }) => {
  return (
    <div>
      {option}
      <button onClick={() => deleteOption(index)}>Delete</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: null,
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState({ error: error });
    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <label>
            Enter Option
            <br />
            <input type="text" name="option" />
          </label>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector("#root"));
