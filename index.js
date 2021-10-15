document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
      showImage();
      setInterval(hideImage, 4000);
    });
  });
  function hideImage(){
    document.getElementById( "imgHideShow" ).style.display = "none" ;
    document.getElementById( "button" ).style.display = "block" ;
  }
  function showImage(){
    document.getElementById( "imgHideShow" ).style.display = "block" ;
  }
  $(document).ready(function () {
    $(".tooltip-text").tooltip({container:'body'});
  });

  //Get the button
  let mybutton = document.getElementById("button");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }