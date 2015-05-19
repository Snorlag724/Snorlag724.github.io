function createFreeCamera() {
   // Free Camera
   // Parameters: name, position, scene
   var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 1, -15), scene);
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);
}


function createArcRotateCamera() {
   // Arc Rotate Camera *requires hand.js
   // Parameters: name, alpha, beta, radius, target, scene
   var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3.Zero(), scene);
   // Set Position of Camera relative to target
   camera.setPosition(new BABYLON.Vector3(0, 30, -60));
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);
}


function createTouchCamera() {
   // Touch Camera *requires hand.js
   // Parameters: name, position, scene
   var camera = new BABYLON.TouchCamera("TouchCamera", new BABYLON.Vector3(0, 10, -60), scene);
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);
}


function createDeviceOrientationCamera() {
   // Device Orientation Camera
   // Parameters: name, position, scene
   var camera = new BABYLON.DeviceOrientationCamera("DevOr_camera", new BABYLON.Vector3(0, 1, -15), scene);
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);
}


function createFollowCamera() {
   // Follow Camera
   // Parameters: name, position, scene
   var camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(10, 30, -60), scene);
   camera.target = sphere3;
   camera.radius = 60; // how far from the object to follow
   camera.heightOffset = 8; // how high above the object to place the camera
   camera.rotationOffset = 180; // the viewing angle
   camera.cameraAcceleration = 0.05 // how fast to move
   camera.maxCameraSpeed = 20 // speed limit
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);
}


function createVirtualJoystickCamera() {
   // Virtual Joystick Camera
   // Parameters: name, position, scene
   var camera = new BABYLON.VirtualJoysticksCamera("VJ_camera", new BABYLON.Vector3(0, 1, -15), scene);
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);
}






function createScene() {
   var scene = new BABYLON.Scene(engine);
   var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0,100,100), scene);


   // Create Spheres
   var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 10.0, 5.0, scene);
   var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 2.0, 7.0, scene);
   var sphere3 = BABYLON.Mesh.CreateSphere("Sphere3", 10.0, 9.0, scene);
   var sphere4 = BABYLON.Mesh.CreateSphere("Sphere4", 10.0, 11.0, scene);

   // Positioning Meshes
   sphere1.position.x = -30;
   sphere3.position.x = 30;
   sphere4.position.x = 60;



   // Create New Material for Sphere1
   var materialSphere1 = new BABYLON.StandardMaterial("texture1", scene);
   sphere1.material = materialSphere1;

   // Set Transparency of Sphere1
   materialSphere1.alpha = 0.5;

   // Set Diffuse (native color of material once lit with a light)
   materialSphere1.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.7);

   // Set Diffuse Texture
   //materialSphere1.diffuseTexture = new BABYLON.Texture("grass.png", scene);



   // Create New Material for Sphere2
   var materialSphere2 = new BABYLON.StandardMaterial("texture2", scene);
   sphere2.material = materialSphere2;

   // Set Emissive Color (sphere glows)
   materialSphere2.emissiveColor = new BABYLON.Color3(1, .4, .3);

   // Set Emissive Texture (weird?)
   // materialSphere2. emissiveTexture = new BABYLON.Texture("grass.png", scene);



   // Create New Material for Sphere3
   var materialSphere3 = new BABYLON.StandardMaterial("texture3", scene);
   sphere3.material = materialSphere3;

   // Set Ambient Color
   materialSphere3.ambientColor = new BABYLON.Color3(.5, .5, 1);

   // Set Specular Color (reflected by surface)
   materialSphere3.specularColor = new BABYLON.Color3(.4, .4, 1);



   // Create New Material for Sphere4
   var materialSphere4 = new BABYLON.StandardMaterial("texture4", scene);
   sphere4.material = materialSphere4;

   // Set Wireframe
   materialSphere4.wireframe = true;

   return scene;
}