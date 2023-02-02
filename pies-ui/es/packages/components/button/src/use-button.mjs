import { inject, computed, ref } from "vue";
import { buttonGroupContextKey } from "../../../tokens/button-group.mjs";
function handleHref(props) {
  props.href ? window.open(props.href, props.target) : null;
  return;
}
const useButton = (props, emit) => {
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
  const _size = computed(() => props.size || (buttonGroupContext == null ? void 0 : buttonGroupContext.size) || "");
  const _secondary = computed(() => props.secondary || (buttonGroupContext == null ? void 0 : buttonGroupContext.secondary) || false);
  const _ref = ref();
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
export {
  useButton
};
