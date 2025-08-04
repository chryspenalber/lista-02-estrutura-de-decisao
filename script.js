//exercício 1

function comparaNumeros() {
    let primeiroNumero = document.getElementById("primeiro-numero").value
    let segundoNumero = document.getElementById("segundo-numero").value
    let imprimeResultado = document.getElementById("resultado-comparacao")

    if (primeiroNumero > segundoNumero) {
        imprimeResultado.textContent = `Entre ${primeiroNumero} e ${segundoNumero}, ${primeiroNumero} é maior.`
    } else if (segundoNumero > primeiroNumero) {
        imprimeResultado.textContent = `Entre ${primeiroNumero} e ${segundoNumero}, ${segundoNumero} é maior.`
    } else {
        imprimeResultado.textContent = `Os números são iguais.`
    }
}

//exercício 2

function ePositivoOuNegativo() {
    let numeroEscolhido = document.getElementById("numero-escolhido").value
    let positivoOuNegativo = document.getElementById("positivo-ou-negativo")

    if (numeroEscolhido > 0) {
        positivoOuNegativo.textContent = `O número escolhido é positivo.`
    } else if (numeroEscolhido < 0) {
        positivoOuNegativo.textContent = `O número escolhido é negativo.`
    } else {
        positivoOuNegativo.textContent = `O número escolhido é zero.`
    }
}

//exercício 3

function femOuMasc() {
    let sexoEscolhido = document.getElementById("sexo-escolhido").value
    let resultadoFemOuMasc = document.getElementById("resultado-fem-ou-masc")

    if (sexoEscolhido === "m" || sexoEscolhido === "M") {
        resultadoFemOuMasc.textContent = "Sexo Masculino"
    } else if (sexoEscolhido === "f" || sexoEscolhido === "F") {
        resultadoFemOuMasc.textContent = "Sexo Feminino"
    } else {
        resultadoFemOuMasc.textContent = "Valor inválido. Digite apenas F ou M"
    }
}

//exercício 4

function vogalOuConsoante() {
    let letraEscolhida = document.getElementById("letra-digitada").value.trim().toUpperCase()

    let eVogalOuConsoante = document.getElementById("resultado-vogal-ou-consoante")


    if (letraEscolhida.length === 1 && letraEscolhida.match(/[A-Z]/)) {
        if ("AEIOU".includes(letraEscolhida)) {
            eVogalOuConsoante.textContent = `${letraEscolhida} é uma vogal!`
        } else {
            eVogalOuConsoante.textContent = `${letraEscolhida} é uma consoante!`
        }

    } else {
        eVogalOuConsoante.textContent = `${letraEscolhida} não é válido. Digite apenas uma letra do alfabeto.`
    }
}

//exercício 5

function aprovacao() {
    let primeiraNota = parseFloat(document.getElementById("nota1").value)
    let segundaNota = parseFloat(document.getElementById("nota2").value)
    let media = (primeiraNota + segundaNota) / 2

    let imprimeMedia = document.getElementById("resultado-media")

    if (media >= 7) {
        if (media === 10) {
            imprimeMedia.textContent = `Média: ${media}. Aprovado com Distinção!`
        } else {
            imprimeMedia.textContent = `Média: ${media}. Aprovado`
        }
    } else {
        imprimeMedia.textContent = `Média: ${media}. Reprovado`
    }
}

//exercício 6

function maiorNumero() {
    let primeiroNumero = parseFloat(document.getElementById("numero1").value)
    let segundoNumero = parseFloat(document.getElementById("numero2").value)
    let terceiroNumero = parseFloat(document.getElementById("numero3").value)
    let imprimeMaiorNumero = document.getElementById("resultado-maior-numero")

    if (primeiroNumero === segundoNumero && segundoNumero === terceiroNumero) {
        imprimeMaiorNumero.textContent = "Os números são iguais."
    } else if (primeiroNumero >= segundoNumero && primeiroNumero >= terceiroNumero) {
        imprimeMaiorNumero.textContent = `${primeiroNumero} é o maior número.`
    } else if (segundoNumero >= primeiroNumero && segundoNumero >= terceiroNumero) {
        imprimeMaiorNumero.textContent = `${segundoNumero} é o maior número.`
    } else if (terceiroNumero >= primeiroNumero && terceiroNumero >= segundoNumero) {
        imprimeMaiorNumero.textContent = `${terceiroNumero} é o maior número.`
    }

}

//exercício 7

function maiorEMenor() {
    let primeiroNum = parseFloat(document.getElementById("num1").value)
    let segundoNum = parseFloat(document.getElementById("num2").value)
    let terceiroNum = parseFloat(document.getElementById("num3").value)
    let imprimeMaiorEMenor = document.getElementById("resultado-maior-ou-menor")

    if (primeiroNum === segundoNum && segundoNum === terceiroNum) {
        imprimeMaiorEMenor.textContent = "Os números são iguais."
        return
    }

    let maiorNum = primeiroNum;
    let menorNum = primeiroNum;

    //Verifica maior
    if (segundoNum > maiorNum) {
        maiorNum = segundoNum
    }

    if (terceiroNum > maiorNum) {
        maiorNum = terceiroNum
    }

    //Verifica menor
    if (segundoNum < menorNum) {
        menorNum = segundoNum
    }

    if (terceiroNum < menorNum) {
        menorNum = terceiroNum
    }

    imprimeMaiorEMenor.textContent = `O maior número é ${maiorNum} e o menor número é ${menorNum}.`
}

//exercício 8

function menorPreco() {
    let primeiroPreco = parseFloat(document.getElementById("preco-1").value.replace(",", "."))
    let segundoPreco = parseFloat(document.getElementById("preco-2").value.replace(",", "."))
    let terceiroPreco = parseFloat(document.getElementById("preco-3").value.replace(",", "."))
    let informaMenorPreco = document.getElementById("resultado-menor-preco")

    if (primeiroPreco === segundoPreco && segundoPreco === terceiroPreco) {
        informaMenorPreco.textContent = "Os preços são iguais."
    } else if (primeiroPreco <= segundoPreco && primeiroPreco <= terceiroPreco) {
        informaMenorPreco.textContent = `O menor preço é R$${primeiroPreco.toFixed(2).replace(".", ",")}`
    } else if (segundoPreco <= primeiroPreco && segundoPreco <= terceiroPreco) {
        informaMenorPreco.textContent = `O menor preço é R$${segundoPreco.toFixed(2).replace(".", ",")}`
    } else if (terceiroPreco <= primeiroPreco && terceiroPreco <= segundoPreco) {
        informaMenorPreco.textContent = `O menor preço é R$${terceiroPreco.toFixed(2).replace(".", ",")}`
    }
}

//exercício 9

function ordemDecrescente() {

    let numero1 = parseFloat(document.getElementById("numero-1").value)
    let numero2 = parseFloat(document.getElementById("numero-2").value)
    let numero3 = parseFloat(document.getElementById("numero-3").value)
    let resultadoDecrescente = document.getElementById("resultado-ordem-decrescente")

    if (numero1 === numero2 && numero2 === numero3) {
        resultadoDecrescente.textContent = "Os números escolhidos são iguais."
        return
    }

    let maior = numero1
    let meio = numero1
    let menor = numero1

    if (numero2 > maior) {
        maior = numero2
    }
    if (numero3 > maior) {
        maior = numero3
    }

    if (numero2 < menor) {
        menor = numero2
    }
    if (numero3 < menor) {
        menor = numero3
    }

    if (menor < numero2 && maior > numero2) {
        meio = numero2
    } if (menor < numero3 && maior > numero3) {
        meio = numero3
    }

    resultadoDecrescente.textContent = `Ordem decrescente: ${maior}, ${meio}, ${menor}`
}

//exercício 10

function mensagemTurno() {

    let turno = document.getElementById("turno-aula").value.trim().toUpperCase()
    let resultadoTurno = document.getElementById("resultado-turno")

    if (turno.length === 1 && turno.match(/[A-Z]/)) {
        if ("M".includes(turno)) {
            resultadoTurno.textContent = "Bom Dia!"
        } else if ("V".includes(turno)) {
            resultadoTurno.textContent = "Boa Tarde!"
        } else if ("N".includes(turno)) {
            resultadoTurno.textContent = "Boa Noite!"
        }

    } else {
        resultadoTurno.textContent = `${turno} não é válido. Digite M, V ou N.`
    }
}

//exercício 11

function calculaNovoSalario() {

    let salarioAtual = parseFloat(document.getElementById("salario").value.replace(",", "."))
    let resultadoNovoSalario = document.getElementById("resultado-salario-novo")
    let percentual = 0

    if (salarioAtual <= 280) {
        percentual = 20
    } else if (salarioAtual <= 700) {
        percentual = 15
    } else if (salarioAtual <= 1500) {
        percentual = 10
    } else if (salarioAtual > 1500) {
        percentual = 5
    }
    let aumento = salarioAtual * (percentual / 100)
    let salarioReajustado = salarioAtual + aumento

    resultadoNovoSalario.innerHTML = `
    <p>O seu salário atual é R$${salarioAtual.toFixed(2)}</p> 
    <p>Percentual de aumento aplicado: ${percentual}%</p>
    <p>Valor do reajuste: R$${aumento.toFixed(2)}</p>
    <p>Novo salário com reajuste: R$${salarioReajustado.toFixed(2)}</p>
`
}

//exercício 12

function calculaDescontosSalario() {

    let valorHora = parseFloat(document.getElementById("valor-hora").value.replace(",", "."))
    let horasTrabalhadas = parseFloat(document.getElementById("horas-trabalhadas").value)
    let resultadoDetalheSalario = document.getElementById("resultado-descontos-salario")
    let salarioBruto = valorHora * horasTrabalhadas
    let percentualIR = 0

    if (salarioBruto <= 900) {
        percentualIR = 0
    } else if (salarioBruto <= 1500) {
        percentualIR = 5
    } else if (salarioBruto <= 2500) {
        percentualIR = 10
    } else if (salarioBruto > 2500) {
        percentualIR = 20
    }

    let descontoIR = (salarioBruto * percentualIR) / 100
    let descontoINSS = (salarioBruto * 10) / 100
    let valorFGTS = (salarioBruto * 11) / 100
    let totalDescontos = descontoIR + valorFGTS

    let salarioLiquido = salarioBruto - totalDescontos
    
    resultadoDetalheSalario.innerHTML = `
         <table>
                <tr>
                    <td>Salário Bruto: (R$${valorHora.toFixed(2)} * ${horasTrabalhadas} horas) : </td>
                    <td>R$ ${salarioBruto.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>(-) IR (${percentualIR}%) :</td>
                    <td>R$${descontoIR.toFixed(2)} </td>
                </tr>
                <tr>
                    <td>(-) INSS (10%) : </td>
                    <td>R$${descontoINSS.toFixed(2)}</td>
                </tr>
                <tr>
                    <td> FGTS (11%) :</td>
                    <td>R$${valorFGTS.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Total de descontos :</td>
                    <td>R$${totalDescontos.toFixed(2)}</td>
                </tr>
                <tr> 
                    <td><b>Salário Liquido:</b></td>  
                    <td><b>R$${salarioLiquido.toFixed(2)}<b></td>
                </tr>
            
            </table>`
}