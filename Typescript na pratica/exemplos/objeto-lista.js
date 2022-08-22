"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora',
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor',
};
const paulo = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvidor',
};
var profissao;
(function (profissao) {
    profissao[profissao["professora"] = 0] = "professora";
    profissao[profissao["atriz"] = 1] = "atriz";
    profissao[profissao["desenvolvedora"] = 2] = "desenvolvedora";
    profissao[profissao["jogadoraDeFutebol"] = 3] = "jogadoraDeFutebol";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.desenvolvedora,
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: profissao.desenvolvedora,
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: profissao.desenvolvedora,
    materias: ['Matemática discreta', 'programação'],
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática discreta', 'programação'],
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
