function recalc() {
	
	var element = null,
	    totalOwned = 0;
	
	var ckPot = document.getElementById("ckPot").checked,
	    ckClo = document.getElementById("ckClo").checked,
	    ckMet = document.getElementById("ckMet").checked,
	    ckAgr = document.getElementById("ckAgr").checked,
	    ckRoa = document.getElementById("ckRoa").checked,
	    ckMin = document.getElementById("ckMin").checked,
	    ckEng = document.getElementById("ckEng").checked,
	    ckAst = document.getElementById("ckAst").checked,
	    ckCoi = document.getElementById("ckCoi").checked,
	    ckMed = document.getElementById("ckMed").checked,
	    ckMat = document.getElementById("ckMat").checked,
	    ckDra = document.getElementById("ckDra").checked,
	    ckMus = document.getElementById("ckMus").checked,
	    ckArc = document.getElementById("ckArc").checked,
	    ckLit = document.getElementById("ckLit").checked,
	    ckLaw = document.getElementById("ckLaw").checked,
	    ckDem = document.getElementById("ckDem").checked,
	    ckMil = document.getElementById("ckMil").checked,
	    ckPhi = document.getElementById("ckPhi").checked,
	    ckMys = document.getElementById("ckMys").checked,
	    ckDei = document.getElementById("ckDei").checked,
	    ckEnl = document.getElementById("ckEnl").checked,
	    ckMon = document.getElementById("ckMon").checked,
	    ckThe = document.getElementById("ckThe").checked;


	/* Engineering */
	element = document.getElementById("txEng");
	if (ckEng) {
		element.innerHTML = "";
		totalOwned += 140;
		/* Show Roadbuilding */
		document.getElementById("ckRoa").style.visibility = "visible";
		/* Show Mining */
		document.getElementById("ckMin").style.visibility = "visible";
	}
	else {
		thisValue = 140;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckAst) thisValue -= 20;
		if (ckCoi) thisValue -= 20;
		if (ckMed) thisValue -= 20;
		if (ckMat) thisValue -= 20;
		element.innerHTML = thisValue;
		/* Hide Roadbuilding */
		element = document.getElementById("ckRoa");
		element.checked = false;
		ckRoa = false;
		element.style.visibility = "hidden";
		/* Hide Mining */
		element = document.getElementById("ckMin");
		element.checked = false;
		ckMin = false;
		element.style.visibility = "hidden";
	}

	/* Pottery */
	element = document.getElementById("txPot");
	if (ckPot) {
		element.innerHTML = "";
		totalOwned += 45;
	}
	else {
		thisValue = 45;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		if (thisValue < 0) thisValue = 0;
		element.innerHTML = thisValue;
	}

	/* Cloth Making */
	element = document.getElementById("txClo");
	if (ckClo) {
		element.innerHTML = "";
		totalOwned += 45;
	}
	else {
		thisValue = 45;
		if (ckPot) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		if (thisValue < 0) thisValue = 0;
		element.innerHTML = thisValue;
	}

	/* Metalworking */
	element = document.getElementById("txMet");
	if (ckMet) {
		element.innerHTML = "";
		totalOwned += 80;
	}
	else {
		thisValue = 80;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		element.innerHTML = thisValue;
	}

	/* Agriculture */
	element = document.getElementById("txAgr");
	if (ckAgr) {
		element.innerHTML = "";
		totalOwned += 110;
	}
	else {
		thisValue = 110;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		element.innerHTML = thisValue;
	}

	/* Roadbuilding */
	element = document.getElementById("txRoa");
	if (ckRoa) {
		element.innerHTML = "";
		totalOwned += 140;
	}
	else if (ckEng) {
		thisValue = 140;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		element.innerHTML = thisValue;
	}
	else {
		element.innerHTML = "";
	}

	/* Mining */
	element = document.getElementById("txMin");
	if (ckMin) {
		element.innerHTML = "";
		totalOwned += 180;
	}
	else if (ckEng) {
		thisValue = 180;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		element.innerHTML = thisValue;
	}
	else {
		element.innerHTML = "";
	}

	/* Astronomy */
	element = document.getElementById("txAst");
	if (ckAst) {
		element.innerHTML = "";
		totalOwned += 80;
	}
	else {
		thisValue = 80;
		if (ckEng) thisValue -= 20;
		if (ckCoi) thisValue -= 20;
		if (ckMed) thisValue -= 20;
		if (ckMat) thisValue -= 20;
		element.innerHTML = thisValue;
	}

	/* Coinage */
	element = document.getElementById("txCoi");
	if (ckCoi) {
		element.innerHTML = "";
		totalOwned += 110;
	}
	else {
		thisValue = 110;
		if (ckEng) thisValue -= 20;
		if (ckAst) thisValue -= 20;
		if (ckMed) thisValue -= 20;
		if (ckMat) thisValue -= 20;
		element.innerHTML = thisValue;
	}

	/* Medicine */
	element = document.getElementById("txMed");
	if (ckMed) {
		element.innerHTML = "";
		totalOwned += 140;
	}
	else {
		thisValue = 140;
		if (ckEng) thisValue -= 20;
		if (ckAst) thisValue -= 20;
		if (ckCoi) thisValue -= 20;
		if (ckMat) thisValue -= 20;
		element.innerHTML = thisValue;
	}

	/* Mathematics */
	element = document.getElementById("txMat");
	if (ckMat) {
		element.innerHTML = "";
		totalOwned += 230;
	}
	else {
		thisValue = 230;
		if (ckEng) thisValue -= 20;
		if (ckAst) thisValue -= 20;
		if (ckCoi) thisValue -= 20;
		if (ckMed) thisValue -= 20;
		if (ckDra) thisValue -= 5;
		if (ckMus) thisValue -= 20;
		if (ckArc) thisValue -= 5;
		if (ckLit) thisValue -= 5;
		if (ckMys) thisValue -= 5;
		element.innerHTML = thisValue;
	}

	/* Drama & Poetry */
	element = document.getElementById("txDra");
	if (ckDra) {
		element.innerHTML = "";
		totalOwned += 60;
	}
	else {
		thisValue = 60;
		if (ckMat) thisValue -= 5;
		if (ckMus) thisValue -= 5;
		if (ckArc) thisValue -= 5;
		if (ckLit) thisValue -= 5;
		if (ckMys) thisValue -= 5;
		element.innerHTML = thisValue;
	}

	/* Music */
	element = document.getElementById("txMus");
	if (ckMus) {
		element.innerHTML = "";
		totalOwned += 60;
	}
	else {
		thisValue = 60;
		if (ckMat) thisValue -= 5;
		if (ckDra) thisValue -= 5;
		if (ckArc) thisValue -= 5;
		if (ckLit) thisValue -= 5;
		if (ckMys) thisValue -= 5;
		element.innerHTML = thisValue;
	}

	/* Architecture */
	element = document.getElementById("txArc");
	if (ckArc) {
		element.innerHTML = "";
		totalOwned += 120;
	}
	else {
		thisValue = 120;
		if (ckMat) thisValue -= 5;
		if (ckDra) thisValue -= 5;
		if (ckMus) thisValue -= 5;
		if (ckLit) thisValue -= 5;
		if (ckMys) thisValue -= 5;
		element.innerHTML = thisValue;
	}

	/* Literacy */
	element = document.getElementById("txLit");
	if (ckLit) {
		element.innerHTML = "";
		totalOwned += 110;
	}
	else {
		thisValue = 110;
		if (ckMat) thisValue -= 5;
		if (ckDra) thisValue -= 20;
		if (ckMus) thisValue -= 5;
		if (ckArc) thisValue -= 5;
		if (ckMys) thisValue -= 5;
		element.innerHTML = thisValue;
	}

	/* Military */
	element = document.getElementById("txMil");
	if (ckMil) {
		element.innerHTML = "";
		totalOwned += 180;
	}
	else {
		thisValue = 180;
		if (ckMet) thisValue -= 20;
		element.innerHTML = thisValue;
	}

	/* Law */
	element = document.getElementById("txLaw");
	if (ckLaw) {
		element.innerHTML = "";
		totalOwned += 170;
		/* Show Democracy */
		document.getElementById("ckDem").style.visibility = "visible";
		/* Show Philosophy */
		document.getElementById("ckPhi").style.visibility = "visible";
	}
	else {
		thisValue = 170;
		if (ckMat) thisValue -= 5;
		if (ckDra) thisValue -= 5;
		if (ckMus) thisValue -= 5;
		if (ckArc) thisValue -= 15;
		if (ckLit) thisValue -= 25;
		element.innerHTML = thisValue;
		/* Hide Democracy */
		element = document.getElementById("ckDem");
		element.checked = false;
		ckDem = false;
		element.style.visibility = "hidden";
		/* Hide Philosophy */
		element = document.getElementById("ckPhi");
		element.checked = false;
		ckPhi = false;
		element.style.visibility = "hidden";
	}

	/* Democracy */
	element = document.getElementById("txDem");
	if (ckDem) {
		element.innerHTML = "";
		totalOwned += 200;
	}
	else if (ckLaw) {
		thisValue = 200;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		if (ckDra) thisValue -= 10;
		if (ckMus) thisValue -= 10;
		if (ckArc) thisValue -= 10;
		if (ckLit) thisValue -= 25;
		element.innerHTML = thisValue;
	}
	else {
		element.innerHTML = "";
	}

	/* Philosophy */
	element = document.getElementById("txPhi");
	if (ckPhi) {
		element.innerHTML = "";
		totalOwned += 240;
	}
	else if (ckLaw) {
		thisValue = 240;
		if (ckEng) thisValue -= 20;
		if (ckAst) thisValue -= 20;
		if (ckCoi) thisValue -= 20;
		if (ckMed) thisValue -= 20;
		if (ckMat) thisValue -= 25;
		if (ckMus) thisValue -= 20;
		if (ckLit) thisValue -= 25;
		element.innerHTML = thisValue;
	}
	else {
		element.innerHTML = "";
	}

	/* Mysticism */
	element = document.getElementById("txMys");
	if (ckMys) {
		element.innerHTML = "";
		totalOwned += 50;
	}
	else {
		thisValue = 50;
		if (ckMat) thisValue -= 5;
		if (ckDra) thisValue -= 5;
		if (ckMus) thisValue -= 5;
		if (ckArc) thisValue -= 5;
		if (ckLit) thisValue -= 5;
		element.innerHTML = thisValue;
	}

	/* Deism */
	element = document.getElementById("txDei");
	if (ckDei) {
		element.innerHTML = "";
		totalOwned += 80;
	}
	else {
		thisValue = 80;
		if (ckMys) thisValue -= 15;
		element.innerHTML = thisValue;
	}

	/* Enlightenment */
	element = document.getElementById("txEnl");
	if (ckEnl) {
		element.innerHTML = "";
		totalOwned += 150;
		/* Show Monotheism */
		document.getElementById("ckMon").style.visibility = "visible";
		/* Show Theology */
		document.getElementById("ckThe").style.visibility = "visible";
	}
	else {
		thisValue = 150;
		if (ckMat) thisValue -= 10;
		if (ckDra) thisValue -= 10;
		if (ckMus) thisValue -= 10;
		if (ckArc) thisValue -= 10;
		if (ckLit) thisValue -= 10;
		if (ckMys) thisValue -= 15;
		if (ckDei) thisValue -= 15;
		element.innerHTML = thisValue;
		/* Hide Monotheism */
		element = document.getElementById("ckMon");
		element.checked = false;
		ckMon = false;
		element.style.visibility = "hidden";
		/* Hide Theology */
		element = document.getElementById("ckThe");
		element.checked = false;
		ckThe = false;
		element.style.visibility = "hidden";
	}

	/* Monotheism */
	element = document.getElementById("txMon");
	if (ckMon) {
		element.innerHTML = "";
		totalOwned += 220;
	}
	else if (ckEnl) {
		thisValue = 220;
		if (ckPot) thisValue -= 10;
		if (ckClo) thisValue -= 10;
		if (ckMet) thisValue -= 10;
		if (ckAgr) thisValue -= 10;
		if (ckRoa) thisValue -= 10;
		if (ckMin) thisValue -= 10;
		if (ckEng) thisValue -= 10;
		if (ckMys) thisValue -= 15;
		if (ckDei) thisValue -= 15;
		if (ckEnl) thisValue -= 15;
		element.innerHTML = thisValue;
	}
	else {
		element.innerHTML = "";
	}

	/* Theology */
	element = document.getElementById("txThe");
	if (ckThe) {
		element.innerHTML = "";
		totalOwned += 250;
	}
	else if (ckEnl) {
		thisValue = 250;
		if (ckEng) thisValue -= 20;
		if (ckAst) thisValue -= 20;
		if (ckCoi) thisValue -= 20;
		if (ckMed) thisValue -= 20;
		if (ckMat) thisValue -= 25;
		if (ckMys) thisValue -= 15;
		if (ckDei) thisValue -= 15;
		if (ckEnl) thisValue -= 15;
		element.innerHTML = thisValue;
	}
	else {
		element.innerHTML = "";
	}



	/* Total Owned */
	totalOwned = totalOwned.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	/* Thanks to Elias Zamaria from StackOverflow for the RegEx script!
		http://stackoverflow.com/questions/2901102 */
	document.getElementById("totalOwned").innerHTML = totalOwned;
}