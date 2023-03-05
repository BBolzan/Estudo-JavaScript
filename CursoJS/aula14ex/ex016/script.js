function contar() {
    let inicio = window.document.querySelector("input#txinicio")
    let fim = window.document.querySelector("input#txfim")
    let passo = window.document.querySelector("input#txpasso")
    let res = window.document.querySelector("div#res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML("Impossível contar")
        window.alert("ERRO, tente de novo")
    } else {
        res.innerHTML = "Contando: <br> "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert("Passo inválido")
            p = 1
        }
        if(i>f) {
            //contagem regressiva
            for(let cont=i; c>=f; cont-= p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }
        } else { 
            //contagem crescente
            for(let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`
            }   
            res.innerHTML += `\u{1F3C1}`
        }
    }    
}     