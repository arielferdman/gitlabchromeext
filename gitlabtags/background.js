"use strict";

var button_state = 0;

chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: false
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        if (button_state == 1) {
		button_state = 0;
		chrome.browserAction.setIcon({path: {"128": "glld.png"}});
	    } else if (button_state == 0) {
	      button_state = 1;
		  chrome.browserAction.setIcon({path: {"128": "gll.png"}});
	    }	
    }
});

var obs = new MutationObserver(
    function(mutations) {
        mutations.forEach(function(mutation) {
          var a = document.querySelectorAll(".label");
          a.forEach(function(elem) {
            if (elem.innerText === "Status:Fixed" || elem.innerText === "Bug:Not") {
              elem.parentElement.parentElement.parentElement.remove();
            }
          });
        });
    });

var config = {
    attributes: true,
    childList: true,
    characterData: true,
	subtree: true,
};

obs.observe(document, config);

document.test = "test";