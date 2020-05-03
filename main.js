//alert("hello");
function ageInDays(){


    var birthYear = prompt("В каком году вы родились?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Тебе ' + ageInDayss + ' дней');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


}

function reset() {
    document.getElementById('ageInDays').remove();
    
}

function generateCat () {
    var image = document.createElement('img');
    var div = document.getElementById('cats');
    image.src = "https://vgif.ru/gifs/155/vgif-ru-25724.gif";
    div.appendChild(image);


}

//  ИГРА КАМЕНЬ БУМАГА



function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberChoice(randTorpsInt());
    console.log('ComputerChoice:', botChoice);

    result = dicideWinner(humanChoice, botChoice); // [0 , 1] human lost || bot won
    console.log(result);

    message = finalMessage(result); // (message: 'you won', 'color': 'green')
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randTorpsInt() {
    return Math.floor(Math.random()*3);
}

function numberChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function dicideWinner(humanChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},

    }
    var yourScore = rpsDatabase[humanChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][humanChoice];
    return [yourScore, computerScore]
}


function finalMessage([yourScore, computerChoice]) {
    if (yourScore === 0) {
        return {'message': 'Ты проиграл', 'color':'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'Ничья', 'color': 'yellow'};
    } else {
        return {'message': 'Ты выиграл', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    //remove all elements

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height = 150px style='border-box: 5px dotted red'>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height = 150px style='box-shadow: 0px 10px 20px red'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding = 30px; '>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}

// chalenge 4 colors button 

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0 ; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}


  
function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value ==='reset'){
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        buttonRandom();
    }
}

function buttonsRed () {
    for (let i = 0 ; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }

}


function buttonsGreen () {
    for (let i = 0 ; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }

}

function buttonColorReset () {
    for (let i = 0 ; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }

}

function buttonRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i=0 ; i< all_buttons.length; i++ ){
        let randomNumber = Math.floor(Math.random()* 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);

    }
}

