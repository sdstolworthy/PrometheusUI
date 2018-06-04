'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('./navbar.css');

var _componentHelpers = require('../../helpers/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      logo = _ref.logo,
      props = _objectWithoutProperties(_ref, ['children', 'logo']);

  return _react2.default.createElement(
    'nav',
    { className: 'navbar ' + (0, _componentHelpers.propsToHelperClasses)(props) },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-brand' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', className: 'navbar-item' },
          _react2.default.createElement('img', { src: logo })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'navbar-menu' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-end' },
          children
        )
      )
    )
  );
};
Navbar.Link = function (_ref2) {
  var children = _ref2.children,
      to = _ref2.to,
      props = _objectWithoutProperties(_ref2, ['children', 'to']);

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: to, className: 'navbar-item ' + (0, _componentHelpers.propsToHelperClasses)(props) },
    children
  );
};

Navbar.Item = function (_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ['children']);

  return _react2.default.createElement(
    'div',
    { className: 'navbar-item ' + (0, _componentHelpers.propsToHelperClasses)(props) },
    children
  );
};

exports.default = Navbar;