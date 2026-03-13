const pronombres = [
{key:"yo", texto:"я"},
{key:"tu", texto:"ты"},
{key:"el", texto:"он"},
{key:"nosotros", texto:"мы"},
{key:"ustedes", texto:"вы"},
{key:"ellos", texto:"они"}
];

const verbos = [

{
infinitivo:"говорить",
yo:"говорю",
tu:"говоришь",
el:"говорит",
nosotros:"говорим",
ustedes:"говорите",
ellos:"говорят"
},

{
infinitivo:"читать",
yo:"читаю",
tu:"читаешь",
el:"читает",
nosotros:"читаем",
ustedes:"читаете",
ellos:"читают"
},

{
infinitivo:"писать",
yo:"пишу",
tu:"пишешь",
el:"пишет",
nosotros:"пишем",
ustedes:"пишете",
ellos:"пишут"
},

{
infinitivo:"жить",
yo:"живу",
tu:"живёшь",
el:"живёт",
nosotros:"живём",
ustedes:"живёте",
ellos:"живут"
},

{
infinitivo:"работать",
yo:"работаю",
tu:"работаешь",
el:"работает",
nosotros:"работаем",
ustedes:"работаете",
ellos:"работают"
},

{
infinitivo:"любить",
yo:"люблю",
tu:"любишь",
el:"любит",
nosotros:"любим",
ustedes:"любите",
ellos:"любят"
},

{
infinitivo:"видеть",
yo:"вижу",
tu:"видишь",
el:"видит",
nosotros:"видим",
ustedes:"видите",
ellos:"видят"
},

{
infinitivo:"знать",
yo:"знаю",
tu:"знаешь",
el:"знает",
nosotros:"знаем",
ustedes:"знаете",
ellos:"знают"
},

{
infinitivo:"думать",
yo:"думаю",
tu:"думаешь",
el:"думает",
nosotros:"думаем",
ustedes:"думаете",
ellos:"думают"
},

{
infinitivo:"хотеть",
yo:"хочу",
tu:"хочешь",
el:"хочет",
nosotros:"хотим",
ustedes:"хотите",
ellos:"хотят"
}

];

let verboActual;
let pronombreActual;

function nuevaPregunta(){

verboActual = verbos[Math.floor(Math.random()*verbos.length)];
pronombreActual = pronombres[Math.floor(Math.random()*pronombres.length)];

document.getElementById("verbo").textContent =
"Verbo: " + verboActual.infinitivo;

document.getElementById("pronombre").textContent =
"Pronombre: " + pronombreActual.texto;

document.getElementById("respuesta").value="";
document.getElementById("resultado").textContent="";

}

function verificar(){

let input = document.getElementById("respuesta").value.trim();

let correcta = verboActual[pronombreActual.key];

if(input === correcta){

document.getElementById("resultado").textContent = "Correcto!";
setTimeout(nuevaPregunta,1500);

}else{

document.getElementById("resultado").textContent = "Intenta otra vez";

}

}

nuevaPregunta();


function volver(){
window.location.href = "index.html";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}