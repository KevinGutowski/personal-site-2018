var initalPosition = 0;

$(document).ready(function() {


	
	
	$(window).scroll(function() {
		if ($(document).scrollTop() > 20) {
			if (initalPosition == 0) {
				initalPosition = $(".science-section").position().top;
			}
			var position = $(".science-section").position().top;
			if ((position > initalPosition) && (position < initalPosition + 556) && (initalPosition != 0)) {
				var percentageScrolled = (position - initalPosition) / 556;
				console.log(percentageScrolled);
			}
		}
	})
});