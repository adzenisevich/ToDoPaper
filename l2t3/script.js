var arr = [4, 0, 4, -7, 0, 0, 9, 0, -5];

var obj ={};

arr.forEach(function(item){
    if (!obj[item]) {
        obj[item]=[];
    }
    obj[item].push(item);
});


for (var key in obj) {
    
    console.log(key + ' - ' + obj[key].length);
};


var PosArr = arr.filter(filterCallBackPositive);
var NegArr = arr.filter(filterCallBackNegative);
                        
function filterCallBackPositive(item) {
    return item > 0;
}

function filterCallBackNegative(item) {
    return item < 0;
} 
      
   console.log(PosArr);
   console.log(NegArr);