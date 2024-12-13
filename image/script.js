let lists = document.getElementsByClassName("list");
let bottonDrops = document.querySelectorAll(".drop-box > #botton-drop");
let boxDraggables = document.getElementsByClassName("box-draggable");
let selectedElement = null;

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    selectedElement = e.target;
  });

  list.addEventListener("touchstart", function (e) {
    selectedElement = e.target;
  });
}

for (let bottonDrop of bottonDrops) {
  bottonDrop.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  bottonDrop.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  bottonDrop.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selectedElement) {
      let clonedElement = selectedElement.cloneNode(true);
      bottonDrop.appendChild(clonedElement);
      selectedElement.parentNode.removeChild(selectedElement);
      selectedElement = null;
    }
  });

  bottonDrop.addEventListener("touchend", function (e) {
    e.preventDefault();
    if (selectedElement) {
      let clonedElement = selectedElement.cloneNode(true);
      bottonDrop.appendChild(clonedElement);
      selectedElement.parentNode.removeChild(selectedElement);
      selectedElement = null;
    }
  });
}


for (let bottonDrop of bottonDrops) {
  bottonDrop.addEventListener("dragstart", function (e) {
    selectedElement = e.target;
  });

  bottonDrop.addEventListener("touchstart", function (e) {
    selectedElement = e.target;
  });

  bottonDrop.addEventListener("dragend", function (e) {
    selectedElement = null;
  });

  bottonDrop.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  bottonDrop.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  bottonDrop.addEventListener("drop", function (e) {
    e.preventDefault();
    if (selectedElement) {
      let clonedElement = selectedElement.cloneNode(true);
      selectedElement.parentNode.appendChild(clonedElement);
      selectedElement.parentNode.removeChild(selectedElement);
      selectedElement = null;
    }
  });

  bottonDrop.addEventListener("touchend", function (e) {
    e.preventDefault();
    if (selectedElement) {
      let clonedElement = selectedElement.cloneNode(true);
      selectedElement.parentNode.appendChild(clonedElement);
      selectedElement.parentNode.removeChild(selectedElement);
      selectedElement = null;
    }
  });

  for (let boxDraggable of boxDraggables) {

    boxDraggable.addEventListener("dragstart", function (e) {
      selectedElement = e.target;
    });
  
    boxDraggable.addEventListener("dragend", function (e) {
      selectedElement = null;
    });

    boxDraggable.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    boxDraggable.addEventListener("touchmove", function (e) {
      e.preventDefault();
    });
  
    boxDraggable.addEventListener("drop", function (e) {
      e.preventDefault();
      if (selectedElement) {
        let clonedElement = selectedElement.cloneNode(true);
        boxDraggable.appendChild(clonedElement);
        selectedElement.parentNode.removeChild(selectedElement);
        selectedElement = null;
      }
    });

    boxDraggable.addEventListener("touchend", function (e) {
      e.preventDefault();
      if (selectedElement) {
        let clonedElement = selectedElement.cloneNode(true);
        selectedElement.parentNode.appendChild(clonedElement);
        selectedElement.parentNode.removeChild(selectedElement);
        selectedElement = null;
      }
    });
  }
}

document.querySelector(".button-submit").addEventListener("click", function() {
  let bottonDrops = document.querySelectorAll(".drop-box > #botton-drop");
  let score = 0;

  bottonDrops.forEach(function(bottonDrop) {
    let bottonDropClass = bottonDrop.classList[0];
    let bottonDropChildren = bottonDrop.querySelectorAll(".list");

    if (bottonDropChildren.length > 0) {
      let listId = bottonDropChildren[0].id;

      if (listId === bottonDropClass) {
        score++;
      }
    }
  });

  let scoreContainer = document.getElementById("score-container");
  scoreContainer.textContent = "Score : " + score;
});