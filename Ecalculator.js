var eClassPrice = 44000;

var body_price = new Array();
body_price["none"]=0;
body_price["sedan"]=0;
body_price["estate"]=6000;
body_price["coupe"]=13500;

var line_price = new Array();
line_price["none"]=0;
line_price["luxury"]=5000;
line_price["comfort"]=2500;
line_price["amg"]=11000;

var engine_price = new Array();
engine_price["none"]=0;
engine_price["220"]=0;
engine_price["p"]=0;
engine_price["300"]=3000;
engine_price["pp"]=2000;
engine_price["400"]=4000;
engine_price["63"]=9000;
engine_price["65"]=11000;

var transmission_price = new Array();
transmission_price["none"]=0;
transmission_price["6automatic"]=2500;
transmission_price["automatic"]=5500;

var color_price = new Array();
color_price["none"]=0;
color_price["black"]=0;
color_price["white"]=0;
color_price["brown"]=500;
color_price["blue"]=500;
color_price["sblack"]=2200;
color_price["pwhite"]=2200;
color_price["mbrown"]=2500;

var interior_price = new Array();
interior_price["none"]=0;
interior_price["bhleather"]=2500;
interior_price["whleather"]=2500;
interior_price["bfleather"]=4500;
interior_price["wfleather"]=4500;
interior_price["special"]=6000;

function getBodyPrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["body"];
	
	return eClassPrice + body_price[selected.value];
}

function getLinePrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["line"];
	

	return line_price[selected.value];
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
	var total = getLinePrice() + getBodyPrice() + getEnginePrice() + getTransmissionPrice() + getColorPrice() + getInteriorPrice();
	
	document.getElementById('totalPrice').innerHTML = "Price: "+total+"$";
}