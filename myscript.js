function openTab(tab, tabName) {
    // Declare all variables
    var i, tablink, hide;
	
	hide = document.getElementsByClassName("tabcontent");
	for (i = 0; i < hide.length;i++) {
		hide[i].style.display = "none";
	}
	tablink = document.getElementsByClassName("active");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace("active", "");
    }
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tab).className = "active";
	
	
	}
function openHome() {
	var TabName, content, tabcontents;
	
	content = document.getElementById('home').style.display = "block";
	content.className = "active";
	}

