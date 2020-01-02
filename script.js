boards = [[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null]]
turn = 'X'
board = [null, null, null, null, null, null, null, null, null]
main = [null, null, null, null, null, null, null, null, null]
num = 0
playable = -1
fill()

function showBox(e) {
  e = e || window.event;
  e = e.target || e.srcElement;
  if(e.innerText) return
  num = e.id.split('-')[1]
  if (playable != -1 && playable != num) return
  playable = e.id.split('-')[2]
  board = boards[num]
  board[e.id.split('-')[2]] = turn
  if(turn != 'X') turn = 'X'
  else turn = "O"
  document.getElementById('CurrentTurn').innerText = "Player "+ turn+"'s Turn"
  fill()
  checkStatus(board)
  checkStatus(main)
  //console.log(boards)
}

function fill(){
  for (let index = 0; index < board.length; index++)
  document.getElementById('box-'+num+'-'+index).innerText=board[index]
}

function checkStatus(tictac){
  check = tictac[4]
  //check middle
  if(check != null)
  for(var i = 0; i < 4; i ++)
  if(check == tictac[i] && check == tictac[8-i]){
    document.getElementById('container'+num).className += '-full'
    document.getElementById('board'+num+'Text').innerText = check
    //console.log('container'+num, main)
    main[num] = check
    return
  }

  //check top-left
  check = tictac[0]
  if(check != null && (check == tictac[1] && check == tictac[2] || check == tictac[3] && check == tictac[6])){
    document.getElementById('container'+num).className += '-full'
    document.getElementById('board'+num+'Text').innerText = check
    //console.log('container'+num, main)
    main[num] = check
    return
  }
  //check bottom right
  check = tictac[8]
  if(check != null && (check == tictac[6] && check == tictac[7] || check == tictac[2] && check == tictac[5])){
    document.getElementById('container'+num).className += '-full'
    document.getElementById('board'+num+'Text').innerText = check
    //console.log('container'+num, main)
    main[num] = check
    return
  }
  if(checkfull()){
    tictac = [ null, null, null, null, null, null, null, null, null]
    fill()
  }
}

function checkfull(){
  for (e of board)
  if( e == null) return false
  return true
}
