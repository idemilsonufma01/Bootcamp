//solução 1

function validarPalindrono(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//solução 2

function verificarPalindrono(string){
    for(let i =0; i< string.length /2; i++){
        if(string[i] !== string[string.length-1-i]) {
            return false;
        }
    }

    return true;
}



console.log(verificarPalindrono("ama"))


