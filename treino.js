function principal(){
    let  piloto= new Object()
         piloto.nome= prompt("Informe o nome do piloto")
         piloto.carro=prompt("Informe o modelo do carro pilotado")
         piloto.idade= Number(prompt("Informe a idade do piloto")) 
    let ptoEtapa1=Number(prompt(`Insira a pontuação recebida na 1º etapa`))
    let ptoEtapa2= Number(prompt(`Insira a pontuação recebida na 2º etapa`)) 
    soma()
    let soma= soma(ptoetapa1, ptoetapa2)
     soma = ptoEtapa1 + ptoEtapa2
     console.log(`A soma das pontuações é: ${soma}`)
     media()
      let media = media(ptoEtapa1, ptoEtapa2, 2)
      console.log(`A média de pontos é: ${media}`)
    }
function soma(a, b){
    if(soma = 0){
      console.log(`Chance de não se classificar `)
    }
    return a + b
  }
function media(a, b){
   media = a + b / 2
  if(media > 70.00)
   console.log(`Piloto classificado`) 
 }

