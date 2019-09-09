$(document).ready(function()
{
	$('[data-toggle="tooltip"]').tooltip();
});

function buybook(bookid,id,user)
{
	//console.log("user is :"+JSON.stringify(user));
	if(user!= true)
	{
		alert("Login to buy or add books");
	}
	else
	{
		console.log("function is :"+JSON.stringify(id));

		var size;
		if($('body').height() > $(window).height())
		{
			size = $('body').height(); 
		}
		else
		{
			size = $(window).height();	
		}

		$("#cover").height(size);
		$("#cover").css("display", "block").fadeIn(100);		
		$('html').css('overflow','hidden');	
		$.ajax({
		    type: "POST",
		    url: "https://discountedtrade.herokuapp.com/buybook",
		    data: {id : bookid},
		    dataType: "text",
		    success: function(info)
		    
		    {     
		    	console.log("Callback info is :"+info);	
		    	$('#'+id).html("Sold").attr("disabled",true);
		    	$('html').css('overflow','visible');
		    	$("#cover").fadeOut(100);
		    	$("#cover").css("display", "none");
		    	alert("Thanks for showing interest. The seller will contact you shortly on your mail id");
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown)
		    {
		    	$('html').css('overflow','visible');
		    	$("#cover").fadeOut(100);
		    	$("#cover").css("display", "none");  
		    	alert("Error while buying.Please try again");
		        console.log('err: '+XMLHttpRequest.status);
		    }
	    });	
	}	
}

