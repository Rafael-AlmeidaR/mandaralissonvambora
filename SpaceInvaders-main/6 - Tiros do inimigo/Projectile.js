class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x-width/2,y,width,height,"");
    }
    draw()
    {   context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update()
    {   this.y+=10;
    }
}