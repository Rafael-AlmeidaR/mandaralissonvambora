class Nave
{   constructor(x, y, img)
    {   this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = img;
    }
    draw()
    {   context.drawImage(this.img, this.x, this.y, 100, 100);
    }
}