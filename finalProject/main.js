
function getCoffee() {
    const selectElement = document.getElementById('chooseCoffee');
    const chooseCoffee = selectElement.value;
    
    function cafe(nome, endereco, propriedade) {
        this.nome = nome;
        this.endereco = endereco; 
        this.propriedade = propriedade;
    }

    const cafe1 = new cafe("Crio Café", "Av Santos, 302", "Bom coado no melhor custo beneficio");    
    const cafe2 = new cafe("HM Food", "Benedito Calixto, 139", "Servem almoço executivo durante a semana");
    const cafe3 = new cafe("King of the fork", "Arthur de Azevedo, 29", "Melhores expressos e café com leite");    


    let resultCoffee;
        if (chooseCoffee === 'cafe1') {
            resultCoffee = (cafe1);
        } else if (chooseCoffee === 'cafe2') {
            resultCoffee = (cafe2);
        } else if (chooseCoffee === 'cafe3') {
            resultCoffee = (cafe3);
        }
  
    alert(JSON.stringify(resultCoffee));
  };