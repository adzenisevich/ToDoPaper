var a = 2;
var b = 5;
var c = 2;
var D;
var root1,root2;
D = b*b-4*a*c;
console.log(D);
if (D < 0)
    console.log('No roots')
else if (D==0)
    {
       root1=-b/(2*a);
        console.log (root1);
    }
else {
    root1=(-b+Math.sqrt(D))/(2*a);
    root2=(-b-Math.sqrt(D))/(2*a);
    console.log('Root1 =', root1,';', 'Root2 =',root2)
    ;
}
