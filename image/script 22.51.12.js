let flippedCount = 0;
let flippedCount2 = 0;
let score = 0;

function flipCard(element) {
  imgLeft = document.querySelector('.img-left');
  nameImg = document.querySelector('.name-img');
  cards1 = imgLeft.getElementsByClassName("card");
  cards2 = nameImg.getElementsByClassName("card");

  for (let i = 0; i < cards1.length; i++) {
    card = cards1[i];
    if (card.contains(element)) {
      if (card.classList.contains("flipped")) {
        card.classList.remove("flipped");
        card.classList.remove("flipped-" + flippedCount);
        flippedCount--;
        if(score > 0){
          score -= 1;
        } 
      } else {
        card.classList.add("flipped");
        flippedCount++;
        card.classList.add("flipped-" + flippedCount);
      }
      break;
    }
  }

  for (let i = 0; i < cards2.length; i++) {
    card = cards2[i];
    if (card.contains(element)) {
      if (card.classList.contains("flipped")) {
        card.classList.remove("flipped");
        card.classList.remove("flipped-" + flippedCount2);
        flippedCount2--;
        if(score > 0){
          score -= 1;
        }
      } else {
        card.classList.add("flipped");
        flippedCount2++;
        card.classList.add("flipped-" + flippedCount2);
      }
      break;
    }
  }
  checkMatch()
}

function checkMatch() {
  let imgLeftCards = Array.from(document.querySelectorAll('.img-left .card.flipped'));
  let nameImgCards = Array.from(document.querySelectorAll('.name-img .card.flipped'));
  let flippedImgCards = Array.from(document.querySelectorAll('.card.flipped img'));
  let flippedSpanCards = Array.from(document.querySelectorAll('.card.flipped span'));

  let imgLeftClassNames = imgLeftCards.map((card) => card.className);
  let nameImgClassNames = nameImgCards.map((card) => card.className);

  if (imgLeftClassNames.length === 1 && nameImgClassNames.length === 1) {
    let flippedImgClassName = flippedImgCards[0].className;
    let flippedSpanClassName = flippedSpanCards[0].className;

    if (flippedImgClassName === flippedSpanClassName) {
      score += 1;
    }
    else if(!score === 0){
      score -= 1;
    }
  }

  if (imgLeftClassNames.length === 2 && nameImgClassNames.length === 2) {
    let flippedImgClassName = flippedImgCards[0].className;
    let flippedSpanClassName = flippedSpanCards[0].className;

    if (flippedImgClassName === flippedSpanClassName) {
      score += 1;
    }
    else if(!score === 0){
      score -= 1;
    }
  }

  if (imgLeftClassNames.length === 3 && nameImgClassNames.length === 3) {
    let flippedImgClassName = flippedImgCards[0].className;
    let flippedSpanClassName = flippedSpanCards[0].className;

    if (flippedImgClassName === flippedSpanClassName) {
      score += 1;
    }
    else if(!score === 0){
      score -= 1;
    }
  }

  let scoreElement = document.getElementById('score');
  scoreElement.textContent = 'Score: ' + score;

}
