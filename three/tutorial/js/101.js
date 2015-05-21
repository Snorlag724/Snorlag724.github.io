function createScene() {
   // Create Scene
   var scene = new THREE.Scene();

   // Add Camera
   // Parameters:
   //    fov (field of view)
   //    aspect (frustum aspect ratio)
   //    near (near plane clipping)
   //    far (far plane clipping)
   var camera = new THREE.PerspectiveCamera(
      75,
      sceneWidth / sceneHeight,
      0.1,
      1000
   );

   // Set Camera Position
   camera.position.z = 100;

   // Add Camera to Scene
   scene.add( camera );

   // Create WebGL Renderer
   // Can set Width and Height to half size for lower resolution
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize( sceneWidth, sceneHeight );

   // Add Renderer to document
   //    Appears as HTML <canvas>
   document.body.appendChild( renderer.domElement );

   // Add Light
   var pointLight = new THREE.PointLight( 0xFFFFFF );
   pointLight.position.x = 10;
   pointLight.position.y = 50;
   pointLight.position.z = 120;
   scene.add( pointLight );

   // Create Cube
   var geometry = new THREE.BoxGeometry( 20, 20, 20 );

   // Create New Material
   //    Hex Colors
   var material = new THREE.MeshLambertMaterial( { color: 0x00dd00 } );

   // Create Cube from Geometry and Material
   var cube = new THREE.Mesh( geometry, material );

   // Add Cube to Scene
   scene.add( cube );

   // Create Render Loop
   var render = function() {
      requestAnimationFrame( render );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

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