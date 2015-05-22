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
      camera = new THREE.PerspectiveCamera( 60, sceneWidth / sceneHeight, 1, 2000 );
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



   // Create SpriteMaterial
      var materialWhite = new THREE.SpriteMaterial( { color: 0xffffff } );
      var materialRed = new THREE.SpriteMaterial( { color: 0xffaaaa } );
      var materialBlue = new THREE.SpriteMaterial( { color: 0xaaaaff } );


   // Create Stars
      var colorizer;
      var sizer;
      var star;
      for (var i = 0; i < 5000; i++) {

         colorizer = Math.random() * 10;

         if (colorizer < 5) star = new THREE.Sprite( materialWhite );
         else if (colorizer < 8) star = new THREE.Sprite( materialRed );
         else star = new THREE.Sprite( materialBlue );

         sizer = Math.random() * 5 + 1;
         star.scale.set( sizer, sizer, 1 );

         star.position.x = Math.random() * 4000 - 2000;
         star.position.y = Math.random() * 4000 - 2000;
         star.position.z = Math.random() * 4000 - 2000;

         scene.add( star);
      };



   // Create Jump Range Sphere
      var jumpAlphaMap = new THREE.ImageUtils.loadTexture( "textures/JumpAlpha.png" );
      var jumpRangeMaterial = new THREE.MeshBasicMaterial( { color: 0x008811, alphaMap: jumpAlphaMap } );
      //var jumpRangeMaterial = new THREE.MeshBasicMaterial( { color: 0x008811, wireframe: true } );
      var jumpRangeSphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 20 ), jumpRangeMaterial );
      scene.add( jumpRangeSphere );






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