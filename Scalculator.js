var sClassPrice = 62000;

var line_price = new Array();
line_price["none"]=0;
line_price["luxury"]=8000;
line_price["brabus"]=34000;
line_price["amg"]=20000;

var engine_price = new Array();
engine_price["none"]=0;
engine_price["300"]=0;
engine_price["p"]=0;
engine_price["400"]=4000;
engine_price["500"]=9000;
engine_price["63"]=11000;
engine_price["65"]=15000;
engine_price["b65"]=21000;

var transmission_price = new Array();
transmission_price["none"]=0;
transmission_price["7automatic"]=2500;
transmission_price["automatic"]=5500;

var distribution_price = new Array();
distribution_price["none"]=0;
distribution_price["no"]=0;
distribution_price["yes"]=7500;

var color_price = new Array();
color_price["none"]=0;
color_price["black"]=0;
color_price["white"]=0;
color_price["brown"]=0;
color_price["sblack"]=2200;
color_price["pwhite"]=2200;
color_price["mbrown"]=2500;
color_price["bblack"]=8800;

var interior_price = new Array();
interior_price["none"]=0;
interior_price["aspecial"]=8000;
interior_price["bspecial"]=11000;
interior_price["bfleather"]=4500;
interior_price["wfleather"]=4500;
interior_price["special"]=6000;

function getLinePrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["line"];
	

	return sClassPrice + line_price[selected.value];
}

function getEnginePrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["engine"];
	
	return engine_price[selected.value];
}

function getTransmissionPrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["transmission"];
	
	return transmission_price[selected.value];
}

function getDistributionPrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["4matic"];
	
	return distribution_price[selected.value];
}

function getColorPrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["color"];
	
	return color_price[selected.value];
}

function getInteriorPrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["interior"];
	
	return interior_price[selected.value];
}

function getTotal()
{
	var total = getLinePrice() + getDistributionPrice() + getEnginePrice() + getTransmissionPrice() + getColorPrice() + getInteriorPrice();
	
	document.getElementById('totalPrice').innerHTML = "Price: "+total+"$";
}