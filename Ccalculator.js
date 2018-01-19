var cClassPrice = 30000;

var body_price = new Array();
body_price["none"]=0;
body_price["sedan"]=0;
body_price["estate"]=6000;
body_price["coupe"]=13500;

var line_price = new Array();
line_price["none"]=0;
line_price["sport"]=2000;
line_price["comfort"]=4000;
line_price["amg"]=7000;

var engine_price = new Array();
engine_price["none"]=0;
engine_price["160"]=0;
engine_price["180"]=1500;
engine_price["200"]=1000;
engine_price["250"]=2000;
engine_price["300"]=2500;
engine_price["400"]=4000;
engine_price["43"]=8000;

var transmission_price = new Array();
transmission_price["none"]=0;
transmission_price["manual"]=0;
transmission_price["automatic"]=2500;

var color_price = new Array();
color_price["none"]=0;
color_price["black"]=0;
color_price["white"]=0;
color_price["brown"]=500;
color_price["sblack"]=1800;
color_price["pwhite"]=1800;
color_price["mbrown"]=2200;

var interior_price = new Array();
interior_price["none"]=0;
interior_price["btextil"]=0;
interior_price["wtextil"]=0;
interior_price["bhleather"]=1000;
interior_price["whleather"]=1000;
interior_price["bfleather"]=2500;
interior_price["wfleather"]=2500;
interior_price["special"]=4000;

function getBodyPrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["body"];
	
	return cClassPrice + body_price[selected.value];
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