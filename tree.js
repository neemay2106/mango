class tree
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=20;
		this.h=20;
		this.body=Bodies.rectangle(x, y,20,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;		

			push()
			translate(treePos.x, treePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}