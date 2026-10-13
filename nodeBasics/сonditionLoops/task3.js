let number = 9;

for ( let i = 1; i <= 10; i++) {
    let result = number * i;
    if (number <= 0 || number > 9 ) {
        console.log ("Enter number from 1 to 9");
        break;
    } else {
        console.log (number + " * "  + i + " = " + result);
    }
   
}


let num = 5;
let k = 1;


while (k <= 10 ) {
    let result = num * k;
    if (num <= 0 || num > 9 ) {
        
        console.log ("Enter number from 1 to 9");
        break;
    } else {
        console.log (num + " * "  + k + " = " + result);
    }
    k++;
}

