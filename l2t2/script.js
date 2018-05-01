var arr = [4, 0, 4, -7, 0, 0, 9, 0, 3.14];

var obj ={};

for (var i=0; i<arr.length; i++) {
     if (!obj[arr[i]]) {
        obj[arr[i]]=[];
    };
    obj[arr[i]].push(arr[i]);
};

var newarr = [];

for (var key in obj) {
    
    console.log(key + ' - ' + obj[key].length);
    
    newarr.push(' ' + key + ' - ' + obj[key].length);
  
};

console.log("если вывести нужно строго в строку:   " + newarr); 