class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trejectry=[];
    }

  display() {
   //this.body.position.x = mouseX;
  //this.body.position.y = mouseY;

    super.display()
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y];
    this.trejectry.push(position);
    for(var i = 0 ; i < this.trejectry.length ; i++){
    image(this.smoke,this.trejectry[i][0],this.trejectry[i][1])  
    }
    }
    }
    }

