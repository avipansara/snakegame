const snakeDOM = document.querySelector('.snake-container');
const snake = [[5, 0], [5, 1], [5, 2]];
const gridSize = 20;
const intervalId = setInterval(eatFoot, 300);
const button = document.getElementById('button');

let food = [getRandomNumber(0, 19), getRandomNumber(0, 19)];
let currentDirection = 0;

button.addEventListener('click', () => {
  currentDirection = 39;
})

renderGame(food);

// Detect keyboard events
// 37 LEFT
// 38 UP
// 39 RIGHT
// 40 DOWN
document.onkeydown = function (event) {
  rightDirection(event.keyCode);
};

/**
 * Draw gameboard
 */
function renderGame(foodCord) {
  snakeDOM.innerHTML = '';
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      const div = document.createElement('div');
      div.classList.add('tile');
      snakeDOM.appendChild(div);

      // Render snake
      const snakeExist = snake.find(s => s[0] === x && s[1] === y);

      if (snakeExist) {
        div.classList.add('real-snake');
      }

      if (x === foodCord[0] && y === foodCord[1]) {
        div.classList.add('food');
      }

      const snakeHead = snake[snake.length - 1];
      const collisionX = snakeHead[0] < 0 || snakeHead[0] > gridSize - 1;
      const collisionY = snakeHead[1] < 0 || snakeHead[1] > gridSize - 1;
      if (collisionX || collisionY) {
        gameover();
      }

      // Comment the code - this is for fun
      // if (snake.length >  10) {
      //   alert('That is enough food for today!');
      // }

      if (snakeHead[0] === food[0] && snakeHead[1] === food[1]) {
        food = [getRandomNumber(0, 19), getRandomNumber(0, 19)];
        newSnakehead();
      }
    }
  }
}

function eatFoot() {
  if (!currentDirection) {
    return;
  }

  snake.shift();
  const head = snake[snake.length - 1];
  if (currentDirection === 39) {
    snake.push([head[0], head[1] + 1]);
    renderGame(food);
  } else if (currentDirection === 38) {
    snake.push([head[0] - 1, head[1]]);
    renderGame(food);
  } else if (currentDirection === 37) {
    snake.push([head[0], head[1] - 1]);
    renderGame(food);
  } else if (currentDirection === 40) {
    snake.push([head[0] + 1, head[1]]);
    renderGame(food);
  }
}

function rightDirection(eventNumber) {
  if (currentDirection === 39 && eventNumber !== 37) {
    currentDirection = eventNumber;
  } else if (currentDirection === 37 && eventNumber !== 39) {
    currentDirection = eventNumber;
  } else if (currentDirection === 38 && eventNumber !== 40) {
    currentDirection = eventNumber;
  } else if (currentDirection === 40 && eventNumber !== 38) {
    currentDirection = eventNumber;
  }
}

function newSnakehead() {
  const currentHead = snake[snake.length - 1];

  if (currentDirection === 37) {
    snake.push([currentHead[0], currentHead[1] - 1]);
  } else if (currentDirection === 38) {
    snake.push([currentHead[0] - 1, currentHead[1]]);
  } else if (currentDirection === 39) {
    snake.push([currentHead[0], currentHead[1] + 1]);
  } else if (currentDirection === 40) {
    snake.push([currentHead[0] + 1, currentHead[1]]);
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let num =  Math.floor(Math.random() * (max - min + 1)) + min;
  const snakeNum = snake.flatMap(n => n);

  /**
   * Making sure snake and food don't get intersect
   */
  if (snakeNum.includes(num)) {
    if (num > 10) {
      num = num - 1;
    } else {
      num = num + 1;
    }
  }
  return num;
}

function gameover() {
  snakeDOM.innerHTML = '';
  const gameover = document.createElement("div");
  const text = document.createTextNode("Game over!");
  gameover.appendChild(text);
  snakeDOM.appendChild(gameover);
  gameover.classList.add('gameover');
  snakeDOM.classList.add('centered-container');
  clearInterval(intervalId);
  return;
}
