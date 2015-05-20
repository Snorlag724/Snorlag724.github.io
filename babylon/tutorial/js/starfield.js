// Single White Pixel GIF
// data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=


function createScene() {
   var scene = new BABYLON.Scene(engine);
   scene.clearColor = new BABYLON.Color3(0, 0, 0);

   var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0,0,0), scene);

   var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3.Zero(), scene);
   // Set Position of Camera relative to target
   camera.setPosition(new BABYLON.Vector3(60, 60, 0));
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);



   // Create Sprite Manager for Stars
   var spriteManagerStar = new BABYLON.SpriteManager(
      "starManager",
      "sprites/1x1_255255255.png",
      9000,
      1,
      scene
   );


   // Add Star to Test
   var star = new BABYLON.Sprite("star", spriteManagerStar);
   star.position = new BABYLON.Vector3(0, 0, 0);
   star.size = 10;



   return scene;
}