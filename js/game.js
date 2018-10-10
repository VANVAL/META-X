$(document).ready(function () {
    var scene;
    var camera;
    var renderer;
    var deltaTime;
    var clock;

    clock = new THREE.Clock();

    var visibleSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, visibleSize.width / visibleSize.height, 0.1, 100); //trabaja con estos valores de pref
    camera.position.z = 2;

    renderer = new THREE.WebGLRenderer({
        precision: "mediump"
    });
    renderer.setClearColor(new THREE.Color(0, 0, 0)); //limpia el background, está en color negro  
    renderer.setPixelRatio(visibleSize.width / visibleSize.height);
    renderer.setSize(visibleSize.width, visibleSize.height);

    var ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.8);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight(new THREE.Color(.3, .1, .3), 0.4);
    directionalLight.position.set(0.4, 0, 1);	
    var directionalLight2 = directionalLight.clone();
    directionalLight2.position.set(-0.4, 0, 1);
    scene.add(directionalLight);
    scene.add(directionalLight2);

    $("#canvasP1").append(renderer.domElement);

    //CUBO
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(0.6, 0.2, 0.2),
        specular: new THREE.Color(1.0, 1.0, 1.0),
        shininess: 300
    });
    var cube1= new THREE.Mesh(geometry,material);
    cube1.position.z=-2;

    var cube2= cube1.clone();
        cube2.position.x=2;
        
        cube1.name='cube1';
        cube2.name='cube2';

        scene.add(cube1);
        scene.add(cube2);

        render();

});

function render() {
    //se cicla para que se llame cada segundo
    requestAnimationFrame(render);

    deltaTime=clock.getDelta();

    //ANIMANDO LOS CUBOS
    var cube1 = scene.getObjectByName('cube1');
    var cube2 = scene.getObjectByName('cube2');

    cube1.rotation.y += THREE.Math.degToRad(10 * deltaTime); //La rotacion siempre debe estar en radianes entonces esa función te permite convertirla
    //SIEMPRE LO VAS A MULTIPLICAR POR EL TIEMPO DELTA PARA QUE TE RESPETE LA CANTIDAD DE FRAMES POR SEGUNDO QUE QUIERES
    cube2.rotation.y -= THREE.Math.degToRad(10 * deltaTime);
    //cube3.rotation.y += THREE.Math.degToRad(10 * deltaTime);

    //aqui ya es donde esta dibujando
    //webgl tiene soporte para una sola camara a la vez
    //para multiplayer puedes utilizar dos canvas
    renderer.render(scene, camera);
}

function pause(){
    var pIsPressed = false;

    
    
}