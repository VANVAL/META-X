
var model = null;
var health = 0;
var position = null;
var colision = null;
var velocity = 0;


class Player{

    constructor(modelPath, modelObj, modelMat, position){
        
        loadOBJWithMTL(modelPath, modelObj, modelMat, (model) => {
            this.model = model;
            this.model.position.set(position);
        });

        this.health = 100;
        this.colision = new THREE.Box3();
        this.velocity=30;
    }

    setHealth(health){
        this.health=health;
    }

    gainHealth(){
        var currentHealth = this.health;
        if(currentHealth<100){
            this.health = currentHealth+10;
        }else if(currentHealth<=0){
            this.health=0; 
        }else if (currentHealth = 100){
            this.health = currentHealth;
        }
        
    }

    loseHealth(){
        var currentHealth = this.health;
        this.health = currentHealth-10;
    }

    getHealth(){
     return(this.health);
    }

    getPositionX(){
        return(this.position.x);
    }

    setPositionX(posX){
        this.position.x = posX;
    }

    getPositionY(){
        return(this.position.y);
    }

    setPositionY(posY){
        this.position.y=posY;
    }

    updatePosition(position){
        this.position.x = position.x;
        this.position.y = position.y;
        this.position.z = position.z;
    }


    checkCollision(){
        
    }
}
