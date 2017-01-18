(function() {
	console.log("hello from me");
	var theImages = document.querySelectorAll(".image-holder");
	var theHeading = document.querySelector(".heading");
	var theSubhead = document.querySelector(".main-copy h2");
	var theSeasonText = document.querySelector(".main-copy p"), appliedClass;

	function changeElements() {
			theSubhead.classList.remove(appliedClass);
			theHeading.classList.remove(appliedClass);

			appliedClass = this.id;

			theSubhead.classList.add(this.id);
			theHeading.classList.add(this.id);
			theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
			theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;

	}

	[].forEach.call(theImages, function(image) {
		image.addEventListener("click", changeElements, true);
	});
			theHeading.classList.add('spring');
			theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
			theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;

})();