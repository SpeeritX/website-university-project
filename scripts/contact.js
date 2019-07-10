$(function () {
	$(document).tooltip({ tooltipClass: "uitooltip" });
	$("#form-dialog").dialog({ autoOpen: false });
});

$(document).ready(function () {
	var formDialog = $("#form-dialog");

	$("#submit").click(function () {
		$(formDialog).html("");

		$(".required").each(function () {
			if ($(this).is(":invalid")) {
				if ($(this).val() == "") {
					$(formDialog).html($(formDialog).html() + "<br/>" + $(this).attr("title"));
				}
				else {
					$(formDialog).html($(formDialog).html() + "<br/>" + "Pole " + $(this).attr("placeholder") + " ma nieprawidłową wartość.");
				}
			}
		})

		if (!$("#checkbox").is(":checked")) {
			$(formDialog).html($(formDialog).html() + "<br/>" + $("#checkbox").attr("title"));
		}
		$(formDialog).dialog("open");
	});
});

