function getViD(){
	url=document.location.href;
	start=url.indexOf('v=')+2;
	end=url.indexOf('&',start);
	if (end==-1)end=url.length;
	return url.substring(start, end);
}

function setURL(){
	//'&iv_load_policy='+localStorage.anno+'&cc_load_policy='+localStorage.cc+'&disablekb='+localStorage.kb+'&hd='+localStorage.hd+'&loop='+localStorage.loop+'&rel='+localStorage.rel+
	document.getElementById('holder').src='http://www.youtube.com/embed/'+ getViD() +'?controls='+localStorage.controls+'&autohide='+localStorage.hide+'&autoplay='+localStorage.play+'&fs='+localStorage.fs+'&modestbranding='+localStorage.brand+'&showinfo='+localStorage.info;
	//document.getElementById('holder').width=localStorage.width+"px";
	//document.getElementById('holder').height=localStorage.height+"px";
};

function onLoad(){
	if (localStorage.length!=6){
		chrome.tabs.create({'url':chrome.extension.getURL("Options.html")});
		setTimeout(setURL,3000);
	}else setURL();
};

document.addEventListener('DOMContentLoaded', onLoad);
