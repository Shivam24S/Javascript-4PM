



function outer() {

    let count = 0;

    function inner() {
        count++
        console.log(count);
    }


    return inner;


}



var counter = outer();

counter()
counter()
counter()
counter()