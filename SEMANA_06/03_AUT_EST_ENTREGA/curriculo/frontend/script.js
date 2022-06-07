
function json(){
    let url = '/info'
    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()
    let data = JSON.parse(xhttp.responseText)[0]
    console.log(data)

    document.getElementById("idade").innerText = data.idade
    document.getElementById("endereco").innerText = data.endereco
    document.getElementById("sexo").innerText = data.sexo
}