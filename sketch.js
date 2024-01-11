let canvasSize = {
    w:400,
    h:400
}
let starCount = 400;

class Star{
    constructor(){
        //! random metodu optimize olmayabilir
        this.x = random(-canvasSize.w,canvasSize.w);
        this.y = random(-canvasSize.h,canvasSize.h);
        this.z = random(canvasSize.w);

        this.sx = undefined;
        this.sy = undefined;

        this.deltaR = undefined;
        this.Zspeed = 5;

    }

    show(){
        fill(255); 
        noStroke();

        this.sx = map(this.x/this.z , 0 , 1 , 0 , canvasSize.w)
        this.sy = map(this.y/this.z , 0 , 1 , 0 , canvasSize.h)
        this.deltaR = map(this.z,0,canvasSize.w,16,0)


        ellipse(this.sx, this.sy, this.deltaR, this.deltaR)
    }   

    update(){
        this.z = this.z - this.Zspeed; //z hareketi ve hızı
        if(this.z < 1){ //geri dönmeyi engelemek için
            this.z = canvasSize.w;
            this.x = random(-canvasSize.w,canvasSize.w);
             this.y = random(-canvasSize.h,canvasSize.h);
        }
    }
}

let stars = [];
function setup(){
    createCanvas(canvasSize.w,canvasSize.h);
    //!bunu optimize edeceğim
    for (let i = 0; i < starCount; i++) {
        stars[i] = new Star();
    }
}

function draw(){
    background(0)
    translate(width/2, height/2)
    // circle(x, y, d)
    stars.forEach(star => {
        star.show();
        star.update();
    });
    
}