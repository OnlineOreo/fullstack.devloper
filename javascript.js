$(document).ready(function () {
  $("#read-more-btn").click(function () {
    // var readmorebtn = document.getElementById("read-more-btn");
    var readmorepara = document.getElementById("read-more-para");
    if (readmorepara.style.display == "block") {
      $("#read-more-para").hide();
      $("#read-more-btn").html("Read More");
    } else {
      $("#read-more-para").show();
      $("#read-more-btn").html("Read Less");
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

//  $(".main-box-slider").cycle({
//     // fx:'scrollLeft',
//   }) 

  $("#hamburger").click(function(){
    var navbarlinks = document.getElementById("navbarlinks");
    if(navbarlinks.style.display == "flex"){
        $(".navbar-links").css({'display':'none'});
    }
    else{
      $(".navbar-links").css({'display':'flex'});
    }
  })
});
