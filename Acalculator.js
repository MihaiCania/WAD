var aClassPrice = 22000;

var line_price = new Array();
line_price["none"]=0;
line_price["sport"]=1000;
line_price["comfort"]=2000;
line_price["amg"]=3500;

var engine_price = new Array();
engine_price["none"]=0;
engine_price["160"]=0;
engine_price["180"]=1100;
engine_price["200"]=2200;
engine_price["250"]=4000;

var transmission_price = new Array();
transmission_price["none"]=0;
transmission_price["manual"]=0;
transmission_price["automatic"]=2500;

var color_price = new Array();
color_price["none"]=0;
color_price["black"]=0;
color_price["white"]=0;
color_price["green"]=0;
color_price["red"]=0;
color_price["sblack"]=800;
color_price["pwhite"]=800;
color_price["mgreen"]=600;

var interior_price = new Array();
interior_price["none"]=0;
interior_price["btextil"]=0;
interior_price["wtextil"]=0;
interior_price["bhleather"]=500;
interior_price["whleather"]=500;
interior_price["bfleather"]=1000;
interior_price["wfleather"]=1000;

function getLinePrice()
{
	var theForm = document.forms["price"];
	
	var selected = theForm.elements["line"];
	
	var total = aClassPrice + line_price[selected.value];
	return total;
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
	var total = getLinePrice() + getEnginePrice() + getTransmissionPrice() + getColorPrice() + getInteriorPrice();
	
	document.getElementById('totalPrice').innerHTML = "Price: "+total+"$";
}