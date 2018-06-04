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

var Modal = function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, ["children", "onClose"]);

  return _react2.default.createElement(
    "div",
    _extends({ className: "modal " + (0, _componentHelpers.propsToHelperClasses)(props) }, props),
    _react2.default.createElement("div", { className: "modal-background", onClick: onClose }),
    _react2.default.createElement(
      "div",
      { className: "modal-content" },
      children
    ),
    _react2.default.createElement("button", { className: "modal-close is-large", "aria-label": "close", onClick: onClose })
  );
};

exports.default = Modal;