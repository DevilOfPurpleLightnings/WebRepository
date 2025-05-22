const variants = ['variation1.json', 'variation2.json', 'variation3.json'];
const fileName = variants[Math.floor(Math.random() * variants.length)];
const url = `data/${fileName}`;
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restart = document.getElementById('restart');
const newGame = document.getElementById('newGame');
const moveBack = document.getElementById('moveBack');
const counter = document.getElementById('counter');
const timerT = document.getElementById('timer');
const targetT = document.getElementById('target');
let rememberGrid;
let grid;
let target;
let clickCount;
let lastmove_row;
let lastmove_col;
let timer;
let timer_counter;
let game;
fetch(url)
  .then(response => response.json())
  .then(data => {
    rememberGrid = data.grid;
    grid = data.grid;
    target = data.target;
    console.log(grid);
    clickCount = 0;
    lastmove_row = [];
    lastmove_col = [];
    timer_counter = 0;
    timer = setInterval(() => {
      if(game){
        timer_counter += 1;
        timerT.textContent = 'Час ' + timer_counter;
      }else{
        clearInterval(timer);
      }
    }, 1000);
    game = true;
    painting();
    for(let cell of cells){
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      cell.addEventListener('click', () => {
        if(game){
          clickCount++;
          lastmove_row.push(row);
          lastmove_col.push(col);
          changeCounter()
          move(row, col)
          painting();
          checkWin()
        }
      });
    }
    updateTarget();
  })
  .catch(err => {
    message.textContent = 'Помилка завантаження JSON';
    console.error(err);
  });

function updateTarget(){
  targetT.textContent = 'Ціль: ' + target;
}
function painting(){
  for(let cell of cells){
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    if(grid[row][col] === 0) {
      cell.classList.remove('on');
    }else{
      cell.classList.add('on');
    }
  }
}

function checkCellEvent(row, col){
  if(row >=0 && row <=4 && col >=0 && col <=4) grid[row][col] = (grid[row][col] === 0) ? 1 : 0; 
}
function changeCounter(){
  counter.textContent = 'Кількість ходів: ' + clickCount;
}
function move(row, col){
      checkCellEvent(row+1, col+1);
      checkCellEvent(row+1, col);
      checkCellEvent(row+1, col-1);
      
      checkCellEvent(row, col+1);
      checkCellEvent(row, col);
      checkCellEvent(row, col-1);
      
      checkCellEvent(row-1, col+1);
      checkCellEvent(row-1, col);
      checkCellEvent(row-1, col-1);
}
newGame.addEventListener('click', ()=>{
  location.reload();
})
restart.addEventListener('click', ()=>{
  grid = rememberGrid;
  timer_counter = 0;
  move = 0;
  changeCounter();
  painting();
})
moveBack.addEventListener('click', ()=>{
  if(game){
      if(lastmove_row.length>0 && lastmove_col.length>0){
      clickCount--;
      let row = lastmove_row[lastmove_row.length-1]
      let col = lastmove_col[lastmove_col.length-1]
      lastmove_row.pop();
      lastmove_col.pop();
      changeCounter()
      move(row, col)
      painting();
    }
  }
})
function checkWin() {
  for (let row of grid) {
    for (let col of row) {
      if (col === 1) return;
    }
  }
  game = false;
  message.textContent = 'Ви виграли!';
}
