const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;

const MDCTopAppBarFoundation = mdc.topAppBar.MDCTopAppBarFoundation;

// NavBar Controller
const navBar = new MDCTopAppBar(document.querySelector(".myNav"));

const MDCRipple = mdc.ripple.MDCRipple;

const MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;

document.querySelectorAll("mdc-button").forEach((el) => {
  const rippleEffect = new MDCRipple(el);
});

document.querySelectorAll("mdc-icon-button").forEach((el) => {
  const rippleEffect = new MDCRipple(el);
});
