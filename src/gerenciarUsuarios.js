/*
Exemplo:'
{
    primeiraPropriedade: 'Valor',
    segundaPropriedade: 'Valor
}
*/

//const usuarios = [ 'Matheus', 'Marcos', 'Lucas', 'João'];

const usuarios = [
    {
        primeiraPropriedade: 'Matheus',
        segundaPropriedade: 'matheus@gospel.com'
    },
    {
        primeiraPropriedade: 'Marcos',
        segundaPropriedade: 'marcos@gospel.com'
    },
    {
        primeiraPropriedade: 'Lucas',
        segundaPropriedade: 'lucas@gospel.com'
    },
    {
        primeiraPropriedade: 'João',
        segundaPropriedade: 'joão@gospel.com'
    }
];


function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}
