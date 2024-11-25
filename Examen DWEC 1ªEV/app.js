document.getElementById("sumar").addEventListener("click", ()=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    resultado=num1+num2
    console.log("Resultado"+resultado)
    document.getElementById("resultado").innerHTML=resultado

    document.getElementById("div").style.backgroundColor="cornflowerblue"
})

document.getElementById("restar").addEventListener("click", ()=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    resultado=num1-num2
    console.log("Resultado"+resultado)
    document.getElementById("resultado").innerHTML=resultado

    document.getElementById("div").style.backgroundColor="cadetblue"
})

document.getElementById("multiplicar").addEventListener("click", ()=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    resultado=num1*num2
    console.log("Resultado"+resultado)
    document.getElementById("resultado").innerHTML=resultado

    document.getElementById("div").style.backgroundColor="dodgerblue"
})

document.getElementById("dividir").addEventListener("click", ()=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    resultado=num1/num2
    console.log("Resultado"+resultado)
    document.getElementById("resultado").innerHTML=resultado

    document.getElementById("div").style.backgroundColor="lightskyblue"
})