class Hud 
{   constructor()
    {   this.lifeImg = new Image;
        this.lifeImg.src = "nave3.0.png";

        this.scoreImg = new Image;
        this.scoreImg.src = "ep1.png";
    }

    draw()
    {   context.font = "50px arial";
        context.fillStyle = "cyan";
        context.textBaseline = "middle";
        context.textAlign = 'left';
        context.fillText(nave.life,50,50);

        context.drawImage(this.lifeImg,0,30,32,32);
        
        context.fillStyle = "purple";
        context.fillText(nave.score,50,100);

        context.drawImage(this.scoreImg,0,80,32,32);
    }
}