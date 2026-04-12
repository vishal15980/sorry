$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Open when clicking envelope
  envelope.click(function () {
    openEnvelope();
  });

  // Open button
  btn_open.click(function () {
    openEnvelope();
  });

  // Close button
  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");

    // Trigger hearts animation (optional class)
    $(".heart").addClass("active");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");

    // Reset hearts animation
    $(".heart").removeClass("active");
  }
});
