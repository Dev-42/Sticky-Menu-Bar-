//width of heading=254

window.addEventListener("scroll",function()
	{
		let navbar=document.getElementById("menu-bar");
		if(window.pageYOffset>=254)
		{
			navbar.setAttribute("class","sticky");
		}
		else{
			navbar.removeAttribute("class");
		}
	});
