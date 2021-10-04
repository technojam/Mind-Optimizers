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
