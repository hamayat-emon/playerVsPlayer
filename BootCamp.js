
(function() {
      

      const inputElm = document.querySelector("#input")
      const forElm = document.querySelector("form")
      const winScoreElm = document.querySelector('.winScore')
      const p1BtnElm = document.querySelector(".p1Btn")
      const p2BtnElm = document.querySelector(".p2Btn")
      const p1ScoreElm = document.querySelector('.p1Score')
      const p2ScoreElm = document.querySelector('.p2Score')
      const resetElm = document.querySelector(".reset")

      let winScore = 20;
      let p1Score = 0;
      let p2Score = 0;
      let turn = "player1" //DataLayer

      //view
      winScoreElm.textContent = winScore
      p1ScoreElm.textContent = p1Score
      p2ScoreElm.textContent = p2Score

      function generateRanNum(max) {
            return Math.floor((Math.random() * max + 1))
      
      }

      //part-1

      forElm.addEventListener('submit', e => {
            e.preventDefault()
            const inputVal = +inputElm.value
            if (inputVal === '' || inputVal < 1) {
                  if (
                  
                        !document.querySelector(".invalid-input")
                  ) {
                
                        forElm.insertAdjacentHTML('beforebegin',
                              '<p class="invalid-input">Please input valid number </p>')
                   
                  }
            } else {
                  if (document.querySelector(".invalid-input")
                  ) {
                        document.querySelector(".invalid-input").remove()
                   
                  }


                  winScore = +inputElm.value //ViewLayer
                  winScoreElm.textContent = winScore
                  inputElm.value = " "
                  initialPlayState()
            }
    
        
      })

      p1BtnElm.addEventListener('click', e => {
            if (turn === "player1") {
                  p1Score = generateRanNum(winScore)
                  p1ScoreElm.textContent = p1Score
                  turn = "player2"
                  p1BtnElm.setAttribute('disabled', 'disabled')
                  p2BtnElm.removeAttribute('disabled')
                  checkWinner()

            }
      })

      function checkWinner() {
            const isP1Winner = winScore === p1Score;
            const isP2Winner = winScore === p2Score;

            if (isP1Winner || isP2Winner) {
                  p1BtnElm.setAttribute('disabled', 'disabled')
                  p2BtnElm.setAttribute('disabled', 'disabled')
            }

            displayWinner(isP1Winner, isP2Winner)
      }


      function displayWinner(p1, p2) {
            if (p1) {
                  forElm.insertAdjacentHTML('beforebegin',
                        '<p class="winnerMes">player1 is Winner</p>')
            } else if (p2) {
                  forElm.insertAdjacentHTML('beforebegin',
                        '<p class="winnerMes" >player2 is Winner</p>')
            
            }
      
      }


      p2BtnElm.addEventListener('click', e => {
            if (turn === 'player2') {
                  p2Score == generateRanNum(winScore)
                  p2ScoreElm.textContent = p2Score
                  turn = "player1"
                  p2BtnElm.setAttribute('disabled', 'disabled')
                  p1BtnElm.removeAttribute('disabled')
            }
      })



      resetElm.addEventListener('click', e => {
            winScore = 20;
            initialPlayState()
      })

      function initialPlayState() {
      
            p1Score = 0;
            p2Score = 0;
            turn = "player1"

            winScoreElm.textContent = winScore
            p1ScoreElm.textContent = p1Score
            p2ScoreElm.textContent = p2Score
            p1BtnElm.removeAttribute('disabled')
            p2BtnElm.removeAttribute('disabled')

            if (document.querySelector(".winnerMes")) {
                  document.querySelector(".winnerMes").remove()
            }


      }

})()



