function createScene() {
   var scene = new BABYLON.Scene(engine);

   // Arc Rotate Camera *requires hand.js
   // Parameters: name, alpha, beta, radius, target, scene
   var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3.Zero(), scene);
   // Set Position of Camera relative to target
   camera.setPosition(new BABYLON.Vector3(60, 0, 0));
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);



   // Create Spheres
   var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 10.0, 10.0, scene);
   var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 10.0, 10.0, scene);


   // Create New Material for Spheres
   var materialSphere = new BABYLON.StandardMaterial("tex", scene);
   sphere1.material = materialSphere;
   sphere2.material = materialSphere;

   // Move Sphere2
   sphere2.position.z = 20;


   // Point Light
   // Parameters: name, position, scene
   var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 50, 0), scene);
   // Set Diffuse Color
   light0.diffuse = new BABYLON.Color3(1, 0, 0);
   // Set Specular Color
   light0.specular = new BABYLON.Color3(1, 1, 1);


   // Directional Light
   // Parameters: name, direction, scene
   var light1 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(50, 0, 0), scene);
   // Set Diffuse Color
   light1.diffuse = new BABYLON.Color3(0, 0, 1);
   // Set Specular Color
   light1.specular = new BABYLON.Color3(0.2, 0.2, 1);


   // Spot Light
   // Parameters: name, position, direction, angle, exponent, scene
   var light2 = new BABYLON.SpotLight("Spot0", new BABYLON.Vector3(0, -60, 0), new BABYLON.Vector3(0, 1, 0.5), 0.8, 2, scene);
   // Set Diffuse Color
   light2.diffuse = new BABYLON.Color3(0, 1, 0);
   // Set Specular Color
   light2.specular = new BABYLON.Color3(0.2, 1, 0.2);


   // Hemispheric Light
   // Parameters: name, direction, scene
   var light3 = new BABYLON.HemisphericLight("Hemi3", new BABYLON.Vector3(0, 0, 1), scene);
   // Set Diffuse Color (sky - pixels facing upwards)
   light3.diffuse = new BABYLON.Color3(1, 1, 1);
   // Set Ground Color (ground - pixels facing downwards)
   light3.groundColor = new BABYLON.Color3(0, 0, 0);
   // Set Specular Color
   light3.specular = new BABYLON.Color3(1, 1, 1);

   light3.intensity = 0.5;


   return scene;
}