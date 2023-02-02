const Props = {
  type: {
    type: String,
    default: () => void 0,
    validator(value) {
      return ["default", "primary", "success", "info", "warning", "danger", "text"].includes(value);
    }
  },
  size: {
    type: String,
    default: () => void 0,
    validator(value) {
      return ["small", "default", "large"].includes(value);
    }
  },
  secondary: {
    type: Boolean,
    default: () => false
  },
  href: {
    type: String,
    default: () => ""
  },
  target: {
    type: String,
    default: () => ""
  },
  dashed: {
    type: Boolean,
    default: () => false
  },
  loading: {
    type: Boolean,
    default: () => false
  },
  block: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  circle: {
    type: Boolean,
    default: () => false
  },
  round: {
    type: Boolean,
    default: () => false
  },
  strong: {
    type: Boolean,
    default: () => false
  },
  color: {
    type: String,
    default: () => void 0
  },
  textColor: {
    type: String,
    default: () => void 0
  },
  icon: {
    type: String,
    default: () => void 0
  },
  iconPlacement: {
    type: String,
    default: () => "left",
    validator(value) {
      return ["left", "right"].includes(value);
    }
  },
  autofocus: {
    type: Boolean,
    default: () => false
  },
  ghost: {
    type: Boolean,
    default: () => false
  },
  nativeType: {
    type: String,
    default: () => "button",
    validator(value) {
      return ["button", "submit", "reset"].includes(value);
    }
  }
};
const Emits = {
  click: (evt) => evt
};
export {
  Emits,
  Props
};
