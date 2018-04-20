var a = false
document.addEventListener("DOMContentLoaded", function(event) {
  a = true
  window.scrollTo(0,1)
    console.log("DOM fully loaded and parsed");
  })
console.log("DOMContentLoaded?", a);
