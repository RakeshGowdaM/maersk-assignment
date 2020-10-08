var cardsData = [{
        'value': 1
        , 'code': 'backgroundColor1'
}
    , {
        'value': 2
        , 'code': 'backgroundColor2'
}
    , {
        'value': 3
        , 'code': 'backgroundColor3'
}
     , {
        'value': 4
        , 'code': 'backgroundColor2'
}
    , {
        'value': 5
        , 'code': 'backgroundColor3'
}
    , {
        'value': 6
        , 'code': 'backgroundColor4'
}
    , {
        'value': 7
        , 'code': 'backgroundColor4'
}
    , {
        'value': 8
        , 'code': 'backgroundColor1'
}
    , {
        'value': 9
        , 'code': 'backgroundColor3'
}];
var numbericCards = document.getElementById("cards");
document.getElementById('sortBy').innerHTML = 'Rakesh M'
loadGrid(cardsData);

function shuffleGrid() {
    for (let i = 0; i < cardsData.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (cardsData.length - i));
        let temp = cardsData[j];
        cardsData[j] = cardsData[i];
        cardsData[i] = temp;
    }
    loadGrid(cardsData);
}

function sortGrid() {
    let sortedCards = cardsData.sort((firstCard, secondCard) => {
        return firstCard.value - secondCard.value
    });
    loadGrid(sortedCards);
}

function loadGrid(data) {
    numbericCards.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let para = document.createElement("div");
        para.className = 'cols-3 card' + ' ' + data[i].code;
        para.innerHTML = data[i].value;
        numbericCards.appendChild(para);
    }
}