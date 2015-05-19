var createScene = function () {

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

	//but1span.style.border = "2pt blue outset";
	//but1span.style.backgroundColor = "blue";
	//but1span.style.fontSize = "10pt";
	//but1span.style.color = "white";
	//but1span.style.paddingLeft = "2pt";
	//but1span.style.paddingRight = "2pt";
	//but1span.style.cursor = "pointer";
	//but1span.style.marginLeft = "20pt";
	//but1span.style.marginTop = "2pt";

	//but2span.style.border = "2pt blue outset";
	//but2span.style.backgroundColor = "blue";
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
	var camera = new BABYLON.ArcRotateCamera("Camera", -2, 1.0, 80, new BABYLON.Vector3(0, -10, 0), scene);

	// Attach it to handle user inputs (keyboard, mouse, touch)
	camera.attachControl(canvas, false);

	// Add a light
	var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
	light.groundColor = new BABYLON.Color3(0.4, 0, 0.6);

	var grid = function(scene) {

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
		for (i=0;i<gridwidth/step;i++) {
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
		for (i=0;i<griddepth/step;i++) {
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

	var xlet1 = BABYLON.Mesh.CreateBox("xlet1", 1, scene);
	xlet1.position = new BABYLON.Vector3(0, 0, 0);
	xlet1.scaling = new BABYLON.Vector3(1, 5.75, 1);
	xlet1.rotation = new BABYLON.Vector3(0, 0, Math.PI/4-0.1);
	var xlet1mat = new BABYLON.StandardMaterial("xlet1mat", scene);
	xlet1mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
	xlet1mat.specularColor = new BABYLON.Color3(0, 0, 0);
	xlet1.material = xlet1mat;

	var xlet2 = xlet1.clone("xlet2");
	xlet2.position = new BABYLON.Vector3(0, 0, 0);
	xlet2.rotation = new BABYLON.Vector3(0, 0, -Math.PI/4+0.1);

	var xlet3 = xlet1.clone("xlet3");
	xlet3.position = new BABYLON.Vector3(0, 0, 0);
	xlet3.rotation = new BABYLON.Vector3(0, 0, Math.PI/4-0.1);

	var xlet4 = xlet1.clone("xlet4");
	xlet4.position = new BABYLON.Vector3(0, 0, 0);
	xlet4.rotation = new BABYLON.Vector3(0, 0, -Math.PI/4+0.1);

	var xpar1 = BABYLON.Mesh.CreatePlane("xlet1p", 1, scene);
	xpar1.visibility = 0;
	xlet1.parent = xpar1;
	xlet2.parent = xpar1;
	xpar1.position = new BABYLON.Vector3(-18, 2.75, 0);

	var xpar2 = BABYLON.Mesh.CreatePlane("xlet2p", 1, scene);
	xpar2.visibility = 0;
	xlet3.parent = xpar2;
	xlet4.parent = xpar2;
	xpar2.position = new BABYLON.Vector3(18, 2.75, 0);

	var ylet1 = BABYLON.Mesh.CreateBox("ylet1", 1, scene);
	ylet1.position = new BABYLON.Vector3(0, 1, 0);
	ylet1.scaling = new BABYLON.Vector3(1, 3, 1);
	ylet1.rotation = new BABYLON.Vector3(0, 0, 0);
	var ylet1mat = new BABYLON.StandardMaterial("ylet1mat", scene);
	ylet1mat.diffuseColor = new BABYLON.Color3(0, 0, 1.5);
	ylet1mat.emissiveColor = new BABYLON.Color3(0, 0, 0);
	ylet1mat.specularColor = new BABYLON.Color3(0, 0, 0);
	ylet1.material = ylet1mat;

	var ylet2 = ylet1.clone("ylet2");
	ylet2.position = new BABYLON.Vector3(-1, 2.9, 0);
	ylet2.rotation = new BABYLON.Vector3(0, 0, Math.PI/4);

	var ylet3 = ylet1.clone("ylet3");
	ylet3.position = new BABYLON.Vector3(1, 2.9, 0);
	ylet3.rotation = new BABYLON.Vector3(0, 0, -Math.PI/4);

	var ylet4 = ylet1.clone("ylet4");
	ylet4.position = new BABYLON.Vector3(0, 1, 0);
	ylet4.rotation = new BABYLON.Vector3(0, 0, 0);

	var ylet5 = ylet1.clone("ylet5");
	ylet5.position = new BABYLON.Vector3(1, 2.9, 0);
	ylet5.rotation = new BABYLON.Vector3(0, 0, -Math.PI/4);

	var ylet6 = ylet1.clone("ylet6");
	ylet6.position = new BABYLON.Vector3(-1, 2.9, 0);
	ylet6.rotation = new BABYLON.Vector3(0, 0, Math.PI/4);


	var ypar1 = BABYLON.Mesh.CreatePlane("ylet1p", 1, scene);
	ypar1.visibility = 0;
	ylet1.parent = ypar1;
	ylet2.parent = ypar1;
	ylet3.parent = ypar1;
	ypar1.position = new BABYLON.Vector3(0, 16.5, 0);

	var ypar2 = BABYLON.Mesh.CreatePlane("ylet2p", 1, scene);
	ypar2.visibility = 0;
	ylet4.parent = ypar2;
	ylet5.parent = ypar2;
	ylet6.parent = ypar2;
	ypar2.position = new BABYLON.Vector3(0, -20, 0);

	var zlet1 = BABYLON.Mesh.CreateBox("zlet1", 1, scene);
	zlet1.position = new BABYLON.Vector3(0, 0, 0);
	zlet1.scaling = new BABYLON.Vector3(1, 4.75, 1);
	zlet1.rotation = new BABYLON.Vector3(0, 0, -Math.PI/4+0.1);
	var zlet1mat = new BABYLON.StandardMaterial("zlet1mat", scene);
	zlet1mat.diffuseColor = new BABYLON.Color3(0, 0.6, 0);
	zlet1mat.specularColor = new BABYLON.Color3(0, 0, 0);
	zlet1.material = zlet1mat;

	var zlet2 = zlet1.clone("zlet2");
	zlet2.scaling = new BABYLON.Vector3(3.75, 1, 1);
	zlet2.position = new BABYLON.Vector3(0, -2, 0);
	zlet2.rotation = new BABYLON.Vector3(0, 0, 0);

	var zlet3 = zlet1.clone("zlet3");
	zlet3.scaling = new BABYLON.Vector3(3.75, 1, 1);
	zlet3.position = new BABYLON.Vector3(0, 2, 0);
	zlet3.rotation = new BABYLON.Vector3(0, 0, 0);

	var zlet4 = zlet1.clone("zlet4");
	zlet4.scaling = new BABYLON.Vector3(1, 4.5, 1);
	zlet4.position = new BABYLON.Vector3(0, 0, 0);
	zlet4.rotation = new BABYLON.Vector3(0, 0, -Math.PI/4+0.1);

	var zlet5 = zlet1.clone("zlet5");
	zlet5.scaling = new BABYLON.Vector3(3.75, 1, 1);
	zlet5.position = new BABYLON.Vector3(0, -2, 0);
	zlet5.rotation = new BABYLON.Vector3(0, 0, 0);

	var zlet6 = zlet1.clone("zlet6");
	zlet6.scaling = new BABYLON.Vector3(3.75, 1, 1);
	zlet6.position = new BABYLON.Vector3(0, 2, 0);
	zlet6.rotation = new BABYLON.Vector3(0, 0, 0);



	var zpar1 = BABYLON.Mesh.CreatePlane("zlet1p", 1, scene);
	zpar1.visibility = 0;
	zlet1.parent = zpar1;
	zlet2.parent = zpar1;
	zlet3.parent = zpar1;
	zpar1.position = new BABYLON.Vector3(0, 3, -16);

	var zpar2 = BABYLON.Mesh.CreatePlane("zlet2p", 1, scene);
	zpar2.visibility = 0;
	zlet4.parent = zpar2;
	zlet5.parent = zpar2;
	zlet6.parent = zpar2;
	zpar2.position = new BABYLON.Vector3(0, 3, 16);






	var xcyl = BABYLON.Mesh.CreateCylinder("xcyl", 30, 2, 2, 16, scene);
	var xcylmat = new BABYLON.StandardMaterial("xcylmat", scene);
	xcylmat.diffuseColor = new BABYLON.Color3(1,0,0);
	xcylmat.specularColor = new BABYLON.Color3(0,0,0);
	xcyl.material = xcylmat;

	xcyl.position = new BABYLON.Vector3(0, 0, 0);
	xcyl.rotation = new BABYLON.Vector3(0, 0, Math.PI/2);

	var ycyl = BABYLON.Mesh.CreateCylinder("ycyl", 30, 2, 2, 16, scene);
	var ycylmat = new BABYLON.StandardMaterial("ycylmat", scene);
	ycylmat.diffuseColor = new BABYLON.Color3(0,0,1.5);
	ycylmat.specularColor = new BABYLON.Color3(0,0,0);
	ycyl.material = ycylmat;

	ycyl.position = new BABYLON.Vector3(0, 0, 0);
	ycyl.rotation = new BABYLON.Vector3(0, 0, 0);

	var zcyl = BABYLON.Mesh.CreateCylinder("zcyl", 30, 2, 2, 16, scene);
	var zcylmat = new BABYLON.StandardMaterial("zcylmat", scene);
	zcylmat.diffuseColor = new BABYLON.Color3(0, 0.6, 0);
	zcylmat.specularColor = new BABYLON.Color3(0,0,0);
	zcyl.material = zcylmat;

	zcyl.position = new BABYLON.Vector3(0, 0, 0);
	zcyl.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);

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
	yplane.position = new BABYLON.Vector3(-40, 2.3, 40);
	yplane.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);

	var mybox = BABYLON.Mesh.CreateBox("mybox", 10, scene);
	mybox.position = new BABYLON.Vector3(0, 0, 0);
	var mymat = new BABYLON.StandardMaterial("mymat", scene);
	mymat.diffuseColor = new BABYLON.Color3(0.4, 0, 0.6);
	mybox.visibility = 1;
	mybox.material = mymat;
	mybox.phase = 1;
	mybox.showBoundingBox = true;
	mybox.nothing = 0;
	scene.mybox = mybox;

	var printrot = function() {

		var scene = engine.scenes[0];
		var xstr = PIcheck(scene.mybox.rotation.x);
		var ystr = PIcheck(scene.mybox.rotation.y);
		var zstr = PIcheck(scene.mybox.rotation.z);

		canvas.mydiv1.textContent = "mybox.rotation = " +
			"new BABYLON.Vector3(" +
			xstr + ", " +
			ystr + ", " +
			zstr +
		")";

		canvas.mydiv1a.textContent = "mybox.rotation.x = " + xstr;
		canvas.mydiv1b.textContent = "mybox.rotation.y = " + ystr;
		canvas.mydiv1c.textContent = "mybox.rotation.z = " + zstr;
	};

	var PIcheck = function(value) {
		if (value > -3.2 && value < -3.0) { return "-Math.PI" }
		else if (value > -1.7 && value < -1.4) { return "-Math.PI/2" }
		else if (value > 1.4 && value < 1.7) { return "Math.PI/2" }
		else if (value > 3.0 && value < 3.2) { return "Math.PI" }
		else { return value.toFixed(2) }

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
		var offset = 0.02;
		var scene = engine.scenes[0];
		var tb = scene.getMeshByName("mybox");
		switch(tb.phase) {

			case 1:
				if (tb.rotation.x >= Math.PI/2) {
					tb.rotation.x = Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x += offset;
					printrot();
				}
				break;
			case 2:
				if (tb.rotation.x >= Math.PI) {
					tb.rotation.x = Math.PI;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x += offset;
					printrot();
				}
				break;
			case 3:
				if (tb.rotation.x <= Math.PI/2) {
					tb.rotation.x = Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x -= offset;
					printrot();
				}
				break;
			case 4:
				if (tb.rotation.x <= 0) {
					tb.rotation.x = 0;
					printrot();
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x -= offset;
					printrot();
				}
				break;
			case 5:
				if (tb.rotation.x <= -Math.PI/2) {
					tb.rotation.x = -Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x -= offset;
					printrot();
				}
				break;
			case 6:
				if (tb.rotation.x <= -Math.PI) {
					tb.rotation.x = -Math.PI;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x -= offset;
					printrot();
				}
				break;
			case 7:
				if (tb.rotation.x >= -Math.PI/2) {
					tb.rotation.x = -Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x += offset;
					printrot();
				}
				break;
			case 8:
				if (tb.rotation.x >= 0) {
					tb.rotation.x = 0;
					printrot();
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.x += offset;
					printrot();
				}
				break;
			case 9:
				if (tb.rotation.z >= Math.PI/2) {
					tb.rotation.z = Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z += offset;
					printrot();
				}
				break;
			case 10:
				if (tb.rotation.z >= Math.PI) {
					tb.rotation.z = Math.PI;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z += offset;
					printrot();
				}
				break;
			case 11:
				if (tb.rotation.z <= Math.PI/2) {
					tb.rotation.z = Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z -= offset;
					printrot();
				}
				break;
			case 12:
				if (tb.rotation.z <= 0) {
					tb.rotation.z = 0;
					printrot();
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z -= offset;
					printrot();
				}
				break;
			case 13:
				if (tb.rotation.z <= -Math.PI/2) {
					tb.rotation.z = -Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z -= offset;
					printrot();
				}
				break;
			case 14:
				if (tb.rotation.z <= -Math.PI) {
					tb.rotation.z = -Math.PI;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z -= offset;
					printrot();
				}
				break;
			case 15:
				if (tb.rotation.z >= -Math.PI/2) {
					tb.rotation.z = -Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z += offset;
					printrot();
				}
				break;
			case 16:
				if (tb.rotation.z >= 0) {
					tb.rotation.z = 0;
					printrot();
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.z += offset;
					printrot();
				}
				break;
			case 17:
				if (tb.rotation.y >= Math.PI/2) {
					tb.rotation.y = Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y += offset;
					printrot();
				}
				break;
			case 18:
				if (tb.rotation.y >= Math.PI) {
					tb.rotation.y = Math.PI;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y += offset;
					printrot();
				}
				break;
			case 19:
				if (tb.rotation.y <= Math.PI/2) {
					tb.rotation.y = Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y -= offset;
					printrot();
				}
				break;
			case 20:
				if (tb.rotation.y <= 0) {
					tb.rotation.y = 0;
					printrot();
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y -= offset;
					printrot();
				}
				break;
			case 21:
				if (tb.rotation.y <= -Math.PI/2) {
					tb.rotation.y = -Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y -= offset;
					printrot();
				}
				break;
			case 22:
				if (tb.rotation.y <= -Math.PI) {
					tb.rotation.y = -Math.PI;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y -= offset;
					printrot();
				}
				break;
			case 23:
				if (tb.rotation.y >= -Math.PI/2) {
					tb.rotation.y = -Math.PI/2;
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y += offset;
					printrot();
				}
				break;
			case 24:
				if (tb.rotation.y >= 0) {
					tb.rotation.y = 0;
					printrot();
					updateDelay(tb, scene);
				}
				else {
					tb.rotation.y += offset;
					printrot();
				}
				break;
			case 25:
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
