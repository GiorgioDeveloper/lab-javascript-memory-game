class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  shuffleCards() {
    
   

    for (let i = 0; i < this.cards.length; i++) {
      let j = Math.floor(Math.random() * i );
      const element = this.cards[i];
      if( j  !== i ) {
        this.cards[i] = this.cards[j];
      }
      this.cards[j] = element;
    }
    
  }

  

  checkIfPair() {
    const card1 = this.pickedCards[0].outerHTML
    const card2 = this.pickedCards[1].outerHTML;

   
    this.pairsClicked++
    $("#pairs_clicked").html(this.pairsClicked);
    if (card1 == card2) {
      this.pairsGuessed++ 
      $("#pairs_guessed").html(this.pairsGuessed);
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if(this.pairsGuessed == 12){
return true
    } else {
      return false
    }
  }
}

