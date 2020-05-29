(function()
	{

		$(".collapse").collapse('hide');

// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
   
        console.log("fdg");
        // Call server to get the name
        $utils.sendgetrequest("js/name.txt", 
            function (request) {
              var name = request.responseText();
              document.querySelector("#dis").innerHTML = "<h2>Hello " +name + "!</h2>";
              console.log("gdfgff");
             
            });

        
     
  });
	})(window);
  
