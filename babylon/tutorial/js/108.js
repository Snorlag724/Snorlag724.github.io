function createScene() {
   var scene = new BABYLON.Scene(engine);

   // Arc Rotate Camera *requires hand.js
   // Parameters: name, alpha, beta, radius, target, scene
   var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3.Zero(), scene);
   // Set Position of Camera relative to target
   camera.setPosition(new BABYLON.Vector3(0, 2, 10));
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);




   // Create Sprite Manager for Trees
   // Parameters: name, image URL, max capacity, cell size, scene
   var spriteManagerTree = new BABYLON.SpriteManager(
      "treeManager",
      "sprites/palm.png",
      2000,
      800,
      scene
   );


   // Create Sprite Manager for Player
   var spriteManagerPlayer = new BABYLON.SpriteManager(
      "playerManager",
      "sprites/player.png",
      2,
      64,
      scene
   );



   // Create an Instance of Tree
   var tree1 = new BABYLON.Sprite("tree1", spriteManagerTree);
   tree1.position.x = 10;

   // Modify Properties
   //tree1.size = 0.3;
   //tree1.angle = Math.PI/4;
   //tree1.invertU = -1;



   // Create an Instance of Player
   var player1 = new BABYLON.Sprite("Player1", spriteManagerPlayer);
   player1.size = 0.3;

   // Animate Player Sprite from Frame 0 to Frame 40
   player1.playAnimation(0, 40, true, 100);



   // Create an Instance of Player
   var player2 = new BABYLON.Sprite("Player2", spriteManagerPlayer);
   player2.size = 0.3;

   // Set Player Sprite to Frame 44
   player2.stopAnimation();
   player2.cellIndex = 44;
   player2.position.x = 5;




   return scene;
}