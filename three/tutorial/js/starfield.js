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
      camera = new THREE.PerspectiveCamera( 45, sceneWidth / sceneHeight, 1, 3000 );
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
      controls.dynamicDampingFactor = 0.7;
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
      for (var i = 0; i < 4000; i++) {

         colorizer = Math.random() * 10;

         if (colorizer < 5) star = new THREE.Sprite( materialWhite );
         else if (colorizer < 8) star = new THREE.Sprite( materialRed );
         else star = new THREE.Sprite( materialBlue );

         sizer = Math.random() * 4 + 2;
         star.scale.set( sizer, sizer, 1 );

         star.position.x = ( Math.random() + Math.random() ) * 2000 - 2000;
         star.position.y = ( Math.random() + Math.random() ) * 2000 - 2000;

      // 2/3 of Stars in Disc
         if ( Math.random() < 0.33 )
            star.position.z = ( Math.random() + Math.random() ) * 1000 - 1000;
         else
            star.position.z = ( Math.random() + Math.random() ) * 200 - 200;

         star.id = i;
         stars.push( star );

         scene.add( star );
      };
   //



   // Line Material
      var materialLine = new THREE.LineBasicMaterial( { color: 0x115522 } );



   // Draw line to nearby stars
      var line;
      var geometryLine;
      var starDistance;
      for (var i = 0; i < stars.length; i++) {
         // Check for Star near Zero Coordinates
         star = stars[i];
         starDistance = Math.sqrt(
            ( ( star.position.x - 0 ) * ( star.position.x - 0 ) ) +
            ( ( star.position.y - 0 ) * ( star.position.y - 0 ) ) +
            ( ( star.position.z - 0 ) * ( star.position.z - 0 ) )
         );

         // Draw line if Distance < 100
         if ( starDistance < 100 ) {
            geometryLine = new THREE.Geometry();
            geometryLine.vertices.push(
               new THREE.Vector3( 0, 0, 0 ),
               new THREE.Vector3( star.position.x, star.position.y, star.position.z )
            );
            line = new THREE.Line( geometryLine, materialLine );
            scene.add( line );
         }
      };
   //



   // Register for Mouse Events
      renderer.domElement.addEventListener( "mousemove", onDocumentMouseMove, false );
      renderer.domElement.addEventListener( "mousedown", onDocumentMouseDown, false );
      renderer.domElement.addEventListener( "mouseup", onDocumentMouseUp, false );


   // Register for Window Resize
      window.addEventListener( "resize", onWindowResize, false );



      render();

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



function onDocumentMouseMove( event ) {

   // Prevent Default Action
      event.preventDefault();

   // Track Mouse Position
      mouse.x = ( event.clientX / sceneWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - header.offsetHeight ) / sceneHeight ) * 2 + 1;

   // Show Line if over Star


}



function onDocumentMouseDown( event ) {

   // Disable Default Event
      event.preventDefault();

   // Trap Selected Star
      raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, camera );

   // Check for Intersection
      var intersects = raycaster.intersectObjects( scene.children );
      if ( intersects.length > 0 ) starClick = intersects[ 0 ].object;
      else starClick = null;

}



function onDocumentMouseUp( event ) {

   // Disable Default Event
      event.preventDefault();

   // Nothing selected
      if ( starClick === null ) return;

   // Trap Selected Star
      raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, camera );

   // Check for Intersection
      var intersects = raycaster.intersectObjects( scene.children );
      if (intersects.length > 0 ) {

         // Check for click-drag
         if ( starClick === intersects[ 0 ].object ) {

            alert( "Star ID [" + starClick.id +
               "]\nPosition:\n x [" + starClick.position.x.toFixed(3) +
               "]\n y [" + starClick.position.y.toFixed(3) +
               "]\n z [" + starClick.position.z.toFixed(3) + "]"
            );

         }

      }

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