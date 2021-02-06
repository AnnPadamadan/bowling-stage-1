class Ball{
    constructor(x, y,r){
        this.image1 = loadImage("ball1 (1).png");
        this.image2 = loadAnimation("ball1 (1).png", "ball2 (1).png", "ball3 (1).png", "ball4 (1).png");
        this.x = x;
        this.y = y;
    
        this.r = r;
        this.body = Bodies.rectangle(x, y,r);
World.add(world, this.body);
    }

    display(){
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image1,0, 0, this.r, this.r);
pop();
    }

    knock(){
        if(touche >=1){
            animation(this.image2, 0, 0, this.r, this.r);
        }
    }
}