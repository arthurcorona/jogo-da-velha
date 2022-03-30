document.addEventListener('DOMContentLoaded', ()=>{

    let pieces = document.querySelectorAll(".piece")

    pieces.forEach((piece)=>{ 
        piece.addEventListener("click", handleClick)
    })

})

    let player1 = document.getElementById("playerApple");
    let player2 = document.getElementById("playerDroid");

    let nome = document.getElementById("nome");
    let button = document.getElementById("button");
    let placar1 = document.getElementById("placarA");
    let placar2 = document.getElementById("placarD");
    let cont = 1;
    let cont2 = 1;

    button.addEventListener('click', sendName);

    function sendName() {
        if(nome.value != 0 && player1.innerText == "Player IOS") {
            let string = nome.value; 
            player1.innerHTML = string[0].toUpperCase() +  
            string.slice(1); 
            nome.value = "";
            nome.placeholder = "PlAYER 2 (ANDROID)"
        }
     else{
        let string = nome.value; 
        player2.innerHTML = string[0].toUpperCase() +  
        string.slice(1); 
        nome.style.display = "none"
        btn.style.display = "none"
    }

    }

    function handleClick(event) {
    
        let piece = event.target
        let position = piece.id 
    
        if(handleMove(position)){

            setTimeout(()=> {
                if(draw){
                    document.getElementById("display").innerHTML = "Deu velha!";
                    document.querySelectorAll(".p").forEach(p => p.style.display = "none");
                    openWindow()

                    return

                }
            
                playerTime = `${"Player " + (playerTime + 1)}`

                if(playerTime == "PLAYER IOS" && player1.innerText > "" ) {

                    playerTime = player1.innerHTML

                } 

                if(playerTime == "PLAYER DROID" && player2.innerText > "" ) {

                    playerTime = player2.innerHTML

                } 

                let display = document.getElementById("display").innerHTML = playerTime;
                console.log(player1);
                console.log(player2);
                 if (display == player1.innerText) {
                       placar1.innerText = cont ++
                       
                    }
                    
                    if (display == player2.innerText) {
                     placar2.innerText = cont2 ++
                     
                  }
            
                 openWindow()

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
    draw = false
    document.querySelectorAll(".piece").forEach(piece => piece.innerHTML = "");

    }

    function openWindow() {
//parei aq pit bull
        document.getElementById("windowWinner").style.display = "block"
        document.getElementById("backgroundWinner").style.display = "block"
        
        setTimeout(() => {
            document.getElementById("windowWinner").style.display = "none"
            document.getElementById("backgroundWinner").style.display = "none"

            document.querySelectorAll(".p").forEach(p => p.style.display = "block")
            restart()
            }, 2000)


    }





