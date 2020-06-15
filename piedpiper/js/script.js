(function(window)
  {
    $('.collapse').collapse('hide');
    document.addEventListener("DOMContentLoaded",function()
      {
    var b="<div class='text-center'><img src='loading.gif'></div>";
    document.getElementById("images").innerHTML=b;
    });
    
        (function()
          {
            $ajaxUtils.sendGetRequest("js/name.txt", function(request)
          {
            var a=request.responseText;
            document.getElementById("images").innerHTML=" ";
            document.getElementById("images").innerHTML=a;
          });

          })();
        
      
     
  })();
  








