
function getViD() {
	url=document.location.href;
	start=url.indexOf('v=')+2;
	end=url.indexOf('&',start);
	if (end==-1)end=url.length;
	return url.substring(start, end);
}

function openPIP() {
	chrome.extension.sendMessage({vid: getViD()});
}

var enclosure = document.createElement('span');

var but=document.getElementById('watch-like-dislike-buttons').firstElementChild.firstElementChild.cloneNode(false);
	but.setAttribute('title', 'Picture In Picture');
	but.removeAttribute('data-button-action');
	but.setAttribute('id', 'watch-pip');
	but.setAttribute('data-tooltip', 'Picture In Picture');
	but.setAttribute('data-tooltip-title', 'Picture In Picture');
	but.addEventListener('click', openPIP);

	var span = document.createElement('span');
			span.setAttribute('class', 'yt-uix-button-content');

				var lab = document.createTextNode('PIP');
enclosure.appendChild(but);
but.appendChild(span);
span.appendChild(lab);

document.getElementById('watch-like-dislike-buttons').appendChild(enclosure);
