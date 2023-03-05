function gerarTabuada() {
    let numero = window.document.querySelector("input#txnumero")
    let tab = window.document.getElementById("seltab")

    if(numero.value.length == 0) {
        window.alert("Erro! tente de novo")
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ""

        for(let cont = 1 ; cont <= 10 ; cont++) {
            let item = window.document.createElement("option")
            item.value = `tab${cont}`
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
        }
    }
}