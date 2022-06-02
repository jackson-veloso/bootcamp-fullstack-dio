const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(array, media) {
    let aprovados = []

    for(let i=0;i < array.length;i++) {
        const {nome,nota,turma} = array[i]
        if(nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos,6))


//ATIVIDADE II - manipular o THIS
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'Jackson',
    idade: 36,
}

const animal = {
    nome: 'Nala',
    idade: 1,
    raça: 'gato PCB',
}

console.log(calculaIdade.call(animal, 7))
console.log(calculaIdade.apply(pessoa1, [5]))