document.addEventListener('DOMContentLoaded', ()=>{

    let pieces = document.querySelectorAll(".piece")

    pieces.forEach((piece)=>{ 
        piece.addEventListener("click", handleClick)
    })

})

    function handleClick(event) {
    
        let piece = event.target
        let position = piece.id 
    
        if(handleMove(position)){

            setTimeout(()=> {
                alert("GAME OVER! -- O VENCEDOR FOI " + playerTime + "!")
            }, 10)
            
        }
            updatePieces(position)
    }

    function updatePieces(position) {
        let piece = document.getElementById(position.toString())
        let symbol = board[position]
        piece.innerHTML = `<div class='${symbol}'></div>`
    }   

    function restart() {

        board = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;
    document.querySelectorAll(".piece").forEach(piece => piece.innerHTML = "");

    }

