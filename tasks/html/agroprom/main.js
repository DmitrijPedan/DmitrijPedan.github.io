// header slider
$(document).ready(function(){
    $('.header-slider').bxSlider({
      auto: 'true',
      nextSelector: 'null'
    });
  });

// reviews slider
  $(document).ready(function(){
    $('.reviews-slider').bxSlider({
      auto: 'true',
      nextSelector: 'null'
    });
  });

  // collapse navbar
var coll = document.getElementsByClassName ("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var navbarContent = this.nextElementSibling;
    if (navbarContent.style.display === "flex") {
      navbarContent.style.display = "none";
    } 
    else {
      navbarContent.style.display = "flex";
    }
  });
}