var b = prompt("Enter any number");

var a;

a = 0;

while (b >= 1) {
     a = b%10;
     b = (b / 10 | 0);
    
    while (b>=1) {
        a=a*10+(b%10);
        b=(b/10|0);
        
     }
}
    
      
   console.log(a);
