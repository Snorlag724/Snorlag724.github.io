function createScene() {
   var scene = new BABYLON.Scene(engine);
   var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0,100,100), scene);
   var camera = new BABYLON.ArcRotateCamera("Camera", 1.6, 0.8, 80, new BABYLON.Vector3.Zero(), scene);
   camera.attachControl(canvas, true);

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

   // Set Diffuse (native color of material once list with a light)
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