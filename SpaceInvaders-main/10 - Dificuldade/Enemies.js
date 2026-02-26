class Enemies
{   constructor()
    {   this.list = 
            [   
                new Enemy(100, 100, 100, 100, "enemy.png"),
                new Enemy(200, 100, 100, 100, "enemy.png"),
                new Enemy(300, 100, 100, 100, "enemy.png"),
                new Enemy(100, 200, 100, 100, "enemy.png"),
                new Enemy(200, 200, 100, 100, "enemy.png"),
                new Enemy(300, 200, 100, 100, "enemy.png"),
                new Enemy(100, 300, 100, 100, "enemy.png"),
                new Enemy(200, 300, 100, 100, "enemy.png"),
                new Enemy(300, 300, 100, 100, "enemy.png"),
                // new Enemy(400, 300, 100, 100, "enemy.png"),
                // new Enemy(500, 300, 100, 100, "enemy.png"),
                // new Enemy(600, 300, 100, 100, "enemy.png"),
            ];
        this.bullet;
        this.fire();
    }
    fire()
    {   let enemy = this.list[Math.trunc(Math.random()*(this.list.length))];
        this.bullet = new ProjectileEnemy(enemy.x+enemy.width/2, enemy.y+enemy.height/2, 10, 20);
    }

    draw()
    {   for(var i=0; i<this.list.length; i++)
        {   this.list[i].draw();
        }
    }

    update()
    {   for(var i=0; i<this.list.length; i++)
        {   this.list[i].update();            
            if(this.list[i].collide(nave))
            {   nave.life = 0;
            }
        }
       
        var found = false;

        for(var i=0;(i < this.list.length && found == false); i++)
        {   if(this.list[i].x<0 || this.list[i].x+this.list[i].width>canvas.width)
            {   found = true;
            }           
        }
        if(found == true)
        {   for(var i=0; i<this.list.length; i++)
            {   this.list[i].reverse();
                this.list[i].y += Math.abs(this.list[i].velocity);
            }
        }
        
        this.bullet.update();
        this.bullet.draw();
        if(this.bullet.y > canvas.height || this.bullet.collide(nave))
        {   this.fire();
        }
    }
}