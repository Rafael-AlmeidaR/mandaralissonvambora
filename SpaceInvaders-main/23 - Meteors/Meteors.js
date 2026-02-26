class Meteors {
    constructor(type)
    {
        this.type = type;
        this.objects = [];
        for(var y = canvas.height, n = 0; y > -canvas.height*.1; n++)
        {   
            var distance = (Math.random()*canvas.height/10);
            this.objects.push(new this.type(y-distance, 50+distance));

            y = this.objects[n].y;
        }
    }

    update(actor)
    {   for(var i = 0; i<this.objects.length; i++)
        {
            this.objects[i].update();
            this.objects[i].draw();
            this.objects[i].test(actor);
            
            if(this.objects[i].y >= canvas.height)
            {   this.objects[i].y = 0-this.objects[i].height;
            }
        }
    }
}

class meteor extends Entity{
    constructor(y,height)
    {
        super(0, y, 20+Math.random()*canvas.width/20, height);
        this.img.src = "meteorito.png"
        this.speed = 1;
        this.mag = 20;
        this.color = 55+Math.random()*200;
        this.drawRandow = 30+Math.random()*90;
    }

    draw()
    {   
        // context.fillStyle = 'green';
        // context.fillRect(this.x, this.y,this.width,this.height);
        
        context.fillStyle = `rgb(${this.color},${this.color},${this.color})`;
        context.beginPath();
        context.moveTo((this.x+this.width/2)+Math.cos(0)*this.width/2, (this.y+this.height/2)+Math.sin(0)*this.height/2);
        for(let i=1*Math.PI/180; i<Math.PI*2; i+=this.drawRandow*Math.PI/180)
        {   context.lineTo((this.x+this.width/2)+Math.cos(i)*this.width/2, (this.y+this.height/2)+Math.sin(i)*this.height/2);
        }
        context.fill();
        
    }

    update()
    {
        this.y += this.speed;
    }
}

class leftMeteor extends meteor{
    constructor(y,height)
    {
        super(y,height);
        this.x = Math.random()*canvas.width/10;
    }

    test(actor)
    {
        if(this.collide(actor))
        {
            actor.x = this.x+this.width+1;
        }
    }
}

class rightMeteor extends meteor{
    constructor(y,height)
    {
        super(y,height);
        this.x = canvas.width-this.width-Math.random()*canvas.width/10;
    }

    test(actor)
    {
        if(this.collide(actor))
        {
            actor.x = this.x-actor.width-1;
        }
    }
}