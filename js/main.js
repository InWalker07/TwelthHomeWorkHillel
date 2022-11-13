const cardColors = ["red", "red", "green", "green", "blue", "blue", "yellow","yellow", "brown", 
"brown", "gray", "gray", "lightgreen", "lightgreen", "lightblue", "lightblue", "violet", "violet" ];
console.log(cardColors);
let cards = document.querySelectorAll("div");
cards = [...cards];

const startTime = new Date().getTime();



let activeCard = "";
const activeCards = [];
const gameLenth = cards.length/2;
let gameResult = 0;
const clickCard = function(){
    activeCard = this;
    if(activeCard==activeCards[0]) return;
    activeCard.classList.remove('hidden');
     if(activeCards.length===0){
        console.log('1 element');
        activeCards[0]=activeCard;
        return;
}else{
    console.log("2 element");
    cards.forEach(card=>removeEventListener ("click", clickCard))
    activeCards[1] = activeCard;
    setTimeout(function(){
        if(activeCards[0].className===activeCards[1].className){
            activeCards.forEach(card=>card.classList.add(cardColors[Math.floor(Math.random()*cardColors.length)]))
            gameResult++;
            if(gameResult== gameLenth){
                const endTime = new Date().getTime();
                const gameTime = (endTime-startTime)/1000
                Location.reload();
            }
        }
        else{
            activeCards.forEach(card=>card.classList.add("hidden"))
        }
        let activeCard = "";
        activeCards.length = 0;
        cards.forEach(card=>card.removeEventListener("click", clickCard))

    }, 500)
}
};

const init = function(){
    cards.forEach(card=>{
        card.classList.add("hidden")
        card.addEventListener("click", clickCard)
    }, 2000)
};


init();




