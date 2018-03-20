a = document.querySelectorAll(".label")
for (i = 0; i < a.length; i++) {
    if (a[i].innerText == "Status:Fixed") {
		a[i].parentElement.parentElement.parentElement.remove()
    }
}