function tabuada() {
    var num = document.querySelector("input#txtn")
    var tab = document.getElementById("seltab")
    if (num.value.length == 0) {
        alert("Por favor, digite um número!")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement("option")
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    

}