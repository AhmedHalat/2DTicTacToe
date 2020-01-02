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
    checkStatus()
    console.log(boards)
}

function fill(){
    for (let index = 0; index < board.length; index++) 
        document.getElementById('box-'+num+'-'+index).innerText=board[index]
}

function checkStatus(){
    check = board[4]
    //check middle
    if(check != null)
        for(var i = 0; i < 4; i ++)
        if(check == board[i] && check == board[8-i]){
            alert('Player ' + check + " wins")
            return
}

//check top-left
check = board[0]
if(check != null && (check == board[1] && check == board[2] || check == board[3] && check == board[6])){
    alert('Player ' + check + " wins")
    return
}
//check bottom right
check = board[8]
if(check != null && (check == board[6] && check == board[7] || check == board[2] && check == board[5])){
    alert('Player ' + check + " wins")
    return
}
if(checkfull()){
    board = [ null, null, null, null, null, null, null, null, null]
    fill()
}
}

function checkfull(){
    for (e of board)
        if( e == null) return false
    return true
}