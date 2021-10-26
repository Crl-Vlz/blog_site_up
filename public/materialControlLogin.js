const MDCTextField = mdc.textField.MDCTextField;

const MDCTextFieldFoundation = mdc.textField.MDCTextFieldFoundation;

// Text Field for Login UI

const email = new MDCTextField(document.querySelector(".mail"));
const username = new MDCTextField(document.querySelector(".username"));
const password = new MDCTextField(document.querySelector(".password"));

// Button ripple

const MDCRipple = mdc.ripple.MDCRipple;

const MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;

const buttonRipple = [].map.call(
  document.querySelectorAll(".mdc-button"),
  function (el) {
    return new MDCRipple(el);
  }
);
