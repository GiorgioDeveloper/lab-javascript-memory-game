var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function main (event) { 
 
  function render(){
    var html = '';
    memoryGame.cards.forEach(function (pic) {
      html += '<div class="card" data-card-name="'+ pic.name +'">';
      html += '  <div class="back" name="'+ pic.img +'"></div>';
      html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
      html += '</div>';
    });
  
    // Add all the div's to the HTML
    document.querySelector('#memory_board').innerHTML = html;
  }

  render();
  // Bind the click event of each element to a function

  // $(".back").click(function(){
  //   $(this).attr("class", "front").siblings().attr("class", "back");
  // });



  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function () {
      $(this).attr("class", "front").siblings().attr("class", "back");
      memoryGame.pickedCards.push(this);
      
      
      if(memoryGame.pickedCards.length == 2){
        if(!memoryGame.checkIfPair()) {
          const card1 = memoryGame.pickedCards[0]
          const card2 = memoryGame.pickedCards[1]
          
          $(".back").css("pointer-events", "none");

          setTimeout(function(){
            $(card1).attr("class", "back").siblings().attr("class", "front");
            $(card2).attr("class", "back").siblings().attr("class", "front");
            $(".back").css("pointer-events", "auto");
          },1000);

          

        }
        memoryGame.pickedCards = [];
      
        if(memoryGame.isFinished()){
          setTimeout(function(){

      $(".winHide").attr("class", "win");
      $(".playAgainHide").attr("class", "playAgain").click(function(){

        $(".win").attr("class", "winHide");
        $(".playAgain").attr("class", "playAgainHide");
         memoryGame.pairsClicked = 0;
        $("#pairs_clicked").html(memoryGame.pairsClicked);
         memoryGame.pairsGuessed = 0;
        $("#pairs_guessed").html(memoryGame.pairsGuessed);
        
        memoryGame.shuffleCards()
        render();
        main();
        
        

      });


           },500);
          }
      }
   }

   
 });
});

