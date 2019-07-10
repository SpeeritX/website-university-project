$(document).ready(function () {
    $(".on-hover").removeClass("on-hover");

    $("#menu-button").click(function () {
        $("#main-menu").slideToggle();
        document.getElementById("button-anim").beginElement();
    });
});

$(window).on("resize", function () {

    var win = $(this);
	if (win.width() > 600) {
		$("#main-menu").removeAttr("style");
		if (localStorage.getItem("high-contrast") == "true") {
			document.getElementById("main-menu").style.borderWidth = "3px";
			document.getElementById("main-menu").style.backgroundColor = "white";
		}
	}
});