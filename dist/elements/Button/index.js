'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('./Button.css');

var _componentHelpers = require('../../helpers/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = {};
Button.ExternalLink = function (_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ['children', 'href']);

  return _react2.default.createElement(
    'a',
    { href: href, className: 'button ' + (0, _componentHelpers.propsToHelperClasses)(props) },
    children
  );
};
Button.Link = function (_ref2) {
  var children = _ref2.children,
      to = _ref2.to,
      props = _objectWithoutProperties(_ref2, ['children', 'to']);

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: to, className: 'button ' + (0, _componentHelpers.propsToHelperClasses)(props) },
    children
  );
};

exports.default = Button;