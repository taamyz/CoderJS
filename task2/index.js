
const question = prompt("Em que ano você nasceu? - Somente Números");


if (question >= 1940 && question <= 1960 ) {
    alert("Você é Baby Boomer");
}
else if (question >= 1961 && question <= 1980 ) {
    alert("Você é Geração X");
}
else if (question >= 1981 && question <= 1994 ) {
    alert("Você é Millenial");
}
else if (question >= 1995 && question <= 2010 ) {
    alert("Você é Gen Z");
}
else if (question >= 2011 ) {
    alert("Você é Alpha");
}
else {
    alert("Digite sua idade apenas com números, exemplo: 2001")
};