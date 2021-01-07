class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.pickRandom = this.pickRandom.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of computer",
      options: [
        "thing one",
        "thing two",
        "thing three",
        "thing four",
        "thing five",
      ],
    };
  }

  removeAllOptions() {
    this.setState({ options: [] });
  }

  pickRandom() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    alert(option);
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
        <Header title={title} subTitle={subtitle} />
        <Action pickRandom={this.pickRandom} hasOptions={options.length > 0} />
        <Options removeAll={this.removeAllOptions} options={options} />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    const { pickRandom, hasOptions } = this.props;
    return (
      <div>
        <button onClick={pickRandom} disabled={!hasOptions}>
          What should i do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options, removeAll } = this.props;

    return (
      <div>
        <button onClick={removeAll}>Remove All</button>
        Options: {options.length}
        {options.map((option) => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    const { option } = this.props;
    return <div>{option}</div>;
  }
}

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
    e.target.elements.option.value = "";
    const error = this.props.addOption(option);
    this.setState({ error: error });
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
