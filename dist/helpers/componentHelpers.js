'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsToHelperClasses = propsToHelperClasses;
function propsToHelperClasses() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return Object.keys(props)
  // only work with prpos that evaluate to truthy
  .filter(function (prop) {
    return props[prop];
  })
  // convert to kebab-case
  .map(function (prop) {
    return prop.replace(/([a-z])([A-Z0-9])/g, '$1-$2').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  })
  // only return the classes with the proper prefix
  .filter(function (propClass) {
    return propClass.indexOf('is-') === 0 || propClass.indexOf('has-') === 0;
  })
  // convert to string
  .join(' ');
}

exports.default = { propsToHelperClasses: propsToHelperClasses };