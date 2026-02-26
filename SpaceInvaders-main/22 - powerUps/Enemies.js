class Enemies
{   constructor()
    {   this.list = 
            [   
                new Enemy(100, 100, 70, 50, ""),
                new Enemy(175, 100, 70, 50, ""),
                new Enemy(250, 100, 70, 50, ""),
                new Enemy(325, 100, 70, 50, ""),
                new Enemy(400, 100, 70, 50, ""),
                new Enemy(475, 100, 70, 50, ""),

                new Enemy(100, 160, 70, 50, ""),
                new Enemy(175, 160, 70, 50, ""),
                new Enemy(250, 160, 70, 50, ""),
                new Enemy(325, 160, 70, 50, ""),
                new Enemy(400, 160, 70, 50, ""),
                new Enemy(475, 160, 70, 50, ""),

                new Enemy(100, 220, 70, 50, ""),
                new Enemy(175, 220, 70, 50, ""),
                new Enemy(250, 220, 70, 50, ""),
                new Enemy(325, 220, 70, 50, ""),
                new Enemy(400, 220, 70, 50, ""),
                new Enemy(475, 220, 70, 50, ""),

                new Enemy(100, 280, 70, 50, ""),
                new Enemy(175, 280, 70, 50, ""),
                new Enemy(250, 280, 70, 50, ""),
                new Enemy(325, 280, 70, 50, ""),
                new Enemy(400, 280, 70, 50, ""),
                new Enemy(475, 280, 70, 50, ""),
            ];
        this.bullet;
        this.fire();
    }
    fire()
    {   let enemy = this.list[Math.trunc(Math.random()*(this.list.length))];
        this.bullet = Math.random() <= .8 ? new ProjectileEnemy(enemy.x+enemy.width/2, enemy.y+enemy.height/2, 10, 20) :
        new ProjectileEnemyBig(enemy.x+enemy.width/2, enemy.y+enemy.height/2, 10, 20);
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
        if(this.bullet.y > canvas.height || this.bullet.collide() || this.bullet.collideWall())
        {   this.fire();
        }
    }
}