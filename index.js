// Array de palabras en ruso
const palabrasEnRuso = [
    "привет", "спасибо", "дом", "кошка", "собака", "мама", "папа", "яблоко", "вода", "школа",
    "книга", "музыка", "пицца", "чай", "кофе", "кот", "сестра", "брат", "погода", "день",
    "ночь", "луна", "солнце", "цветок", "дерево", "трава", "окно", "дверь", "машина", "зима",
    "лето", "весна", "осень", "еда", "фрукт", "овощ", "молоко", "сок", "человек", "друг",
    "любовь", "счастье", "город", "река", "озеро", "море", "гора", "поле", "звезда", "парк",
    "больница", "полиция", "школьник", "учитель", "врач", "перевод", "язык", "рука", "нога",
    "голова", "лицо", "глаз", "нос", "рот", "ухо", "живот", "сердце", "спина", "палец", "пальто",
    "платье", "ботинок", "рубашка", "брюки", "капюшон", "штаны", "пиджак", "платок", "шарф",
    "перчатка", "галстук", "пояс", "сумка", "часы", "очки", "кольцо", "браслет", "цвет", "черный",
    "белый", "красный", "синий", "зеленый", "желтый", "оранжевый", "фиолетовый", "серый",
    "коричневый", "розовый", "радуга", "котенок", "щенок", "игрушка", "банан", "апельсин",
    "лимон", "арбуз", "слива", "вишня", "малина", "клубника", "абрикос", "персик", "ягода",
    "капуста", "огурец", "помидор", "морковь", "лук", "чеснок", "картофель", "баклажан", "тыква",
    "быть","иметь","делать","идти","ехать","говорить","сказать","знать","думать",
    "понимать","видеть","смотреть","слушать","слышать","читать","писать","жить",
    "работать","учиться","учить","любить","хотеть","мочь","дать","брать","помнить",
    "забыть","ждать","искать","найти","открыть","закрыть","начать","закончить","играть",
    "купить","продать","пить","есть","готовить","спать","вставать","сидеть","стоять",
    "лежать","плавать","бегать","ходить","прийти","уйти",
    "большой","маленький","хороший","плохой","новый","старый","молодой","красивый","некрасивый","сильный",
    "слабый","быстрый","медленный","дорогой","дешёвый","горячий","холодный","тёплый","вкусный","невкусный",
    "интересный","скучный","трудный","лёгкий","высокий","низкий","длинный","короткий","широкий","узкий",
    "чистый","грязный","светлый","тёмный","умный","глупый","счастливый","грустный","добрый","злой",
    "тихий","громкий","красный","синий","зелёный","жёлтый","белый","чёрный","серый","коричневый"
];

// Array de traducciones en inglés
const traduccionesEnIngles = [
    "hola", "gracias", "casa", "gato", "perro", "mamá", "papá", "manzana", "agua", "escuela",
    "libro", "música", "pizza", "té", "café", "gato", "hermana", "hermano", "clima", "día",
    "noche", "luna", "sol", "flor", "árbol", "hierba", "ventana", "puerta", "coche", "invierno",
    "verano", "primavera", "otoño", "comida", "fruta", "verdura", "leche", "jugo", "persona",
    "amigo", "amor", "felicidad", "ciudad", "río", "lago", "mar", "montaña", "campo", "estrella",
    "parque", "hospital", "policía", "estudiante", "profesor", "médico", "traducción", "idioma",
    "mano", "pie", "cabeza", "cara", "ojo", "nariz", "boca", "oreja", "estómago", "corazón",
    "espalda", "dedo", "abrigo", "vestido", "zapato", "camisa", "pantalones", "capucha", "pantalones",
    "chaqueta", "pañuelo", "bufanda", "guante", "corbata", "cinturón", "bolso", "reloj", "gafas",
    "anillo", "pulsera", "color", "negro", "blanco", "rojo", "azul", "verde", "amarillo", "naranja",
    "morado", "gris", "marrón", "rosa", "arcoíris", "gatito", "cachorro", "juguete", "plátano",
    "naranja", "limón", "sandía", "ciruela", "cereza", "frambuesa", "fresa", "albaricoque", "melocotón",
    "baya", "col", "pepino", "tomate", "zanahoria", "cebolla", "ajo", "patata", "berenjena", "cachaza",
    "ser / estar","tener","hacer","ir (a pie)","ir (en transporte)","hablar","decir","saber","pensar",
    "entender","ver","mirar","escuchar","oír","leer","escribir","vivir",
    "trabajar","estudiar","enseñar","amar","querer","poder","dar","tomar","recordar",
    "olvidar","esperar","buscar","encontrar","abrir","cerrar","empezar","terminar","jugar",
    "comprar","vender","beber","comer","cocinar","dormir","levantarse","sentarse","estar de pie",
    "estar acostado","nadar","correr","caminar","llegar","irse",
    "grande","pequeño","bueno","malo","nuevo","viejo","joven","hermoso","feo","fuerte",
    "débil","rápido","lento","caro","barato","caliente","frío","templado","sabroso","sin sabor",
    "interesante","aburrido","difícil","fácil","alto","bajo","largo","corto","ancho","estrecho",
    "limpio","sucio","claro","oscuro","inteligente","tonto","feliz","triste","amable","malvado",
    "silencioso","ruidoso","rojo","azul","verde","amarillo","blanco","negro","gris","marrón"
];


function mostrarPalabraAleatoria(){
    var indice = Math.floor(Math.random() * palabrasEnRuso.length);
    var palabraEnRuso  = palabrasEnRuso[indice];
    var traduccionEnIngles  = traduccionesEnIngles[indice]; 

    document.getElementById("palabra_a_tipear").textContent = palabraEnRuso
    document.getElementById("traduccion_palabra").textContent = traduccionEnIngles

    document.getElementById("palabra_ingresada").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("traduccion").style.display = "none";
    document.getElementById("palabra_a_tipear").classList.remove("animacion-exito");
}



function verificarPalabra() {
    var palabraCorrecta = document.getElementById("palabra_a_tipear").textContent.trim();
    var palabraIngresada = document.getElementById("palabra_ingresada").value.trim();

    if (palabraCorrecta === palabraIngresada) {
        document.getElementById("resultado").textContent = "¡Correcto!";
        document.getElementById("palabra_a_tipear").classList.add("animacion-exito"); // Agregar clase para animación
        document.getElementById("traduccion").style.display = "block"; // Mostrar el elemento de traducción
        mostrarTraduccion(palabraCorrecta); // Llamar a la función para mostrar la traducción
        setTimeout(function() {
            mostrarPalabraAleatoria(); // Llamar a la función para mostrar otra palabra después de un breve retraso
        }, 2000)
    } else {
        document.getElementById("resultado").textContent = "Incorrecto. Sigue intentando.";
    }

    
}

function mostrarTraduccion(palabra) {
    var indice = palabrasEnRuso.indexOf(palabra);
    if (indice !== -1 && indice < traduccionesEnIngles.length) {
        var traduccion = traduccionesEnIngles[indice];
        document.getElementById("traduccion_palabra").textContent = traduccion;
    } else {
        document.getElementById("traduccion_palabra").textContent = "Traducción no disponible";
    }}

    document.getElementById("palabra_ingresada").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            verificarPalabra();
        }});



mostrarPalabraAleatoria();