"use strict";
console.log("hey");

var obs = new MutationObserver(
    function(mutations) {
        mutations.forEach(function(mutation) {
          var a = document.querySelectorAll(".label");
          a.forEach(function(elem) {
            console.log("hey");
            if (elem.innerText === "Status:Fixed") {
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