$(document).ready(function () {
  // ===== ENVELOPE LOGIC (ORIGINAL - NO CHANGES) =====
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    openEnvelope();
  });
  btn_open.click(function () {
    openEnvelope();
  });
  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }
  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }

  // ===== NEW SCREEN NAVIGATION LOGIC =====

  // Screen 1: Choice Screen - Bala vs Gauri
  $("#balaBtn").click(function () {
    goToEnvelopeScreen();
  });

  $("#gauriBtn").click(function () {
    goToGauriChoiceScreen();
  });

  // Screen 2: Envelope Section - Back to Menu
  $("#backBtn").click(function () {
    goToChoiceScreen();
    closeEnvelope(); // Close envelope when going back
  });

  // Screen 3: Gauri Choice Screen
  $("#backFromGauri").click(function () {
    goToChoiceScreen();
  });

  $("#howMuchLoveBtn").click(function () {
    goToRomanticScreen();
  });

  $("#noSecondOptionBtn").click(function () {
    // You can add different behavior here if needed
    goToRomanticScreen();
  });

  // Screen 4: Romantic Screen
  $("#backFromRomantic").click(function () {
    goToGauriChoiceScreen();
  });

  // Dabao Button - Show Picture
  $("#dabaoBtn").click(function () {
    showPicture();
  });

  // ===== SCREEN TRANSITION FUNCTIONS =====

  function hideAllScreens() {
    $("#choiceScreen").hide().removeClass("active");
    $("#envelopeSection").hide();
    $("#resetSection").hide();
    $("#gauriChoiceScreen").hide();
    $("#romanticScreen").hide();
  }

  function goToChoiceScreen() {
    hideAllScreens();
    $("#choiceScreen").show().addClass("active");
  }

  function goToEnvelopeScreen() {
    hideAllScreens();
    $("#envelopeSection").show();
    $("#resetSection").show();
  }

  function goToGauriChoiceScreen() {
    hideAllScreens();
    $("#gauriChoiceScreen").show();
  }

  function goToRomanticScreen() {
    hideAllScreens();
    $("#romanticScreen").show();
    
    // Animate text lines with staggered delays
    $(".text-line").each(function () {
      $(this).css("opacity", "0");
      $(this).addClass("animated");
    });
  }

  function showPicture() {
    // Hide Dabao button
    $("#dabaoButtonContainer").fadeOut(500);

    // Show picture section with animation
    $("#pictureSection").show();
    
    // Animate the image
    setTimeout(function () {
      $("#specialPicture").fadeIn(800);
    }, 100);

    // Make hearts appear and animate
    $(".floating-heart").each(function () {
      $(this).css("opacity", "0").animate({ opacity: 0.8 }, 500);
    });
  }

  // Initialize - Show choice screen
  goToChoiceScreen();
});
