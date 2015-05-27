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
      camera = new THREE.PerspectiveCamera( 45, sceneWidth / sceneHeight, 10, 30000 );
      camera.position.z = 5000;
      scene.add( camera );



   // Create Trackball Controls
      controls = new THREE.TrackballControls( camera );
      controls.rotateSpeed = 0.8;
      controls.zoomSpeed = 1.0;
      controls.noZoom = false;
      controls.noPan = true;
      controls.staticMoving = false;
      controls.dynamicDampingFactor = 0.6;
      controls.minDistance = 0;
      controls.maxDistance = 10000;
      controls.keys = [ 65, 83, 68 ];
      controls.addEventListener( 'change', render );



   // Use Default Omni Light



   // Create Raycaster to trap Click Events
      raycaster = new THREE.Raycaster();



   // Create SpriteMaterial
      spriteMaterials = { };
      spriteMaterials.White = new THREE.SpriteMaterial( { color: 0xffffff } );
      spriteMaterials.Red = new THREE.SpriteMaterial( { color: 0xffccdd } );
      spriteMaterials.Blue = new THREE.SpriteMaterial( { color: 0xddccff } );
      spriteMaterials.Ship = new THREE.SpriteMaterial( { color: 0xff55aa, rotation: 0.785 } );


   // Add Ship
      ship = new THREE.Sprite( spriteMaterials.Ship );
      ship.scale.set( 50, 30, 1 );
      ship.position = new THREE.Vector3( 0, 0, 0 );
      ship.JumpRange = 1000;
      scene.add( ship );


   // Create Sprite Stars
      var colorizer;
      var sizer;
      var star;
      for (var i = 0; i < 6000; i++) {

         colorizer = Math.random() * 10;

         if (colorizer < 5) star = new THREE.Sprite( spriteMaterials.White );
         else if (colorizer < 8) star = new THREE.Sprite( spriteMaterials.Red );
         else star = new THREE.Sprite( spriteMaterials.Blue );

         sizer = Math.random() * 20 + 20;
         star.scale.set( sizer, sizer, 1 );

         star.position.x = ( Math.random() + Math.random() + Math.random() ) * 20000 - 30000;
         star.position.y = ( Math.random() + Math.random() + Math.random() ) * 20000 - 30000;

      // 2/3 of Stars in Disc
         if ( Math.random() < 0.33 )
            star.position.z = ( Math.random() + Math.random() + Math.random() ) * 10000 - 15000;
         else
            star.position.z = ( Math.random() + Math.random() + Math.random() ) * 2000 - 3000;

         star.id = i;
         stars.push( star );

         scene.add( star );
      };
   //



   // Line Material
      lineMaterials = { };
      lineMaterials.DarkGreen = new THREE.LineBasicMaterial( { color: 0x115511 } );
      lineMaterials.Green = new THREE.LineBasicMaterial( { color: 0xaaffaa } );
      lineMaterials.Red = new THREE.LineBasicMaterial( { color: 0xffaaaa } );



   // Draw JumpLines
      moveShip( ship.position );



   // Clear Initial lineHover
      lineHover = null;



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



function getStarDistance( star ) {

   // Compare 3d Distance
      return Math.sqrt(
         ( ( star.position.x - ship.position.x ) * ( star.position.x - ship.position.x ) ) +
         ( ( star.position.y - ship.position.y ) * ( star.position.y - ship.position.y ) ) +
         ( ( star.position.z - ship.position.z ) * ( star.position.z - ship.position.z ) )
      );

}



function moveShip( position ) {

   // Remove Hover Line
   if ( lineHover !== null ) scene.remove( lineHover );
   lineHover = null;
   starHover = null;

   // Update Ship Position
   ship.position.copy( position );

   // Remove Old Jump Lines
   var line;
   while ( jumpLines.length > 0 ) {
      line = jumpLines.pop();
      scene.remove( line );
   }

   // Add New Jump Lines
   var geometryLine;
   for (var i = 0; i < stars.length; i++) {

      // Check for Star near Ship
      star = stars[i];

      // Draw line if Distance < JumpRange
      if ( getStarDistance( star ) < ship.JumpRange ) {
         geometryLine = new THREE.Geometry();
         geometryLine.vertices.push(
            new THREE.Vector3( ship.position.x, ship.position.y, ship.position.z ),
            new THREE.Vector3( star.position.x, star.position.y, star.position.z )
         );
         line = new THREE.Line( geometryLine, lineMaterials.DarkGreen );
         jumpLines.push( line );
         scene.add( line );
      }
   };

}



function onDocumentMouseMove( event ) {

   // Prevent Default Action
      event.preventDefault();

   // Track Mouse Position
      mouse.x = ( event.clientX / sceneWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - header.offsetHeight ) / sceneHeight ) * 2 + 1;

   // Show Line if over Star
      //raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, camera );

   // Check for Intersection
      var intersects = raycaster.intersectObjects( scene.children );
      if ( intersects.length > 0 ) {

         // Trap Reference
         if ( starHover !== intersects[ 0 ].object ) {
            starHover = intersects[ 0 ].object;

            // Remove Old Hover Line
            if ( lineHover !== null ) scene.remove( lineHover );

            // Generate New Hover Line Geometry
            geometryLine = new THREE.Geometry();
            geometryLine.vertices.push(
               new THREE.Vector3( ship.position.x, ship.position.y, ship.position.z ),
               new THREE.Vector3( starHover.position.x, starHover.position.y, starHover.position.z )
            );

            // Draw Hover Line
            if ( getStarDistance( starHover ) < ship.JumpRange ) lineHover = new THREE.Line( geometryLine, lineMaterials.Green );
            else lineHover = new THREE.Line( geometryLine, lineMaterials.Red );

            scene.add( lineHover );

         }

      }
      else {

         if ( lineHover !== null ) scene.remove( lineHover );
         lineHover = null;
         starHover = null;

      }

      render();

}



function onDocumentMouseDown( event ) {

   // Disable Default Event
      event.preventDefault();

   // Trap Selected Star
      //raycaster = new THREE.Raycaster();
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
      //raycaster = new THREE.Raycaster();
      raycaster.setFromCamera( mouse, camera );

   // Check for Intersection
      var intersects = raycaster.intersectObjects( scene.children );
      if (intersects.length > 0 ) {

         // Check for click-drag
         if ( starClick === intersects[ 0 ].object ) {

            if ( getStarDistance( starClick ) < ship.JumpRange ) {
               moveShip( starClick.position );
               controls.target = starClick.position;
               controls.update();
            }

            /*/alert( "Star ID [" + starClick.id +
               "]\nPosition:\n x [" + starClick.position.x.toFixed(3) +
               "]\n y [" + starClick.position.y.toFixed(3) +
               "]\n z [" + starClick.position.z.toFixed(3) + "]"
            );/*/

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