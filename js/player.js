class Player{

    constructor(){
        
    }
    constructor(model,position,colision){
        this.model = model ;
        this.position.x = position.x;
        this.position.y = position.y;
        this.health = 100;
        this.colision=colision;
    }

    updatePosition(position){
        this.position.x= position.x;
        this.position.y= position.y;
    }

    loseHealth(){
        this.health = this.health-10;
    }

    onCollision(){
        
    }
}
