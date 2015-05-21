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
   camera.position.z = 300;

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




   // Sphere Properties
   var radius = 50;
   var segments = 16;
   var rings = 16;

   // create the sphere's material
   var sphereMaterial =
      new THREE.MeshLambertMaterial(
         {
            color: 0xCC0000
         }
      );

   // Create Mesh with Sphere Geometry
   var sphere = new THREE.Mesh(
      new THREE.SphereGeometry(
         radius,
         segments,
         rings),
      sphereMaterial);

   // Add Sphere to Scene
   scene.add( sphere );
   



   // Modify Mesh at Runtime
   //    set geometry to dynamic
   //       sphere.geometry.dynamic  true;
   //
   //    notify changes to vertices
   //       sphere.geometry.verticesNeedUpdate = true;
   //
   //    notify changes to normals
   //       sphere.geometry.normalsNeedUpdate = true;
   //
   //    set vertices and faces
   //       sphere.geometry.vertices (array)
   //       sphere.geometry.faces (array)
   //
   //    set position
   //       sphere.position.x = 100;
   //       sphere.position.y = 100;
   //       sphere.position.z = 100;
   //
   //    set rotation
   //       sphere.rotation.x = 1;
   //       sphere.rotation.y = 1;
   //       sphere.rotation.z = 1;
   //
   //    set scale
   //       sphere.scale.x = 1;
   //       sphere.scale.y = 1;
   //       sphere.scale.z = 1;
   //




   // Create Render Loop
   var render = function() {
      requestAnimationFrame( render );

      // Apply Animated Properties
      // mesh.rotation.x += 0.01;
      // mesh.rotation.y += 0.01;

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