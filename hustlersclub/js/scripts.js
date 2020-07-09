/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    
    (function(window) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  $('.navbar-toggler').blur(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-scrolled");
  //   } else {
  //     $("#mainNav").removeClass("navbar-scrolled");
  //   }
  // };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

/*for floating text of joote wala*/
  var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var body = document.body;
var html = document.documentElement;

var height = 0;
var h = 0;

var initiateHeights = function () {
  height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  console.log("heights were initialised:", height, h);
}

initiateHeights();

var resize = function (e) {
  var scrolled = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  height > 0 ? e[0].style.width = scrolled/(height-h) * 100 + "%" : e.style.width = 0 + "%";
}

document.onscroll = function () {
  resize(document.getElementsByClassName("indicator"));
};

window.onresize = function () {
  initiateHeights();
}

document.getElementById("homewala").innerHTML="";
$ajaxUtils.sendGetRequestnew("snippets/home.html",function(request)
  {
    var a= request.responseText;
    document.getElementById("homewala").innerHTML=a;
  });
document.getElementById("loginlink").addEventListener("click",function()
  {

    document.getElementById("homewala").innerHTML="";
    $ajaxUtils.sendGetRequestnew("snippets/loginform.html",function(request)
      {
        var b= request.responseText;
        document.getElementById("homewala").innerHTML=b;
         
            

      });
    
     
   const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('loginwala');

signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
);
signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
);
   
    
    


  });


document.getElementById("movingtext").addEventListener('click',function()
  {
    $ajaxUtils.sendGetRequestnew("snippets/home.html",function(request)
      {
        var movtext=request.responseText;
        document.getElementById("homewala").innerHTML="";
        document.getElementById("homewala").innerHTML=movtext;
      });
  });



})(window); // End of use strict
