function sumaiya(){

    let munite =0

    return function(){
        munite++
        return munite
    }

}

const anik = sumaiya();
console.log(anik());
console.log(anik());
console.log(anik());