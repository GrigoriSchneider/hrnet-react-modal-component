"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Modal = props => {
  return /*#__PURE__*/_react.default.createElement(Container, {
    modalStatus: props.modalStatus,
    onClick: props.onClickOutside ? props.onClickOutside : props.onConfirm
  }, /*#__PURE__*/_react.default.createElement(ModalContainer, {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement(ModalMessage, null, " User Created succesfully ", props.message ? props.message : "Confirm", " "), /*#__PURE__*/_react.default.createElement(Button, {
    onClick: props.onConfirm
  }, /*#__PURE__*/_react.default.createElement("p", null, "Submit"))));
};
Modal.propTypes = {
  modalStatus: _propTypes.default.bool.isRequired,
  onConfirm: _propTypes.default.func.isRequired,
  message: _propTypes.default.string,
  onClickOutside: _propTypes.default.func
};
var _default = Modal;
exports.default = _default;
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  cursor: default;\n  width: 100vw;\n  height: 100vh;\n  background-color: #c6e512;\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.75s;\n\n  :hover {\n    background-color: #6d7e1e;\n  }\n"])), props => props.modalStatus ? "flex" : "none");
const ModalContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: fit-content;\n  height: 60px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 0;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 8px 5px 25px -6px rgba(0, 0, 0, 0.4);\n"])));
const Button = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: roboto;\n  height: 100%;\n  width: 60px;\n  cursor: pointer;\n  border-radius: 0 5px 5px 0;\n  background-color: #6d7e1e;\n  padding: auto;\n  border: 0;\n"])));
const ModalMessage = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: roboto;\n  color: \"#32D7F0\";\n  margin-left: 1rem;\n  margin-right: 1rem;\n"])));