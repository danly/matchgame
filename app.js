$(function(){

  var isFirstPick = true;
  var currentCard;


  $('div').click(function(e) {
    var classList = e.target.classList

    if (isFirstPick) {
      console.log('this is the first pick')
      currentCard = classList[classList.length - 1]
      console.log(currentCard)
      isFirstPick = false;
    } else if (currentCard === classList[classList.length - 1]) {
      isFirstPick = true;
      console.log('MATCH')
    } else {
      isFirstPick = true;
      console.log('NOT A MATCH')
    }

  })

})


