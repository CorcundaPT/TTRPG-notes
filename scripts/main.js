function toggleWindow(id) {
	var target = document.getElementById(id);
	if(target.style.display == "none") {
		target.style.display = "block";
	} else {
		target.style.display = "none";
	}
}