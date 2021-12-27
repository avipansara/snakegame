# SNAKE GAME

### Description
The goal of this game project is to navigate the snake and eat food as much possible. Snake should not hit the wall or game will be over. 

### Project Structure

#### `snake.html`
- Renders what you see on the screen or page of the browser

#### `snake.css`
- Styles the html elements

#### `snake.js`
- Makes game interactive

### Project Attributes
In this game, four arrow keys UP, DOWN, LEFT and RIGHT used to control the snake direction. The snake will move to same direction automatically at the interval of 300 ms. The snake can not move to 2 directions at the same time. The snake grows if it collides with food. The game will be over if snake hit the wall.

The game board, snake length, and the snake speed is configurable. 

### Sudocode / Sequence 

1. Initialize the game by loading board, snake and food
2. Start the game by clicking on button
3. Move the snake by pressing UP, DOWN, LEFT, RIGHT arrow keys
4. Eat food
```
init();
renderGame() {
    for x = 0 to gridSize
        for y = 0 to gridSize
            
            render game board
            
            if snake === x,y
            render snake
            
            if snake > gridSize
            game over
            
            if snake === food
            increase snake length
}
startGame();
eatFood();
checkIfCollides();
```

### Development Phases
1. Render the game board. The board size is 20 x 20 which is a 2D array
2. Render snake and food in this board. Here, the snake length is 3
3. Move the snake to same direction at the interval of 300 ms
4. Increase the snake length when it collides with food
5. Stop the game if snake hit the wall

### Thought Process
This approach visualizes the board as 2D array. In this game, the snake is broken down into sections. Each one of which keeps track of its position in the board. The most important thing in this game is to update the snake. To update snake, It is important to keep track of snake's head, which is the first section of the snake. The next important part is to determine the snake position. Snake's position is updated by key direction. It's important to avoid updating each section's position before you're done analyzing the whole snake. To keep it simple, think of the snake's head as the leader. The rest of the sections of the snake will follow its predecessor.

This is not the only way to make this game. This game can be achieved using 1D array as well, but it is little difficult to maintain and configure the code.