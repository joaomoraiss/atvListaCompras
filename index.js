var lista = [];

function adicionarItem() {
    const descricao = document.getElementById("descricao").value;
    const quantidade = document.getElementById("quantidade").value;
    const preco = document.getElementById("preco").value;

    const item = {
        descricao,
        quantidade,
        preco,
    };

    lista.push(item);

    const tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();
    const celulaDescricao = novaLinha.insertCell();
    const celulaQuantidade = novaLinha.insertCell();
    const celulaPreco = novaLinha.insertCell();

    celulaDescricao.innerHTML = item.descricao;
    celulaQuantidade.innerHTML = item.quantidade;
    celulaPreco.innerHTML = item.preco;

    document.getElementById("descricao").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}

function limparLista() {
    lista = [];

    const tabela = document.getElementById("lista").getElementsByTagName("tbody")[0];
    tabela.innerHTML = "";
}