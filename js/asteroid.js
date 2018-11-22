var model = null;
var health = 0;
var collision= null;
var position = null;
var velocity=0;



class Asteroid{

    constructor(modelPath, modelObj, modelMat, position){
        loadOBJWithMTL(modelPath, modelObj, modelMat, (model) => {
            this.model = model;
            this.model.position.set(position);
        });

        this.health = 100;
        this.colision = new THREE.Box3();
        this.velocity=30;

        return  this.model;
    }

    /*constructor(){
        this.model = model;
        this.health = 10;
        /*this.collision=collision;
        this.velocity=10;
    }*/

    updatePosition(position){
        this.position.x= position.x;
        this.position.y= position.y;
    }

    loseHealth(){
        this.health = this.health-10;
    }

    checkCollision(){
        
    }
}