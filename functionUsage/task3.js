function divide (numerator, denominator ){
        if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
            console.log ("Помилка: некоректні дані");
        } else {
            let result = numerator / denominator;
        return result;

        }
        

     }

    try {
        console.log (divide(50, 10));

    } catch (error){
        console.log("Error");
        
    } finally {
        console.log ("Робота завершена");
    }



    try {
        console.log (divide(0, 67));

    } catch (error){
        console.log("Error");
        
    } finally {
        console.log ("Робота завершена");
    }



    try {
        console.log (divide(56, myVariable));

    } catch (error){
        console.log("Error");
        
    } finally {
        console.log ("Робота завершена");
    }


     try {
        console.log (divide(myVariable, 0));

    } catch (error){
        console.log("Error");
        
    } finally {
        console.log ("Робота завершена");
    }