function getCoffee() {
    const selectElement = document.getElementById('chooseCoffee');
    const chooseCoffee = selectElement.value;
  
    let cafe1 = "Crio Café";
    let cafe2 = "King of the Fork"; 
    let cafe3 = "HM Food";
  
    let resultCoffee;
        if (chooseCoffee === 'cafe1') {
            resultCoffee = cafe1;
        } else if (chooseCoffee === 'cafe2') {
            resultCoffee = cafe2;
        } else if (chooseCoffee === 'cafe3') {
            resultCoffee = cafe3;
        }
  
    alert(JSON.stringify(resultCoffee));
  }