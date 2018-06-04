'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentHelpers = require('../../helpers/componentHelpers');

require('./Section.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Section = function Section(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'section',
    _extends({ className: 'section ' + (0, _componentHelpers.propsToHelperClasses)(props) }, props),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      children
    )
  );
};

Section.Title = function (_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'h1',
    { className: 'title' },
    children
  );
};

Section.Subtitle = function (_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    'h2',
    { className: 'subtitle' },
    children
  );
};

exports.default = Section;