let comidas = [];

for (let i = 0; i < 5; i++) {
    let comidasDadas = prompt("Alimente o nosso monstrinho");
    comidas.push(comidasDadas);
};

if(comidas.length >= 5){
    alert("Ah não quero mais, já estou cheio");
};