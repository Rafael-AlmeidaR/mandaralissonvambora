class Enemy extends Entity
{   constructor(x,y,width, height, img)
    {  super(x,y,width,height,img);
        this.velocity = 10;
    }

    update()
    {   this.x += this.velocity;
        if(this.x+this.width > canvas.width || this.x<0)
        {   this.velocity *= -1
        }
    }
}