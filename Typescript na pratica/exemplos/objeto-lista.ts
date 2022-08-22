const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: 'desenvolvedora',
};

pessoa.idade = 25;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: 'Andre',
  idade: 25,
  profissao: 'pintor',
};

const paulo: { nome: string; idade: number; profissao: string } = {
  nome: 'Paulo',
  idade: 25,
  profissao: 'Desenvolvidor',
};

enum profissao {
  professora,
  atriz,
  desenvolvedora,
  jogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 23,
  profissao: profissao.desenvolvedora,
};

const maria: Pessoa = {
  nome: 'Maria',
  idade: 23,
  profissao: profissao.desenvolvedora,
};

const jessica: Estudante = {
  nome: 'Jessica',
  idade: 28,
  profissao: profissao.desenvolvedora,
  materias: ['Matemática discreta', 'programação'],
};

const monica: Estudante = {
  nome: 'Monica',
  idade: 28,
  materias: ['Matemática discreta', 'programação'],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log('- ', item);
  }
}

listar(monica.materias);
