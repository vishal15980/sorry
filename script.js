function openEnvelope() {
  document.getElementById("envelope").classList.remove("close");
  document.getElementById("envelope").classList.add("open");
}

function closeEnvelope() {
  document.getElementById("envelope").classList.remove("open");
  document.getElementById("envelope").classList.add("close");
}
