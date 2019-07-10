document.addEventListener("DOMContentLoaded", function () {
	if (localStorage.getItem("high-contrast") == "true")
		setHighContrast();

	if (sessionStorage.getItem("new-session") == null) {
		sessionStorage.setItem("new-session", false);

		if (localStorage.getItem("number-of-visits") == null) {
			localStorage.setItem("number-of-visits", 1);
		}
		else {
			localStorage.setItem("number-of-visits", Number(localStorage.getItem("number-of-visits")) + 1);
		}
	}
	else if (localStorage.getItem("number-of-visits") == null)
		localStorage.setItem("number-of-visits", 1);

	document.getElementById("number-of-visits").innerHTML = "Jesteś tu po raz: " + localStorage.getItem("number-of-visits");
});


function toggleContrast() {

	if (localStorage.getItem("high-contrast") == "true") {
		localStorage.setItem("high-contrast", false);
		document.getElementById("main-container").removeAttribute("style");
		document.getElementsByTagName("body")[0].removeAttribute("style");
		document.getElementsByTagName("main")[0].removeAttribute("style");
		document.getElementsByTagName("nav")[0].removeAttribute("style");
		document.getElementsByTagName("footer")[0].removeAttribute("style");
		document.getElementsByClassName("title")[0].removeAttribute("style");
		document.getElementsByClassName("dropdown-content")[0].removeAttribute("style");
		document.getElementById("menu-button").removeAttribute("style");
		document.getElementById("main-menu").removeAttribute("style");
	}
	else {
		localStorage.setItem("high-contrast", true);
		setHighContrast();
	}

}

function setHighContrast() {
	document.getElementById("main-container").style.backgroundColor = "white";
	document.getElementsByTagName("body")[0].style.backgroundColor = "black";
	document.getElementsByTagName("main")[0].style.backgroundImage = "none";
	document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
	document.getElementsByTagName("nav")[0].style.borderBottom = "3px solid black";
	document.getElementsByTagName("footer")[0].style.backgroundColor = "white";
	document.getElementsByTagName("footer")[0].style.borderTop = "3px solid black";
	document.getElementsByClassName("title")[0].style.color = "white";
	document.getElementsByClassName("title")[1].style.color = "white";

	document.getElementById("menu-button").style.backgroundColor = "white";
	document.getElementsByClassName("dropdown-content")[0].style.backgroundColor = "white";
	document.getElementsByClassName("dropdown-content")[0].style.borderWidth = "3px";
	document.getElementById("main-menu").style.borderWidth = "3px";
	document.getElementById("main-menu").style.backgroundColor = "white";

	var divs = document.getElementsByClassName("img-container");

	for (i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = "white";
	}
}
