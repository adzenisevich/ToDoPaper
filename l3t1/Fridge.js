function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function Fridge (power) {
	
    Machine.apply(this, arguments);
	var food = [];
    var curFoodQuantity = 0;
    
    this.addFood = function() {
        
           
		if (!this._enabled) {
			alert('Turn the Fridge ON');
			return;
		}
        
        
        for (i=0; i<arguments.length; i++){
            if ((curFoodQuantity+1) > (power/100)) {
			alert('Too much food.');
			return;
		}
        curFoodQuantity +=1;
        food.push(arguments[i]);
        }
        
        }
    this.getFood = function(){
        var arr = food;
        return arr;
    }
	
}
