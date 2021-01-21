// #1: kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "value should in positive number"
    }
    else{
        var meter = kilometer / 1000;
    }
    return meter;
}

// #2: budgeCalculator
function budgetCalculator(watch,phone,laptop){
    var wat = 50 * watch ;
    var ph = 100 * phone ;
    var lap = 500 * laptop ;
    var total = wat + ph + lap;
    return total;
}
var money =budgetCalculator(1,2,1);
console.log(money);

// #3: hotelCost
function hotelCost(days){
    if(days < 0){
        return "days can't be negative";
    }
    else if(days <= 10){
        var rent = 100 * days;
        return rent;
    }
    else if(days <= 20){
        var firstPart = 100 * 10 ;
        var remaining = days - 10 ;
        var secondPart = 80 * remaining ;
        var total = firstPart + secondPart;
        var rent = total ;
        return rent;
    }
    else{
        var firstPart = 100 * 10 ;
        var secondPart = 80 * 10 ;
        var remaining = days - 20 ;
        var thirdPart = remaining * 50 ;
        var total = firstPart + secondPart + thirdPart;
        var rent = total ;
        return rent;
    }
}
var moneySpent = hotelCost(21);
console.log(moneySpent); 

// #4: megaFriends
function megaFriends(friends){
    var longestName = "";
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(element.length > longestName){
            longestName = element ;
        }
    }
    return longestName;

}   
console.log(megaFriends(["salam","alu","mokhless","kalam","kola"])); 