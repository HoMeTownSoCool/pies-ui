"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const buttonGroup = require("../../../tokens/button-group.js");
function handleHref(props) {
  props.href ? window.open(props.href, props.target) : null;
  return;
}
const useButton = (props, emit) => {
  const buttonGroupContext = vue.inject(buttonGroup.buttonGroupContextKey, void 0);
  const _type = vue.computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
  const _size = vue.computed(() => props.size || (buttonGroupContext == null ? void 0 : buttonGroupContext.size) || "");
  const _secondary = vue.computed(() => props.secondary || (buttonGroupContext == null ? void 0 : buttonGroupContext.secondary) || false);
  const _ref = vue.ref();
  const handleClick = (evt) => {
    handleHref(props);
    emit("click", evt);
  };
  return {
    _type,
    _size,
    _secondary,
    _ref,
    handleClick
  };
};
exports.useButton = useButton;
