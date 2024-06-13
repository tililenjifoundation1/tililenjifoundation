document.addEventListener("DOMContentLoaded", function(){
	const slider=
	document.getElementById("slider");
	const images=
	slider.getElementByTagName("img");
	let currentIdx=0;
	function showImage(index){
		//Hide all images
	for(let i = 0; i<images.length; i++) {
		images[i].style.display = "none";
	}
	//Display the image on the specified index
	images[index].style.display = "block";
	}
	function nextImage(){
		currentIdx = (currentIdx + 1)% images.length;
		showImage(currentIdx);
	}
	//Display the first image initially
	showImage(currentIdx);
	//Automatically move to the next image every 3 seconds
	setInterval(nextImage,3000);
});