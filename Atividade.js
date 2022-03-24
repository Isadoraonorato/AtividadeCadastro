//Data do Evento
var DiaDoEvento=30
var MesDoEvento=03
var AnoDoEvento=2022

//Data Atual
let DiaAtual=23
let MesAtual=03
let AnoAtual=2022

//Validação da Data do Evento
if (DiaAtual <= DiaDoEvento)
if (MesAtual <= MesDoEvento)
if (AnoAtual<= AnoDoEvento){
console.log ("Prossiga o cadastro")
}
else {
    console.log ("Não foi possivel realizar o cadastro, pois o evento já aconteceu")
}

//Idade do participante
let Idade = 30

//validação
if (Idade >= 18){
    console.log ("Prossiga o cadastro")
}
else{
    console.log ("Você não tem idade suficiente para participar do evento")
}

//numero de participantes
var ListaDeParticipantesEPalestrantes = ["José", "Maria", "Lucas"]

if (ListaDeParticipantesEPalestrantes.length < 100){
    console.log ("Cadastro realizado com sucesso!")
}
else {
    console.log ("Não foi possivel realizar o cadastro, pois atingiu o numero de participantes")
}
