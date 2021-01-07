"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.removeAllOptions = _this.removeAllOptions.bind(_this);
    _this.pickRandom = _this.pickRandom.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.deleteOption = _this.deleteOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = localStorage.getItem("options");
      var options = JSON.parse(data);
      if (options) {
        this.setState({ options: options });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var data = JSON.stringify(this.state.options);
        localStorage.setItem("options", data);
      }
    }
  }, {
    key: "removeAllOptions",
    value: function removeAllOptions() {
      this.setState({ options: [] });
    }
  }, {
    key: "pickRandom",
    value: function pickRandom() {
      var randomIndex = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomIndex];
      alert(option);
    }
  }, {
    key: "deleteOption",
    value: function deleteOption(optionInd) {
      var options = this.state.options.filter(function (option, index) {
        return index !== optionInd;
      });
      this.setState({ options: options });
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (!option) {
        return "Enter Valid Option to Add";
      } else if (this.state.options.includes(option)) {
        return "This Item Already Exists!";
      } else {
        var options = [].concat(_toConsumableArray(this.state.options), [option]);
        this.setState({ options: options });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          title = _state.title,
          subtitle = _state.subtitle,
          options = _state.options;

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { pickRandom: this.pickRandom, hasOptions: options.length > 0 }),
        React.createElement(Options, {
          removeAll: this.removeAllOptions,
          deleteOption: this.deleteOption,
          options: options
        }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        title
      ),
      React.createElement(
        "h2",
        null,
        subtitle
      )
    )
  );
};

Header.defaultProps = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer"
};

var Action = function Action(_ref2) {
  var pickRandom = _ref2.pickRandom,
      hasOptions = _ref2.hasOptions;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: pickRandom, disabled: !hasOptions },
      "What should i do?"
    )
  );
};

var Options = function Options(_ref3) {
  var options = _ref3.options,
      removeAll = _ref3.removeAll,
      deleteOption = _ref3.deleteOption;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    options.length === 0 && React.createElement(
      "p",
      null,
      "Please Add an Option to Get Started!"
    ),
    options.map(function (option, index) {
      return React.createElement(Option, {
        index: index,
        deleteOption: deleteOption,
        key: option,
        option: option
      });
    })
  );
};

var Option = function Option(_ref4) {
  var option = _ref4.option,
      index = _ref4.index,
      deleteOption = _ref4.deleteOption;

  return React.createElement(
    "div",
    null,
    option,
    React.createElement(
      "button",
      { onClick: function onClick() {
          return deleteOption(index);
        } },
      "Delete"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
    _this2.state = {
      error: null
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      this.setState({ error: error });
      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.onFormSubmit },
          React.createElement(
            "label",
            null,
            "Enter Option",
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "option" })
          ),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector("#root"));
