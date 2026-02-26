class Enemy extends Entity
{   constructor(x,y,width, height, img)
    {   super(x,y,width,height,img);
        this.velocity = 10;
        this.sprite1 = new Image;
        this.sprite2 = new Image;
        this.sprite1.src = "ep1.png";
        this.sprite2.src = "ep2.png";
        // this.sprite1.src = "Enemy1.png";
        // this.sprite2.src = "Enemy2.png";
        this.frames = 0;
        this.currentSprite = 0;
    }
    reverse()
    {   this.velocity *= -1;
    }
    update()
    {   this.x += this.velocity;
        this.frames++;
        if(this.frames == FPS/2)
        {   this.currentSprite++;
            this.frames = 0;
        }
        if(this.currentSprite>1)
        {   this.currentSprite = 0;
        }        
        if(this.currentSprite==1)
        {   this.img = this.sprite1;
        }
        else
        {   this.img = this.sprite2;
        }
    }
}