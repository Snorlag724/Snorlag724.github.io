function createScene() {
   var scene = new BABYLON.Scene(engine);
   var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0,100,100), scene);
   var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);
   camera.attachControl(canvas, true);

   //Create 9 Boxes
   var box1 = BABYLON.Mesh.CreateBox("Box1", 6.0, scene);
   var box2 = BABYLON.Mesh.CreateBox("Box2", 6.0, scene);
   var box3 = BABYLON.Mesh.CreateBox("Box3", 6.0, scene);
   var box4 = BABYLON.Mesh.CreateBox("Box4", 6.0, scene);
   var box5 = BABYLON.Mesh.CreateBox("Box5", 6.0, scene);
   var box6 = BABYLON.Mesh.CreateBox("Box6", 6.0, scene);
   var box7 = BABYLON.Mesh.CreateBox("Box7", 6.0, scene);
   var box8 = BABYLON.Mesh.CreateBox("Box8", 6.0, scene);
   var box9 = BABYLON.Mesh.CreateBox("Box9", 6.0, scene);

   //Position the Boxes
   box1.position.x = -30; // new BABYLON.Vector3(-30,0,0)
   box2.position.x = -15; // new BABYLON.Vector3(-15,0,0)
   box3.position.x = 0; // new BABYLON.Vector3(0,0,0)
   box4.position.x = 15; // new BABYLON.Vector3(15,0,0)
   box5.position.x = 30; // new BABYLON.Vector3(30,0,0)
   box6.position.z = -30; // new BABYLON.Vector3(0,0,-30)
   box7.position.z = -15; // new BABYLON.Vector3(0,0,-15)
   box8.position.z = 15; // new BABYLON.Vector3(0,0,15)
   box9.position.z = 30; // new BABYLON.Vector3(0,0,30)

   // Rotate the box around the X Axis
   box1.rotation.x = Math.PI/4; // new BABYLON.Vector3(Math.PI/4, 0, 0)
   box8.rotation.x = Math.PI/5; // new BABYLON.Vector3(Math.PI/5, 0, 0)

   // Rotate the box around the Y Axis
   box2.rotation.y = Math.PI/6; // new BABYLON.Vector3(0, Math.PI/6, 0)
   box6.rotation.y = Math.PI/3; // new BABYLON.Vector3(0, Math.PI/3, 0)

   // Scaling 2x on the Y Axis
   box3.scaling.y = 2; // new BABYLON.Vector3(1, 2, 1)

   // Scaling 2x on the Z Axis
   box5.scaling.z = 2; // new BABYLON.Vector3(1, 1, 2)

   // Position box3 relative to box1
   //box3.parent = box1;
   //box3.position.z = -10;

   return scene;
}