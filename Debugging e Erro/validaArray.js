function validaArray(arr, numero){
    try {
        if(!numero && !arr) throw new ReferenceError("Envier os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array não é do tipo object")

        if(typeof numero !== 'number') throw new TypeError("numero não é do tipo number")

        if(arr.length !==numero) throw new RangeError("Tamanho inválido");

        return arr;
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!")
            console.log(error.message);
    
        }
        else if(error instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(error.message);
        }
        else if(error instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(error.message);
        } else {
            console.log("Tipo de erro não esperado:", error);
        }
    }
}


console.log(validaArray());