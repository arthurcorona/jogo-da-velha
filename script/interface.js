document.addEventListener('DOMContentLoaded', () => {

    let pieces = document.querySelectorAll(".piece")

    pieces.forEach((piece)=>{ 
        pieces.addEventListener("click", handleClick)
    })

})

    function handleClick(event) {

        let piece = event.target
        let position = piece.id 
    
        handleMove(position)
        updatePieces()
    }

    function updatePieces() {

        let pieces = document.querySelectorAll(".piece")

        pieces.forEach((piece)=>{ 
        
            let position = piece.id
            let symbol = board[position]

            if(symbol != '') {
                piece.innerHTML = `<div class='${symbol}'></div>`
            }


        })

    }