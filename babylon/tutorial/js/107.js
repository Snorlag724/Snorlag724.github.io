function createScene() {
   var scene = new BABYLON.Scene(engine);

   // Arc Rotate Camera *requires hand.js
   // Parameters: name, alpha, beta, radius, target, scene
   var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3.Zero(), scene);
   // Set Position of Camera relative to target
   camera.setPosition(new BABYLON.Vector3(60, 60, 0));
   // Set Active Camera of Scene
   scene.activeCamera = camera;
   // Attach User Input
   scene.activeCamera.attachControl(canvas);

   // Create Hemispheric Light
   var light0 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
   light0.intensity = 0.5;


   // Create Boxes
   var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
   var box2 = BABYLON.Mesh.CreateBox("Box2", 10.0, scene);


   // Create New Material for Boxes
   var materialBox = new BABYLON.StandardMaterial("mat_box", scene);
   materialBox.diffuseColor = new BABYLON.Color3(0.6, 0.7, 0.6);
   box1.material = materialBox;
   box2.material = materialBox;

   // Move Box2
   box2.position.z = 20;





   // Create Animation for Box1
   // Parameters: name, property, highest FPS, type of change, behavior
   // types:
   //    BABYLON.Animation.ANIMATIONTYPE_FLOAT
   //    BABYLON.Animation.ANIMATIONTYPE_VECTOR3
   //    BABYLON.Animation.ANIMATIONTYPE_QUATERNION
   // behavior:
   //    BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE -increment and continue onward
   //    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE -restart from initial value
   //    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT -stop at final value

   var animationBox1 = new BABYLON.Animation(
      "myAnimation",
      "scaling.x",
      30,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
   );


   // Array of Animation Keys
   var keys = [];
   // At key0, scaling is "3"
   keys.push( { frame: 0, value: 3 } );
   // At key 30, scaling is "1"
   keys.push( { frame: 30, value: 1 } );
   // At key 120, scaling is "3"
   keys.push( { frame: 120, value: 3 } );


   // Apply Animation Keys to Animation Object
   animationBox1.setKeys(keys);


   // Apply Animation to Box1
   box1.animations.push(animationBox1);


   // Start Box1 Animation
   scene.beginAnimation(box1, 0, 120, true);





   // Default Transition Functions between Animation Keys:
   //    Float:
   //       BABYLON.Animation.prototype.floatInterpolateFunction = function (startValue, endValue, gradient) {
   //          return startValue + (endValue - startValue) * gradient;
   //       };
   //
   //    Quaternion:
   //       BABYLON.Animation.prototype.quaternionInterpolateFunction = function (startValue, endValue, gradient) {
   //          return BABYLON.Quaternion.Slerp(startValue, endValue, gradient);
   //       };
   //
   //    Vector3:
   //       BABYLON.Animation.prototype.vector3InterpolateFunction = function (startValue, endValue, gradient) {
   //          return BABYLON.Vector3.Lerp(startValue, endValue, gradient);
   //       };
   //





   // Default Easing Functions
   //    BABYLON.CircleEase()
   //    BABYLON.BackEase(amplitude)
   //    BABYLON.BounceEase(bounces, bounciness)
   //    BABYLON.CubicEase()
   //    BABYLON.ElasticEase(oscillations, springiness)
   //    BABYLON.ExponentialEase(exponent)
   //    BABYLON.PowerEase(power)
   //    BABYLON.QuadraticEase()
   //    BABYLON.QuarticEase()
   //    BABYLON.QuinticEase()
   //    BABYLON.SineEase()



   // EasingMode for Easing Interpolation
   //    BABYLON.EasingFunction.EASINGMODE_EASEIN -follows mathematical formula for easing function
   //    BABYLON.EasingFunction.EASINGMODE_EASEOUT -follows 100% interpolation minus output of formula for easing function
   //    BABYLON.EasingFunction.EASINGMODE_EASEINOUT -uses easeIn for first half and easeOut for second half





   // Animate Torus
   var torus = BABYLON.Mesh.CreateTorus("torus1", 20, 7, 30, scene);
   torus.position = new BABYLON.Vector3(0, -20, 40);
   var materialTorus = new BABYLON.StandardMaterial("mat_torus", scene);
   torus.material = materialTorus;
   materialTorus.diffuseColor = new BABYLON.Color3(0.6, 0.4, 0.7);

   // Sample Torus CircleEase Animation
   var animationTorus = new BABYLON.Animation(
      "torusEasingAnimation",
      "position",
      30,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
   );

   // the torus destination position
   var nextPos = torus.position.add(new BABYLON.Vector3(0, 0, -80));

   // Animation keys
   var keysTorus = [];
   keysTorus.push( { frame: 0, value: torus.position } );
   keysTorus.push( { frame: 120, value: nextPos } );
   keysTorus.push( { frame: 240, value: torus.position} );
   animationTorus.setKeys(keysTorus);

   // Creating an easing function
   var easingFunction = new BABYLON.SineEase();

   // For each easing function, you can choose beetween EASEIN (default), EASEOUT, EASEINOUT
   easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

   // Adding the easing function to the animation
   animationTorus.setEasingFunction(easingFunction);

   // Adding animation to my torus animations collection
   torus.animations.push(animationTorus);

   //Finally, launch animations on torus, from key 0 to key 240 with loop activated
   scene.beginAnimation(torus, 0, 240, true);


   return scene;
}