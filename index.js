var dialog = document.getElementById('dialog');
var disabledHandle, tabHandle, keyHandle;
var focusedElementBeforeDialogOpened;

function openDialog() {
  var dialog = document.getElementById('dialog');

  // disable all elements except the dialog.
  // -> also don't have to programmatically handle Tab and Shift+Tab.
  disabledHandle = ally.maintain.disabled({
    filter: dialog,
  });

  // a focus trap
  tabHandle = ally.maintain.tabFocus({
    context: dialog,
  });

  dialog.hidden = false;
  dialog.focus();
}

function closeDialog() {
  var dialog = document.getElementById('dialog');

  // re-enable elements previously-disabled by disabledHandle
  disabledHandle.disengage();

  // remove focus trap
  tabHandle.disengage();

  dialog.hidden = true;
}
