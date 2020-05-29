(function (window)
	{	
		var utils={};
		function requestGetObject()
		{	
			if(window.XMLHttpRequest)
			{
				return (new XMLHttpRequest());
				console.log("yes");
			}
			else
			{
				return (null); 
				console.log("yes");
			}
		}

		utils.sendgetrequest= function(url,responsehandler)
		{	
			var request=requestGetObject();
			request.onreadystatechange=
			function ()
			{
				handleresponse(request,responsehandler);
			};
			request.open("GET",url,true);
			request.send(null);
		};
		function handleresponse(request,responsehandler)
		{
			if((request.readystate==4) && (request.status==200))
			{
				responsehandler(request);
			}
		}
		window.$utils=utils;

	})(window);