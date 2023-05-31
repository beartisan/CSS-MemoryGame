


window.onload = pageLoad;
function pageLoad(){

    // let startGame = array.from(document.getElementsByClassName("show-container"));
    // let cards = array.from(document.getElementsByClassName("card"));

    // startGame.forEach(startGame => {
    //     startGame.addEventListener('click', () => {
    //         startGame.classList.remove('visible');
    //     })
    // })
    // setTimeout(function() {
    //     document.getElementById("startGame")}, 5000);
    // ;

    let flipCard = document.querySelectorAll(".card");
    let clickedCard = false;
    let firstChoice, secondChoice;
    let sameCard = 0;
    let boxBoard = false;

    flipCard.forEach(card => card.addEventListener('click', thisCard))

    function thisCard(){
        if (boxBoard) return;
        this.classList.toggle('flip');
        this.classList.add('flip'); 
        
        //if statements
        //when first card is clicked
        if(!clickedCard){
            clickedCard = true;
            firstChoice = this;
            console.log("First choice is " + firstChoice);
            return;
        } 
        //if  firstChoice is opened, then secondcard is logic is
            secondChoice = this;
            clickedCard = false;

            console.log("Second choice is" + secondChoice)
        
            //call for matching 
            pairMatch();
    }

    //when firstChoice and secondChoice are matched, 
    function pairMatch() {
        if (firstChoice.dataset.framework === secondChoice.dataset.framework) 
        {
            disableCards();
            return;
        }
             //then if they are not match, the animation is showing

            flipbackCards();
        }

        function disableCards() {
            firstChoice.removeEventListener('click', thisCard);
            secondChoice.removeEventListener('click', thisCard);
        }


    function flipbackCards() {
        boxBoard = true;

    setTimeout(() => {
        // call css (CSS Line 266 .card.incorrect)  to make them vibrate
        firstChoice.classList.add('incorrect');
        secondChoice.classList.add('incorrect');
    }, 500);

    setTimeout(() => {
        // call css 
            
        firstChoice.classList.remove('flip');
        secondChoice.classList.remove('flip');
       firstChoice = secondChoice = "";
        clickedCard = false;
        newGame();}, 1500);
    }//end flipbackCards()


  
    //source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    function randomShuffle(){
        flipCard.forEach (card => {
            let randomCard = Math.floor(Math.random() * 12);
            card.style.order = randomCard;
        });

    }// end randomShuffle


    //resets the game, and also shuffles the board
    function newGame(){
        [firstChoice, secondChoice] = [null, null];
        [boxBoard, clickedCard] = [false, false];
    } //end newGame()

    //call randomShuffle
    randomShuffle()


    //if the person lost the game
    // function youLose(){   }


    flipCard.forEach(card=> {card.addEventListener("click", thisCard)})

} // end pageLoaded



//source: in HTML page