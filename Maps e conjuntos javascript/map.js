function getAdminis(map){
    let listaAdmin = [];
    for([key, value] of map){
        if(value === 'admin'){
            listaAdmin.push(key);
        }
        
    }

    return listaAdmin;
}


const users = new Map();

//Set Map Values
users.set("lucas", 'admin');
users.set("Ribamar", 'user');
users.set("Paulo", 'user');
users.set("Romulo", 'admin');
users.set("Brenda", 'user');
users.set("Deborah", 'user');
users.set("Idemilson", 'admin');

console.log(getAdminis(users));




