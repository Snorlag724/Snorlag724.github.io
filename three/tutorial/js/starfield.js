function createScene() {

   // Position Render Area below Header
      header = document.getElementById( "header" );

   // Get Size of Remaining Window
      sceneWidth = window.innerWidth;
      sceneHeight = window.innerHeight - header.offsetHeight;



   // Create WebGL Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setClearColor( 0x000000 );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( sceneWidth, sceneHeight );

   // Attach Renderer to renderZone
      renderZone = document.getElementById( 'renderZone' );
      renderZone.appendChild( renderer.domElement );



   // Create Scene
      scene = new THREE.Scene();



   // Create Camera
      camera = new THREE.PerspectiveCamera( 60, sceneWidth / sceneHeight, 1, 4000 );
      camera.position.z = 500;
      scene.add( camera );



   // Create Trackball Controls
      controls = new THREE.TrackballControls( camera );
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.0;
      controls.panSpeed = 1.0;
      controls.noZoom = false;
      controls.noPan = true;
      controls.staticMoving = false;
      controls.dynamicDampingFactor = 0.4;
      controls.keys = [ 65, 83, 68 ];
      controls.addEventListener( 'change', render );



   // Use Default Omni Light



   // Create Raycaster to trap Click Events
      raycaster = new THREE.Raycaster();



   // Create SpriteMaterial
      var materialWhite = new THREE.SpriteMaterial( { color: 0xffffff } );
      var materialRed = new THREE.SpriteMaterial( { color: 0xffccdd } );
      var materialBlue = new THREE.SpriteMaterial( { color: 0xddccff } );


   // Create Sprite Stars
      var colorizer;
      var sizer;
      var star;
      for (var i = 0; i < 6000; i++) {

         colorizer = Math.random() * 10;

         if (colorizer < 5) star = new THREE.Sprite( materialWhite );
         else if (colorizer < 8) star = new THREE.Sprite( materialRed );
         else star = new THREE.Sprite( materialBlue );

         sizer = Math.random() * 4 + 2;
         star.scale.set( sizer, sizer, 1 );

         star.position.x = Math.random() * 6000 - 3000;
         star.position.y = Math.random() * 6000 - 3000;
         star.position.z = Math.random() * 6000 - 3000;

         scene.add( star);
      };
   //



   /*/ Create Sphere Components
      var materialWhite = new THREE.MeshBasicMaterial( { color: 0xffffff } );
      var geometrySphere = new THREE.SphereGeometry( 10, 1, 1 );

   // Create Sphere Stars
      var star;
      for (var i = 0; i < 1000; i++) {
         star = new THREE.Mesh( geometrySphere, materialWhite );

         star.position.x = Math.random() * 4000 - 2000;
         star.position.y = Math.random() * 4000 - 2000;
         star.position.z = Math.random() * 4000 - 2000;

         scene.add( star );
      };
   /*/


   // Draw line to nearby stars
      





   // Register for Mouse Click
      renderer.domElement.addEventListener( "click", onRenderClick, false );



   // Register for Window Resize
      window.addEventListener( "resize", onWindowResize, false );



      render();

}



function onRenderClick( event ) {

   // Disable Default Event
      event.preventDefault();

   // Get Mouse Position
      mouse.x = ( event.clientX / sceneWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - header.offsetHeight ) / sceneHeight ) * 2 + 1;

   // Plot Raycaster
      //var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 ).unproject( camera );
      //raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

      raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, camera );

   // Check for Intersection
      var intersects = raycaster.intersectObjects( scene.children );
      if (intersects.length > 0 ) {

         INTERSECTED = intersects[ 0 ].object;

alert( "Star Position:\nx [" + INTERSECTED.position.x.toFixed(3) + "]\ny [" + INTERSECTED.position.y.toFixed(3) + "]\nz [" + INTERSECTED.position.z.toFixed(3) + "]" );

      }

}



function animate() {

   // Get Next Frame
      requestAnimationFrame( animate );

   // Respond to Input
      controls.update();

}



function render() {

   // Rebuild Scene
      renderer.render( scene, camera );

}



function onWindowResize() {

   // Check new Window Size
      sceneWidth = window.innerWidth;
      sceneHeight = window.innerHeight - header.offsetHeight;

   // Reset Camera Aspect
      camera.aspect = sceneWidth / sceneHeight;
      camera.updateProjectionMatrix();

   // Resize Renderer
      renderer.setSize( sceneWidth, sceneHeight );

   // Notify Controls
      controls.handleResize();

   // Render Scene
      render();

}