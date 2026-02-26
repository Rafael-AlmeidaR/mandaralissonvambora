class Wall extends Entity{
    constructor(x,y,width,height,img)
    {
        super(x,y,width,height,img);
        this.life = 100;
    }

    draw()
    {
        context.fillStyle = "gray";
        context.fillRect(this.x,this.y,this.width,this.height);
        
        context.fillStyle = "white";
        context.fillRect(this.x-1,this.y-17,202,12);

        context.fillStyle = "red";
        context.fillRect(this.x,this.y-16,this.life*2,10);
    }
}