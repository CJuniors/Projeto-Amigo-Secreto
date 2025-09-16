//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let participantes = [];
let ultimoSorteado = null; 

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    if (participantes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        input.value = "";
        return;
    }

    participantes.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    participantes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("É preciso pelo menos 2 participantes para sortear!");
        return;
    }

    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    ultimoSorteado = sorteado;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`;

    participantes = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function novoSorteio() {
    if (participantes.length < 2) {
        alert("Você precisa adicionar os nomes novamente antes de fazer um novo sorteio!");
        return;
    }

    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    ultimoSorteado = sorteado;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Novo sorteio: <strong>${sorteado}</strong></li>`;

    participantes = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function resetarLista() {
    participantes = [];
    ultimoSorteado = null;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
