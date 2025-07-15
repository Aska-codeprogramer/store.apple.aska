function products() {
  alert("can't buy it now,sorry");
  console.log ("now can not buy something");
}

function lainnya() {
  alert("click oke untuk melihat products lainnya");
  console.log("products lainnya");
}

function ToggleInfo() {
  const info = document.getElementById("moreInfo");
  if ( info.style.display === "none") {
    info.style.display = "block";
  }
  else {
    info.style.display = "none";
  }
}