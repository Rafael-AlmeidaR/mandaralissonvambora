class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x-width/2,y,width,height,"");
    }
    draw()
    {   context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    collide(entity)
    {   return (entity.x + entity.width >= this.x &&     
                entity.x <= this.x + this.width &&       
                this.y + this.height >= entity.y &&       
                this.y <= entity.y + entity.height);
    }
    update()
    {   this.y+=10;
    }
}
