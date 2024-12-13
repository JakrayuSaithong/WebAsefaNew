// คำนวณคะแนนที่เริ่มต้น
let score = 0;

// รองรับการคลิกบนการ์ด
const images = document.querySelectorAll('.card-box-images img');
const spans = document.querySelectorAll('.card-name span');
let matchedImages = [];
let matchedSpans = [];

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = false;

  if (firstCard.tagName === 'IMG' && secondCard.tagName === 'SPAN') {
    isMatch = firstCard.id === secondCard.id;
  } else if (firstCard.tagName === 'SPAN' && secondCard.tagName === 'IMG') {
    isMatch = firstCard.id === secondCard.id;
  }

  if (isMatch) {
    disableCards();
    updateScore();
    checkWin();
  } else {
    unflipCards();
  }
}

function disableCards() {
  if (firstCard.tagName === 'IMG' && secondCard.tagName === 'SPAN') {
    firstCard.removeEventListener('click', flipCard);
    secondCard.parentNode.removeEventListener('click', flipCard);
    matchedImages.push(firstCard);
    matchedSpans.push(secondCard);
  } else if (firstCard.tagName === 'SPAN' && secondCard.tagName === 'IMG') {
    firstCard.parentNode.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedSpans.push(firstCard);
    matchedImages.push(secondCard);
  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function updateScore() {
  score++;
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Score: ${score}`;
}

function checkWin() {
  const totalPairs = images.length;
  if (score === totalPairs) {
    alert('Congratulations! You won the game!');
    lockBoard = true;
  }
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// กำหนดการคลิกบนรูปภาพ (img)
images.forEach(image => image.addEventListener('click', flipCard));

// กำหนดการคลิกบนข้อความ (span)
spans.forEach(span => span.addEventListener('click', flipCard));
