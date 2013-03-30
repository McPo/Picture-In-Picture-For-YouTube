
function save_options() {

	var player=document.getElementsByName("player");

	for (var i = 0; i < player.length; i++){
		if (player[i].checked == true) localStorage[player[i].value]=1;
		else localStorage[player[i].value]=0;
	}

	//localStorage["width"]=document.getElementsByName("width")[0].value
	//localStorage["height"]=document.getElementsByName("height")[0].value
				  
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
	status.innerHTML = "";
	}, 750);
}

function restore_options() {
	document.getElementById("button").addEventListener('click', save_options);
			
	var player=document.getElementsByName("player");

	if (localStorage.length==6){

	for (var i = 0; i < player.length; i++)	if(localStorage[player[i].value]=="1") player[i].checked=true;
	else player[i].checked=false;
	//document.getElementsByName("width")[0].value=localStorage["width"];
	//document.getElementsByName("height")[0].value=localStorage["height"];
	}else{
		localStorage["controls"]=1;
		localStorage["hide"]=1;
		localStorage["fs"]=1;
		localStorage["brand"]=1;
		localStorage["info"]=1;
		localStorage["play"]=0;
		restore_options();
	}
}

document.addEventListener('DOMContentLoaded', restore_options);
