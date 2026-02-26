class Nave extends Entity
{   constructor(x, y,width, height, img)
    {   super(x,y,width,height, img);
        this.bullet = null;
        this.life = 3;
        this.score = 0;
    }

    update()
    {   if(this.bullet)
        {   this.bullet.update();
            this.bullet.draw();

            if(this.bullet.y < 0 || this.bullet.collide(enemies.list))
            {   this.bullet = null;
            }
        }
    }

    fire()
    {   this.bullet = new ProjectileNave(this.x+this.width/2,this.y,10,20);
    }
}