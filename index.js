document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
      showImage();
      setInterval(hideImage, 1000);
    });
  });
  function hideImage(){
    document.getElementById( "imgHideShow" ).style.display = "none" ;
  }
  function showImage(){
    document.getElementById( "imgHideShow" ).style.display = "block" ;
  }