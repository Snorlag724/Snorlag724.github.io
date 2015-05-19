// Here begins a function that we will 'call' just after it's built
var createScene = function () {

   // Now create a basic Babylon Scene object
   var scene = new BABYLON.Scene(engine);

   // Change the scene background color to green.
   scene.clearColor = new BABYLON.Color3(0, 0.2, 0);

   // This creates and positions a free camera
   var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

   // This targets the camera to scene origin
   camera.setTarget(BABYLON.Vector3.Zero());

   // This attaches the camera to the canvas
   camera.attachControl(canvas, false);

   // This creates a light, aiming 0,1,0 - to the sky.
   var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

   // Dim the light a small amount
   light.intensity = .4;

   // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
   var sphere1 = BABYLON.Mesh.CreateSphere("sphere1", 12, 2, scene);
   var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 12, 2, scene);
   var sphere3 = BABYLON.Mesh.CreateSphere("sphere3", 12, 2, scene);

   // Move each sphere upward
   sphere1.position.y = 1;
   sphere2.position.y = 2;
   sphere3.position.y = 3;

   // Move Sphere1 right 2x its width
   sphere1.position.x = 4;

   // Move Sphere3 left 2x its width
   sphere3.position.x = -4;

   // Let's try our built-in 'ground' shape. Params: name, width, depth, subdivisions, scene
   var ground = BABYLON.Mesh.CreateGround("ground1", 12, 6, 2, scene);

   // Leave this function
   return scene;
};