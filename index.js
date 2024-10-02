// ATIVIDADE 2 

function A2() {
    const input1 = parseFloat(document.getElementById("input1A2").value);
    const input2 = parseFloat(document.getElementById("input2A2").value);

    document.getElementById("resA2").textContent = `${input1} + ${input2} = ${input1 + input2}`;
    console.log(`${input1} + ${input2} = ${input1 + input2}`);
}

function A3() {
    const nota1 = parseFloat(document.getElementById("nota1A3").value);
    const nota2 = parseFloat(document.getElementById("nota2A3").value);
    const nota3 = parseFloat(document.getElementById("nota3A3").value);
    const nota4 = parseFloat(document.getElementById("nota4A3").value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7)
        document.getElementById("resA3").textContent = `Aluno tirou ${media}/10. Aprovado!!`;
    else
        document.getElementById("resA3").textContent = `Aluno tirou ${media}/10. Reprovado`;
}

function A5() {
    const input = document.getElementById("inputA5").value;

    
    document.getElementById("res0A5").textContent = `${input} * ${0} = ${input * 0}`;
    document.getElementById("res1A5").textContent = `${input} * ${1} = ${input * 1}`;
    document.getElementById("res2A5").textContent = `${input} * ${2} = ${input * 2}`;
    document.getElementById("res3A5").textContent = `${input} * ${3} = ${input * 3}`;
    document.getElementById("res4A5").textContent = `${input} * ${4} = ${input * 4}`;
    document.getElementById("res5A5").textContent = `${input} * ${5} = ${input * 5}`;
    document.getElementById("res6A5").textContent = `${input} * ${6} = ${input * 6}`;
    document.getElementById("res7A5").textContent = `${input} * ${7} = ${input * 7}`;
    document.getElementById("res8A5").textContent = `${input} * ${8} = ${input * 8}`;
    document.getElementById("res9A5").textContent = `${input} * ${9} = ${input * 9}`;
    document.getElementById("res10A5").textContent = `${input} * ${10} = ${input * 10}`;
}

const listaA6 = [];

function A6() {
    const input = document.getElementById("inputA6").value;

    if(input == -1) {
        document.getElementById("resA6").textContent = `O maior número da lista [${listaA6}] é o N° ${listaA6.sort((a,b) => b-a,0)[0]}!`    
    } else {
        listaA6.push(input);
        document.getElementById("resA6").textContent = `Lista atual: [${listaA6}] Adicione mais valores.`
    }
}

let listaA7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let auxListaA7 = []
for (let i = 0; i < 10; i+=2) {
        auxListaA7.push(listaA7[i])
        console.log(auxListaA7);
}
document.getElementById("resA7").textContent = auxListaA7

function A8() {
    const input = document.getElementById("inputA8").value;
    let res = "";
    console.log(input.length);
    for (let i = input.length-1; i >= 0; i--) {
        res += input[i];
    }

    document.getElementById("resA8").textContent = `${input} ao contrário é ${res}`
}