if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

const MDCBanner = mdc.banner.MDCBanner;
const MDCCheckbox = mdc.checkbox.MDCCheckbox;
const MDCChip = mdc.chips.MDCChip;
const MDCChipSet = mdc.chips.MDCChipSet;
const MDCCircularProgress = mdc.circularProgress.MDCCircularProgress;
const MDCDataTable = mdc.dataTable.MDCDataTable;
const MDCDialog = mdc.dialog.MDCDialog;
const MDCDrawer = mdc.drawer.MDCDrawer;
const MDCFloatingLabel = mdc.floatingLabel.MDCFloatingLabel;
const MDCFormField = mdc.formField.MDCFormField;
const MDCIconButtonToggle = mdc.iconButton.MDCIconButtonToggle;
const MDCLineRipple = mdc.lineRipple.MDCLineRipple;
const MDCLinearProgress = mdc.linearProgress.MDCLinearProgress;
const MDCList = mdc.list.MDCList;
const MDCMenu = mdc.menu.MDCMenu;
const MDCMenuSurface = mdc.menuSurface.MDCMenuSurface;
const MDCNotchedOutline = mdc.notchedOutline.MDCNotchedOutline;
const MDCRadio = mdc.radio.MDCRadio;
const MDCRipple = mdc.ripple.MDCRipple;
const MDCSegmentedButton = mdc.segmentedButton.MDCSegmentedButton;
const MDCSelect = mdc.select.MDCSelect;
const MDCSlider = mdc.slider.MDCSlider;
const MDCSnackbar = mdc.snackbar.MDCSnackbar;
const MDCSwitch = mdc.switchControl.MDCSwitch;
const MDCTabBar = mdc.tabBar.MDCTabBar;
const MDCTextField = mdc.textField.MDCTextField;
const MDCTooltip = mdc.tooltip.MDCTooltip;
const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
