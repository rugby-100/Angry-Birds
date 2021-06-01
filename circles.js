class Circles{
    constructor(x,y,radius) {
        this.body = Bodies.circle(x,y,radius)
        World.add(world,this.body)
        this.radius = radius
        this.color = color(200,200,random(0,255))
    }

    display() {
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius)
    }
}