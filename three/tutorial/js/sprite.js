function createScene() {

   // Position Render Area below Header
   var header = document.getElementById("header");
   var sceneWidth = window.innerWidth;
   var sceneHeight = window.innerHeight - header.offsetHeight;   


   // Create WebGL Renderer
   // Can set Width and Height to half size for lower resolution
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize( sceneWidth, sceneHeight );

   // Add Renderer to Document
   //    Appears as HTML <canvas>
   document.body.appendChild( renderer.domElement );


   // Create Scene
   var scene = new THREE.Scene();


   // Set Camera Properties
   var VIEW_ANGLE = 45,
       ASPECT = sceneWidth / sceneHeight,
       NEAR = 0.1,
       FAR = 10000;

   // Add Camera
   // Parameters:
   //    fov (field of view)
   //    aspect (frustum aspect ratio)
   //    near (near plane clipping)
   //    far (far plane clipping)
   var camera = new THREE.PerspectiveCamera(
      VIEW_ANGLE,
      ASPECT,
      NEAR,
      FAR
   );

   // Set Camera Position
   camera.position.z = 20;

   // Add Camera to Scene
   scene.add( camera );




   // Create Light
   var pointLight =
      new THREE.PointLight( 0xFFFFFF );

   // Set Light Position
   pointLight.position.x = 10;
   pointLight.position.y = 50;
   pointLight.position.z = 130;

   // Add Light to Scene
   scene.add( pointLight );






   // Load Sprite Map
   var map = THREE.ImageUtils.loadTexture( "sprites/gear.png" );

   // Create Sprite Material
   //    color: texture is multiplied by this color
   //    map: texture map image
   //    rotation: rotation of sprite in radians
   //    fog: whether or not the material is affected by fog
   var spriteMaterial = new THREE.SpriteMaterial(
      {
         color: 0xffffff,
         map: map,
         rotation: 0,
         fog: false
      }
   );

   // Create New Sprite
   var sprite = new THREE.Sprite( spriteMaterial );

   // Add Sprite to Scene
   scene.add( sprite );







   // Create Render Loop
   var render = function() {
      requestAnimationFrame( render );


      renderer.render( scene, camera );
   };

   render();

   // Resize Renderer on Window Resize
   window.addEventListener("resize", function () {
      sceneWidth = window.innerWidth;
      sceneHeight = window.innerHeight - header.offsetHeight;
      camera.aspect = sceneWidth / sceneHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( sceneWidth, sceneHeight );
   });
}