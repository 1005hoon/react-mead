import React, { Component } from "react";

class AddOption extends Component {
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

export default AddOption;
