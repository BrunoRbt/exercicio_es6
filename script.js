const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.5 },
    { nome: 'Pedro', nota: 8.0 },
    { nome: 'Ana', nota: 6.0 },
    { nome: 'Lucas', nota: 4.5 },
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

function alunosReprovados(alunos) {
    return alunos.filter(aluno => aluno.nota < 6);
}

const aprovados = alunosAprovados(alunos);
const reprovados = alunosReprovados(alunos);
const resultadoDiv = document.getElementById('resultado');
const contagemDiv = document.getElementById('contagem');

// Exibir alunos aprovados
if (aprovados.length > 0) {
    resultadoDiv.innerHTML = `<p class="aprovados">Alunos aprovados:</p>` + 
        aprovados.map(aluno => `<p>${aluno.nome} - Nota: ${aluno.nota}</p>`).join('');
} else {
    resultadoDiv.innerHTML = '<p>Nenhum aluno aprovado.</p>';
}

// Exibir alunos reprovados
if (reprovados.length > 0) {
    resultadoDiv.innerHTML += `<p class="reprovados">Alunos reprovados:</p>` + 
        reprovados.map(aluno => `<p>${aluno.nome} - Nota: ${aluno.nota}</p>`).join('');
} else {
    resultadoDiv.innerHTML += '<p>Todos os alunos foram aprovados.</p>';
}

// Contar e exibir a quantidade de alunos aprovados e reprovados
contagemDiv.innerHTML = `<p>Total de alunos aprovados: ${aprovados.length}</p>` +
                        `<p>Total de alunos reprovados: ${reprovados.length}</p>`;