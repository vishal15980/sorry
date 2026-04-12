$(document).ready(function () {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Open on button click
  btn_open.click(function () {
    envelope.removeClass("close").addClass("open");
  });

  // Close on button click
  btn_reset.click(function () {
    envelope.removeClass("open").addClass("close");
  });

  // Also open if envelope clicked
  envelope.click(function () {
    envelope.removeClass("close").addClass("open");
  });

});
