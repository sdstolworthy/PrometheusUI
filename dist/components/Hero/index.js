"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentHelpers = require("../../helpers/componentHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Hero = function Hero(_ref) {
  var children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["children", "style"]);

  return _react2.default.createElement(
    "div",
    { style: style, className: "hero " + (0, _componentHelpers.propsToHelperClasses)(props) },
    children
  );
};

Hero.Body = function (_ref2) {
  var children = _ref2.children,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["children", "style"]);

  return _react2.default.createElement(
    "div",
    _extends({
      style: style,
      className: "hero-body " + (0, _componentHelpers.propsToHelperClasses)(props)
    }, props),
    _react2.default.createElement(
      "div",
      { className: "container" },
      children
    )
  );
};

Hero.Title = function (_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    "h1",
    { className: "title" },
    children
  );
};

Hero.Subtitle = function (_ref4) {
  var children = _ref4.children;
  return _react2.default.createElement(
    "h2",
    { className: "subtitle" },
    children
  );
};

Hero.CallToAction = function (_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return _react2.default.createElement(
    "a",
    _extends({ className: "button is-black is-inverted is-outlined " + (0, _componentHelpers.propsToHelperClasses)(props) }, props),
    children
  );
};

exports.default = Hero;