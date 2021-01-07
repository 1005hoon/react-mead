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
    _this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of computer",
      options: ["thing one", "thing two", "thing three", "thing four", "thing five"]
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
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
        React.createElement(Header, { title: title, subTitle: subtitle }),
        React.createElement(Action, { pickRandom: this.pickRandom, hasOptions: options.length > 0 }),
        React.createElement(Options, { removeAll: this.removeAllOptions, options: options }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subTitle = _props.subTitle;

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
            subTitle
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          pickRandom = _props2.pickRandom,
          hasOptions = _props2.hasOptions;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: pickRandom, disabled: !hasOptions },
          "What should i do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _props3 = this.props,
          options = _props3.options,
          removeAll = _props3.removeAll;


      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: removeAll },
          "Remove All"
        ),
        "Options: ",
        options.length,
        options.map(function (option) {
          return React.createElement(Option, { key: option, option: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var option = this.props.option;

      return React.createElement(
        "div",
        null,
        option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.onFormSubmit = _this6.onFormSubmit.bind(_this6);
    _this6.state = {
      error: null
    };
    return _this6;
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      e.target.elements.option.value = "";
      var error = this.props.addOption(option);
      this.setState({ error: error });
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
