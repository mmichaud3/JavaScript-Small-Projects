function getReceipt() {
    // This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal =0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

 
for (var i = 0; i < sizeArray.length; i++)  {
    if (sizeArray[i].checked)  {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
    }
}
if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
} else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
} else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
}

runningTotal = sizeTotal;
console.log(selectedSize+" =$"+sizeTotal+".00");
console.log("size text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getMeat(runningTotal,text1)  {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
for (var j = 0; j < meatArray.length; j++)  {
    if (meatArray[j].checked)  {
        selectedMeat.push(meatArray[j].value);
        console.log("selected meat item: ("+meatArray[j].value+")");
        text1 = text1+meatArray[j].value+"<br>";
    }
 }

var meatCount = selectedMeat.length;
if (meatCount > 1) {
        meatTotal = (meatCount - 1)
} else { 
        meatTotal = 0;
}
runningTotal = (runningTotal + meatTotal);
console.log("total selected meat items: "+meatCount);
console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
console.log("meat text1: "+text1);
console.log("Purchase Total: "+"$"+runningTotal+".00");
getVeggie(runningTotal,text1);  //All three of these variables will be passed on to each function
};

function getVeggie(runningTotal,text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            console.log("selected veggie item: ("+veggieArray[k].value+")");
            text1 = text1+veggieArray[k].value+"<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected veggie items: "+veggieCount);
    console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
    console.log("veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getCheese(runningTotal,text1); // All three of these variables will be passed on to each function
};
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
            selectedCheese = cheeseArray[c].value;
        
		}
		if (selectedCheese === "Extra Cheese") {
            cheeseTotal = 3;
          
		}
	}
	
    text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
    getCrust(runningTotal,text1);  // All three of these variables will be passed on to each function 
    };

    function getCrust(runningTotal,text1) {
        var crustTotal = 0;
        var selectedCrust = [];
        var crustArray = document.getElementsByClassName("crust");
        for (var d = 0; d < crustArray.length; d++) {
            if (crustArray[d].checked) {
                selectedCrust = crustArray[d].value;
            
            }
            if (selectedCrust === "Cheese Stuffed Crust") {
                crustTotal = 3;
              
            }
        }
        
        text1 = text1+selectedCrust+"<br>";
        runningTotal = (runningTotal + crustTotal);
        getSauce(runningTotal,text1);
    };

    function getSauce(runningTotal,text1) {
        var sauceTotal = 0;
        var selectedSauce = [];
        var sauceArray = document.getElementsByClassName("sauce");
        for (var s = 0; s < sauceArray.length; s++) {
            if (sauceArray[s].checked) {
                selectedSauce = sauceArray[s].value;
            
            }
         }
        
        text1 = text1+selectedSauce+"<br>";
        runningTotal = (runningTotal + sauceTotal);
        document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    };

    


