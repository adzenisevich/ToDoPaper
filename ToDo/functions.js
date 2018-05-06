// не разобраласьпочему массив ToDoItems пустой выводтся :(

var ToDoItems = [];


var initToDoItems = function() {
		$.getJSON("items.json", function (todo) {
             console.log(todo);
            ToDoItems = todo.todo; 
            }) ; 
};
     initToDoItems();

console.log(ToDoItems);


// first

function addToDoItem(toDoObj){
    
    if (toDoObj.text && toDoObj.completed && toDoObj.id){
       var flag = 0; 
        ToDoItems.forEach(function(Item){
                         if (Item.id === toDoObj.id){
                             flag = 1;
                         }
        })
        if (flag != 1) {
          ToDoItems.push(toDoObj);  
        } 
    
}
return ToDoItems
}

// проверка работы
/* var obj = {
    text: 'write',
    completed: true,
    id: 3
};
console.log(addToDoItem(obj))
*/

// second
// временный асампшен для функции выборки: если введено не completed и не not_completed, то введено all, других вариантов быть не может

var arr = [];

function viewToDoList(itemType) {
    if (itemType === 'completed') {
        ToDoItems.forEach (function(item){
            if (item.completed) {
                arr.push(item);
            }
        })
        
    } else {if (itemType === 'not_completed') {
        ToDoItems.forEach (function(item) {
            if (!item.completed) {
                arr.push(item);
            }
          })
    }  else {
        ToDoItems.forEach(function(item) {
            arr.push(item);
        })
    }
           };
    
    return arr;
}

console.log(viewToDoList('not_completed'));


// third

var editflag;

function editToDoItem(ItemId, newText) {
    editflag = 0;
    if (newText) {
      ToDoItems.forEach (function(item){
        if (item.id === ItemId){
            item.text = newText;
            console.log('Item is updated');
            editflag = 1;
                         } 
          
    } )
  if (editflag === 0) {console.log('Item does not exist');} 
        
} else {console.log('Please, provide a new text');}
    
}

editToDoItem(2,'my_new_text');

// console.log(ToDoItems);


// 4th

var delflag;
var i;

function deleteToDoItem(ItemId) {
    delflag = 0;
    i = -1;
      ToDoItems.forEach (function(item){
          i+=1;
        if (item.id === ItemId){
            ToDoItems.splice(i,1);
            console.log('Item is deleted');
            delflag = 1;
                         } 
          
    } )
  if (delflag === 0) {console.log('Item does not exist');} 
        
}

deleteToDoItem(1);

//console.log(ToDoItems);


// 5th

function completeToDoItem(ItemId) {
    compflag = 0;
    
      ToDoItems.forEach (function(item){
        if (item.id === ItemId){
            item.completed = true;
            console.log('Item is completed');
            compflag = 1;
                         } 
          
    } )
  if (compflag === 0) {console.log('Item does not exist');} 
        
}

completeToDoItem(2);

// console.log(ToDoItems);
