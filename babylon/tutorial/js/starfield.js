// Single White Pixel GIF
// data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=


var camerasBorderFunction = function () {
        //Angle
        //if (camera.beta < 0.1)
            //camera.beta = 0.1;
        //else if (camera.beta > (Math.PI / 2) * 0.9)
            //camera.beta = (Math.PI / 2) * 0.9;

  //Zoom
        if (camera.radius > 2000)
            camera.radius = 2000;

        if (camera.radius < 10)
            camera.radius = 10;
    };


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


   // Add Stars Randomly
   for (var i = 0; i < 3000; i++) {
      star = new BABYLON.Sprite("star", spriteManagerStar);
      star.position.x = Math.random() * 2000 - 1000;
      star.position.y = Math.random() * 2000 - 1000;
      star.position.z = Math.random() * 2000 - 1000;
   }



   return scene;
}