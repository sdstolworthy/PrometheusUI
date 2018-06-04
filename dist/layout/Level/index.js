'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Level.css');

var _componentHelpers = require('../../helpers/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Level = function Level(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    { className: (0, _componentHelpers.propsToHelperClasses)(props) + ' level' },
    children
  );
};

Level.Item = function (_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'level-item' }, props),
    children
  );
};

Level.Left = function (_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'level-left' }, props),
    children
  );
};

Level.Right = function (_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ['children']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'level-right' }, props),
    children
  );
};

exports.default = Level;