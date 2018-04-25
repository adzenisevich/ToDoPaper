var n = 1032406;
var a;

a = 10 * (n % 10);
n = Math.floor(n / 10);

    while (n >= 10) {
        a = (a * 10) + (10 * (n % 10));
        n = Math.floor(n / 10);
            }

a = a + n;

console.log (a);