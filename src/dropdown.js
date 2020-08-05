function show_hide() {
  let click = document.getElementsById("#createpost__drop-content");
  if (click.style.display === "none") {
    console.log("clicked");
  }
}

function init() {
  show_hide;
}

init();
