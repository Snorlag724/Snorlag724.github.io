function createScene() {
	var scene = new BABYLON.Scene(engine);

	scene.clearColor = new BABYLON.Color3(0,0,0);

	var container = document.getElementById("canvasZone");

	//var butbardiv = document.createElement("div");

	//var but1span = document.createElement("span");
	//but1span.textContent = "hide editor";
	//but1span.setAttribute("onclick", "hide_editor()");
	//var but2span = document.createElement("span");
	//but2span.textContent = "show editor";
	//but2span.setAttribute("onclick", "show_editor()");

	//butbardiv.appendChild(but1span);
	//butbardiv.appendChild(but2span);

	//butbardiv.style.border = "2pt red solid";
	//butbardiv.style.padding = "2pt";
	//butbardiv.style.backgroundColor = "black";

	//but1span.style.border = "2pt brown outset";
	//but1span.style.backgroundColor = "brown";
	//but1span.style.fontSize = "10pt";
	//but1span.style.color = "white";
	//but1span.style.paddingLeft = "2pt";
	//but1span.style.paddingRight = "2pt";
	//but1span.style.cursor = "pointer";
	//but1span.style.marginLeft = "20pt";
	//but1span.style.marginTop = "2pt";

	//but2span.style.border = "2pt brown outset";
	//but2span.style.backgroundColor = "brown";
	//but2span.style.fontSize = "10pt";
	//but2span.style.color = "white";
	//but2span.style.paddingLeft = "2pt";
	//but2span.style.paddingRight = "2pt";
	//but2span.style.cursor = "pointer";
	//but2span.style.marginLeft = "10pt";
	//but1span.style.marginTop = "2pt";

	var mydiv1 = document.createElement("div");
	var mydiv1a = document.createElement("div");
	var mydiv1b = document.createElement("div");
	var mydiv1c = document.createElement("div");

	canvas.mydiv1 = mydiv1;
	canvas.mydiv1a = mydiv1a;
	canvas.mydiv1b = mydiv1b;
	canvas.mydiv1c = mydiv1c;

	mydiv1.style.border = "2pt yellow solid";
	mydiv1.style.fontSize = "12pt";
	mydiv1.style.color = "gold";
	mydiv1.style.padding = "2pt";
	mydiv1.style.backgroundColor = "black";
	mydiv1.style.marginTop = "4pt";

	// mydiv1a.style.border = "2pt yellow solid";
	mydiv1a.style.fontSize = "11pt";
	mydiv1a.style.color = "lime";
	mydiv1a.style.padding = "2pt";
	mydiv1a.style.paddingLeft = "20pt";
	mydiv1a.style.backgroundColor = "black";

	// mydiv1b.style.border = "2pt yellow solid";
	mydiv1b.style.fontSize = "11pt";
	mydiv1b.style.color = "lime";
	mydiv1b.style.padding = "2pt";
	mydiv1b.style.paddingLeft = "20pt";
	mydiv1b.style.backgroundColor = "black";
	mydiv1b.style.marginTop = "-6pt";

	// mydiv1c.style.border = "2pt yellow solid";
	mydiv1c.style.fontSize = "11pt";
	mydiv1c.style.color = "lime";
	mydiv1c.style.padding = "2pt";
	mydiv1c.style.paddingLeft = "20pt";
	mydiv1c.style.backgroundColor = "black";
	mydiv1c.style.marginTop = "-6pt";

	container.style.backgroundColor = "black";

	while (container.children.length) {
   		container.removeChild(container.children[0]);
	}

	//container.appendChild(butbardiv);

	container.appendChild(mydiv1);
	container.appendChild(mydiv1a);
	container.appendChild(mydiv1b);
	container.appendChild(mydiv1c);

	container.appendChild(canvas);

	//var fps = document.getElementById("fpsLabel");

	//if (fps) {
		//fps.style.marginTop = "20px";
	//}

	// Create a rotating camera
	var camera = new BABYLON.ArcRotateCamera("Camera", -1.9, 1.0, 82, new BABYLON.Vector3(0, -15, 0), scene);

	// Attach it to handle user inputs (keyboard, mouse, touch)
	camera.attachControl(canvas, false);

	// Add a light
	var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

	function grid(scene) {

		var i, strip, stripx, stripz, rsm, sm, parent, parmat;
		var gridwidth = 50;  // must be increments of 10
		var griddepth = 50;
		var step = 5;
		var linewidth = 0.3;
		var ypos = 0;

		// make the red center square
		parent = new BABYLON.Mesh.CreateGround("par", 1, 1, 1, scene, true);
		parmat = new BABYLON.StandardMaterial("par_mat", scene);
		parmat.diffuseColor = new BABYLON.Color3(1, 0, 0);
		parmat.specularColor = new BABYLON.Color3(0, 0, 0);
		parmat.backFaceCulling = false;
		parent.material = parmat;
		parent.position.y = ypos;

		sm = new BABYLON.StandardMaterial("sm", scene);
		sm.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
		// sm.diffuseColor = newcol();
		// sm.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
		sm.specularColor = new BABYLON.Color3(0, 0, 0);
		sm.backFaceCulling = false;

		rsm = new BABYLON.StandardMaterial("rsm", scene);
		rsm.diffuseColor = new BABYLON.Color3(1, 0, 0);
		// rsm.diffuseColor = newcol();
		// rsm.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
		rsm.specularColor = new BABYLON.Color3(0, 0, 0);
		rsm.backFaceCulling = false;

		// create a bunch of z lines.
		for (i=0; i<gridwidth/step; i++) {
			strip = BABYLON.Mesh.CreateGround("sx", linewidth, griddepth, 1, scene);
			strip.parent = parent;
			// strip.position.y = ypos;
			strip.position.x = -(gridwidth/2) + i*step;
			strip.material = sm;
		}

		// make and install the final red positive-z gridline
		strip = BABYLON.Mesh.CreateGround("sx", linewidth, griddepth, 1, scene);
		strip.parent = parent;
		// strip.position.y = ypos;
		strip.position.x = -(gridwidth/2) + i*step;
		strip.material = rsm;

		// create a bunch of x lines.
		for (i=0; i<griddepth/step; i++) {
			strip = BABYLON.Mesh.CreateGround("sz", gridwidth, linewidth, 1, scene);
			strip.parent = parent;
			// strip.position.y = ypos;
			strip.position.z = -(griddepth/2) + i*step;
			strip.material = sm;
		}

		// make and install the final red positive-x gridline
		strip = BABYLON.Mesh.CreateGround("sz", gridwidth, linewidth, 1, scene);
		strip.parent = parent;
		// strip.position.y = ypos;
		strip.position.z = -(griddepth/2) + i*step;

		strip.material = rsm;

		return parent;
	};

	grid(scene);


	var leftzplane = new BABYLON.Mesh.CreateGround("lzp", 50, 10, 1, scene);
	var lzpmat = new BABYLON.StandardMaterial("lzpmat", scene);
	var tex1 = new BABYLON.Texture("textures/zStrip.jpg", scene);
	lzpmat.diffuseTexture = tex1;
	lzpmat.backFaceCulling = false;
	leftzplane.material = lzpmat;
	leftzplane.position = new BABYLON.Vector3(-30, 0, 0);
	leftzplane.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0);

	var rightzplane = new BABYLON.Mesh.CreateGround("rzp", 50, 10, 1, scene);
	var rzpmat = new BABYLON.StandardMaterial("rzpmat", scene);
	// var tex1 = new BABYLON.Texture("textures/zStrip.jpg", scene);
	rzpmat.diffuseTexture = tex1;
	rzpmat.backFaceCulling = false;
	rightzplane.material = rzpmat;
	rightzplane.position = new BABYLON.Vector3(30, 0, 0);
	rightzplane.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0);


	var frontxplane = new BABYLON.Mesh.CreateGround("fxp", 70, 10, 1, scene);
	var fxpmat = new BABYLON.StandardMaterial("fxpmat", scene);
	tex1 = new BABYLON.Texture("textures/xStrip.jpg", scene);
	fxpmat.diffuseTexture = tex1;
	fxpmat.backFaceCulling = false;
	frontxplane.material = fxpmat;
	frontxplane.position = new BABYLON.Vector3(0, 0, -30);
	frontxplane.rotation = new BABYLON.Vector3(0, 0, 0);

	var rearxplane = new BABYLON.Mesh.CreateGround("rxp", 70, 10, 1, scene);
	var rxpmat = new BABYLON.StandardMaterial("rxpmat", scene);
	// var tex1 = new BABYLON.Texture("textures/zStrip.jpg", scene);
	rxpmat.diffuseTexture = tex1;
	rxpmat.backFaceCulling = false;
	rearxplane.material = rxpmat;
	rearxplane.position = new BABYLON.Vector3(0, 0, 30);
	rearxplane.rotation = new BABYLON.Vector3(0, 0, 0);

	var yplane = new BABYLON.Mesh.CreateGround("yp", 5, 30, 1, scene);
	var ypmat = new BABYLON.StandardMaterial("ypmat", scene);
	tex1 = new BABYLON.Texture("textures/yStrip.jpg", scene);
	ypmat.diffuseTexture = tex1;
	ypmat.backFaceCulling = false;
	yplane.material = ypmat;
	yplane.position = new BABYLON.Vector3(0, 2.3, -0.5);
	yplane.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);


	var mybox = BABYLON.Mesh.CreateBox("mybox", 5, scene);
	mybox.position = new BABYLON.Vector3(-17, 2.55, -17);
	var boxmat = new BABYLON.StandardMaterial("boxmat", scene);
	boxmat.diffuseColor = new BABYLON.Color3(1, 0, 0);
	mybox.visibility = 1;
	mybox.material = boxmat;
	mybox.phase = 1;
	mybox.showBoundingBox = true;
	mybox.nothing = 0;
	scene.mybox = mybox;

	var printpos = function() {

		var scene = engine.scenes[0];
		canvas.mydiv1.textContent = "mybox.position = " +
			"new BABYLON.Vector3(" +
			scene.mybox.position.x.toFixed(2) + ", " +
			scene.mybox.position.y.toFixed(2) + ", " +
			scene.mybox.position.z.toFixed(2) +
		")";
		canvas.mydiv1a.textContent = "mybox.position.x = " + scene.mybox.position.x.toFixed(2);
		canvas.mydiv1b.textContent = "mybox.position.y = " + scene.mybox.position.y.toFixed(2);
		canvas.mydiv1c.textContent = "mybox.position.z = " + scene.mybox.position.z.toFixed(2);
	};

	var updateDelay = function(mesh, scene) {

		if (mesh.animations[0]) {
			if (mesh.animations[0].currentFrame > 90) {
				scene.stopAnimation(mesh);
				mesh.animations = [];
				mesh.phase++;
				if (mesh.name == "greenbox") {
					mesh.flag = 0;
				}
			}
		}
		else {
			var ani = new BABYLON.Animation(
				"ani",
				"nothing",
				30,
				BABYLON.Animation.ANIMATIONTYPE_FLOAT,
				BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
			);

			var keys = [];

			keys.push({
				frame: 0,
				value: 0
			});

			keys.push({
				frame: 100,
				value: 100
			});

			ani.setKeys(keys);
			mesh.animations.push(ani);
			scene.beginAnimation(mesh, 0, 100, true);
		}

	};

	var update_mybox = function() {
		var offset = 0.2;
		var scene = engine.scenes[0];
		var tb = scene.getMeshByName("mybox");
		var xreach = 18;
		var yreach = 10;
		var zreach = 18;
		var flat = 2.5;
		switch(tb.phase) {
			case 1:
				if (tb.position.z > zreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.z += offset;
					printpos();
				}
				break;
			case 2:
				if (tb.position.y > yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 3:
				if (tb.position.y < -yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y -= offset;
					printpos();
				}
				break;
			case 4:
				if (tb.position.y > flat) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 5:
				if (tb.position.x > xreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.x += offset;
					printpos();
				}
				break;
			case 6:
				if (tb.position.y > yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 7:
				if (tb.position.y < -yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y -= offset;
					printpos();
				}
				break;
			case 8:
				if (tb.position.y > flat) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 9:
				if (tb.position.z < -zreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.z -= offset;
					printpos();
				}
				break;
			case 10:
				if (tb.position.y > yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 11:
				if (tb.position.y < -yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y -= offset;
					printpos();
				}
				break;
			case 12:
				if (tb.position.y > flat) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 13:
				if (tb.position.x < -xreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.x -= offset;
					printpos();
				}
				break;
			case 14:
				if (tb.position.y > yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 15:
				if (tb.position.y < -yreach) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y -= offset;
					printpos();
				}
				break;
			case 16:
				if (tb.position.y > flat) {
					updateDelay(tb, scene);
				}
				else {
					tb.position.y += offset;
					printpos();
				}
				break;
			case 17:
				tb.phase = 1;
				break;
		}
	};

	var animate = function() {
		var scene = engine.scenes[0];
		update_mybox();
	};

	//window.hide_editor = function() {
		//if (document.getElementById("jsEditor")) {
			//document.getElementById("jsEditor").style.display = "none";
			//document.getElementById("canvasZone").style.width = "100%";
			//engine.resize();
		//}
	//};

	//window.show_editor = function() {
		//if (document.getElementById("jsEditor")) {
			//document.getElementById("jsEditor").style.display = "block";
			//document.getElementById("canvasZone").style.width = "50%";
			//engine.resize();
		//}
	//};

	//window.hide_editor();

	scene.onDispose = function() {
		// fix 50/50 window
		//window.show_editor();
		// fix fpslabel margin
		//document.getElementById("fpsLabel").style.marginTop = "0px";
		// remove dynamic html
		var container = document.getElementById("canvasZone");
		while (container.childNodes.length > 1) {
			container.removeChild(container.childNodes[0]);
		}
	};

	scene.registerBeforeRender(animate);

	return scene;
};
