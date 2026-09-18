
    function handleNum (num, evenNumberCB, oddNumberCB) {
        if (num % 2 === 0) {
            return evenNumberCB();
        } else {
            return oddNumberCB();
        }
    } 

    const handleEven = () => {

        console.log ("number is even");
    }

    const handleOdd = () => {
        console.log ("number is odd");

        }
 
handleNum (2, handleEven, handleOdd);