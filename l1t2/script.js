var n = 181;
var sum = 1;

for (var i = 2; i <= n; i++) {
    
    if (n % i === 0) {
        sum = sum + 1;
    } 
    
}

console.log(sum===2);
