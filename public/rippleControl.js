// Button ripple

const MDCRipple = mdc.ripple.MDCRipple;

const MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;

const buttonRipple = [].map.call(
  document.querySelectorAll(".mdc-button"),
  function (el) {
    return new MDCRipple(el);
  }
);

const iconRipple = [].map.call(
  document.querySelectorAll(".mdc-icon-button"),
  function (el) {
    return new MDCRipple(el);
  }
);

const fabRipple = new MDCRipple(document.querySelector(".mdc-fab"));

//const btnPrimary = new MDCRipple(document.getElementById("btn-login"));
