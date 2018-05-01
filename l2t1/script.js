var arr = [-1, 4, 0, 5, -7, 2, 8, -9];

var PosArr = []; 
var NegArr = []; 
                        
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        PosArr.push(arr[i])
    }
    else if (arr[i] < 0) {
        NegArr.push(arr[i])
    } 
};
      
   console.log(PosArr);
   console.log(NegArr);
