//types
//interfaces

/* interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquatico';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre',
}; */

/* const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', event => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
}); */

interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionar(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    //redirecionar para a área da administração
  }
  //redirecionar para a área do usuário
}
