function verificarCheckBox() {
    let checkboxes = document.getElementsByName("itemCheck");
    let checkedBox = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedBox = true;
            break; 
        }
    }

    if (!checkedBox) {
        alert('Marque pelo menos um checkbox');
        return false;
    }
}


function exibirDadosPreenchidos() {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const cargoSelecionado = document.querySelector('input[name="cargo"]:checked').value;

    const checkboxesSelecionados = [];
    const checkboxes = document.getElementsByName("area-interesse");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkboxesSelecionados.push(checkbox.value);
        }
    });

    const miniCurriculo = document.getElementById("mini-curriculo").value;

    console.log("Dados Preenchidos:");
    console.log("Nome:", nome);
    console.log("Endereço:", endereco);
    console.log("Cidade:", cidade);
    console.log("Estado:", estado);
    console.log("Cargo Selecionado:", cargoSelecionado);
    console.log("Áreas de Interesse Selecionadas:", checkboxesSelecionados);
    console.log("Mini-Currículo:", miniCurriculo);
}