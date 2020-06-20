(function(window)
  {
    $('.collapse').collapse('hide');
    document.addEventListener("DOMContentLoaded",function()
      {
    var b="<div class='text-center'><img src='loading.gif'></div>";
    document.getElementById("images").innerHTML=b;
    });
    var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  document.getElementById("navbutton").addEventListener("blur",function()
    {
      $('.collapse').collapse('hide');
    });
        // (function()
        //   {
        //     $ajaxUtils.sendGetRequest("js/name.txt", function(request)
        //   {
        //     var a=request.responseText;
        //     document.getElementById("images").innerHTML=" ";
        //     document.getElementById("images").innerHTML=a;
        //   });

        //   })();
        
  })();
  








