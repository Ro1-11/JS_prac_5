/*Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.
eg- to get volume of cylinderlet
obj= new Cylinder(radius,height);
obj.getVolume();*/

class Cylinder
{
   constructor(r,h)
   {
    this.r=r
    this.h=h
   }
   getVolume()
   {
    console.log((Math.PI*this.r*this.r*this.h).toFixed(4));
   }
}
class Cone extends Cylinder
{
    constructor(r,h)
    {
        super(r,h)
    }
    getVolume()
   {
    console.log(((Math.PI*this.r*this.r*this.h)/3).toFixed(4));
   }
}
class Sphere extends Cylinder
{
    constructor(r)
    {
        super(r)
    }
    getVolume()
   {
    console.log(((4*Math.PI*this.r*this.r*this.r)/3).toFixed(4));
   }

}
let obj= new Cone(3,5);
obj.getVolume()