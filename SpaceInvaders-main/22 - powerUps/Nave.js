class Nave extends Entity
{   constructor(x, y,width, height, img)
    {   super(x,y,width,height, img);

        this.bulletsAmount = 1;
        this.bullet = false;
        this.bullets = [];
        this.life = 3;
        this.score = 0;
        this.speed = 10;
        this.speedSettings = {time: 5*FPS, counter:0};
    }

    update()
    {

        if(keys[65])
        {   this.x-=this.speed;
        }
        if(keys[68])
        {   this.x+=this.speed;
        }
        if(keys[87])
        {   this.y-=this.speed;
        }
        if(keys[83])
        {   this.y+=this.speed;
        }
        if(keys[69])
        {   this.fire();
        }

        if(this.speedSettings.counter > 0)
            {
                context.fillStyle = "white";
                context.fillRect(this.x,this.y-this.height/3,this.width,5)
    
                context.fillStyle = "yellow";
                context.fillRect(this.x, this.y-this.height/3, this.width*this.speedSettings.counter/this.speedSettings.time, 5)
                this.speedSettings.counter--
            }else{
                this.speed = 10;
            }


        for(var i = 0; i < this.bullets.length; i++)
        {
            if(this.bullets[i])
            {   this.bullets[i].update();
                this.bullets[i].draw();
    
                if(this.bullets[i].y < 0 || this.bullets[i].collide() || this.bullets[i].collideWall())
                {   this.bullets.splice(i,1);
                }
            }
        }

        if(this.bullets.length == 0)
        {
            this.bullet = false;
        }
    }

    fire()
    {   
        if(!this.bullet)
        {
            for(var i = 0; i < this.bulletsAmount; i++)
            {
                this.bullets.push(new ProjectileNave(this.x+(this.width/this.bulletsAmount)*i+this.width/2/this.bulletsAmount,this.y,10,20));            
            }
            this.bullet = true;
        }
    }
}