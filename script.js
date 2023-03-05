const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCPF = document.getElementById("inCPF");

const formulario = document.getElementById("formulario");

const btMostrar = document.getElementById("btMostrar");

const outputTable = document.getElementById("outputTable");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(formulario);

    fetch('./cadastrarPessoas.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});

btMostrar.addEventListener('click', function () {
    let vetListaDePessoas = [];

    fetch('obterPessoas.php', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                vetListaDePessoas.push([item.nome, item.idade, item.cpf]);
            });
        })
        .catch(error => {
            console.error(error);
        });

    recriarIndice();

    for (let i = 0; i < vetListaDePessoas.length; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < vetListaDePessoas[i]; j++) {
            let td = document.createElement("td");
            td.textContent = `${vetListaDePessoas[i][j]}`;
            tr.appendChild(td);
        }
        outputTable.appendChild(tr);
    }
});

function recriarIndice() {
    const tr = document.createElement("tr");
    for (var i = 0; i < 4; i++) {
        const th = document.createElement("th");
        switch (i) {
            case 0:
                th.textContent = "Código";
                break;
            case 1:
                th.textContent = "Nome";
                break;
            case 2:
                th.textContent = "Idade";
                break;
            case 3:
                th.textContent = "CPF";
        }
        tr.appendChild(th);
    }
    outputTable.appendChild(tr);
}
