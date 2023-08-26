


const gamepiece = () => {
  board = [null, null, null, null, null, null, null, null, null]


  const X = (coordinate) => {
    board[coordinate] = "X";
  }
  const O = (coordinate) => {
    board[coordinate] = "O"
  }

  return { X, O }
}

game = gamepiece()

function test() {
  console.log(true)
}

count = 0;
gameOver = false;

ai = false;

function incrementCount() {
  count += 1;


}

function checkWinorTie() {
  one = document.getElementById("spot1")
  two = document.getElementById("spot2")
  three = document.getElementById("spot3")
  four = document.getElementById("spot4")
  five = document.getElementById("spot5")
  six = document.getElementById("spot6")
  seven = document.getElementById("spot7")
  eight = document.getElementById("spot8")
  nine = document.getElementById("spot9")





  if (one.textContent == "X" && two.textContent == "X" && three.textContent == "X" || four.textContent == "X" && five.textContent == "X" && six.textContent == "X" || seven.textContent == "X" && eight.textContent == "X" && nine.textContent == "X" || one.textContent == "X" && five.textContent == "X" && nine.textContent == "X" || three.textContent == "X" && five.textContent == "X" && seven.textContent == "X" || one.textContent == "X" && four.textContent == "X" && seven.textContent == "X" || two.textContent == "X" && five.textContent == "X" && eight.textContent == "X" || three.textContent == "X" && six.textContent == "X" && nine.textContent == "X") {
    console.log("X WINS")
    winner = document.getElementById("winScreen")
    winner.textContent = "WINNER IS X"
    document.getElementById("popupForm").style.display = "block";
    gameOver = true;


  } else if (one.textContent == "O" && two.textContent == "O" && three.textContent == "O" || four.textContent == "O" && five.textContent == "O" && six.textContent == "O" || seven.textContent == "O" && eight.textContent == "O" && nine.textContent == "O" || one.textContent == "O" && five.textContent == "O" && nine.textContent == "O" || three.textContent == "O" && five.textContent == "O" && seven.textContent == "O" || one.textContent == "O" && four.textContent == "O" && seven.textContent == "O" || two.textContent == "O" && five.textContent == "O" && eight.textContent == "O" || three.textContent == "O" && six.textContent == "O" && nine.textContent == "O") {
    console.log("O WINS")
    winner = document.getElementById("winScreen")

    if (ai == false) {
      winner.textContent = "WINNER IS O"
    } else {
      winner.textContent = "AI WINS"
    }

    document.getElementById("popupForm").style.display = "block";
    gameOver = true;


  } else if (one.textContent != "" && two.textContent != "" && three.textContent != "" && four.textContent != "" && five.textContent != "" && six.textContent != "" && seven.textContent != "" && eight.textContent != "" && nine.textContent != "") {
    console.log("DRAW")
    winner = document.getElementById("winScreen")
    winner.textContent = "DRAW"
    document.getElementById("popupForm").style.display = "block";
    gameOver = true;
  }





}


function aiChooseHard() {
  if (ai == true && easy == false) {

    one = document.getElementById("spot1")
    two = document.getElementById("spot2")
    three = document.getElementById("spot3")
    four = document.getElementById("spot4")
    five = document.getElementById("spot5")
    six = document.getElementById("spot6")
    seven = document.getElementById("spot7")
    eight = document.getElementById("spot8")
    nine = document.getElementById("spot9")





    if (one.textContent == "O" && two.textContent == "O" && three.textContent == "") {
      three.textContent = "O"
      incrementCount();
      checkWinorTie();
      return true;

    }

    if (one.textContent == "O" && three.textContent == "O" && two.textContent == "") {
      two.textContent = "O"
      incrementCount();
      checkWinorTie();
      return true;

    }


    if (two.textContent == "O" && three.textContent == "O" && one.textContent == "") {
      one.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (four.textContent == "O" && five.textContent == "O" && six.textContent == "") {
      six.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (six.textContent == "O" && five.textContent == "O" && four.textContent == "") {
      four.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }


    if (four.textContent == "O" && six.textContent == "O" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }


    if (seven.textContent == "O" && eight.textContent == "O" && nine.textContent == "") {
      nine.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (nine.textContent == "O" && eight.textContent == "O" && seven.textContent == "") {
      seven.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (seven.textContent == "O" && nine.textContent == "O" && eight.textContent == "") {
      eight.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (one.textContent == "O" && four.textContent == "O" && seven.textContent == "") {
      seven.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (seven.textContent == "O" && four.textContent == "O" && one.textContent == "") {
      one.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }
    if (one.textContent == "O" && seven.textContent == "O" && four.textContent == "") {
      four.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }



    if (two.textContent == "O" && five.textContent == "O" && eight.textContent == "") {
      eight.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (five.textContent == "O" && eight.textContent == "O" && two.textContent == "") {
      two.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (two.textContent == "O" && eight.textContent == "O" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "O" && six.textContent == "O" && nine.textContent == "") {
      nine.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (nine.textContent == "O" && six.textContent == "O" && three.textContent == "") {
      three.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "O" && nine.textContent == "O" && six.textContent == "") {
      six.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (one.textContent == "O" && five.textContent == "O" && nine.textContent == "") {
      nine.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }
    if (nine.textContent == "O" && five.textContent == "O" && one.textContent == "") {
      one.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (one.textContent == "O" && nine.textContent == "O" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "O" && five.textContent == "O" && seven.textContent == "") {
      seven.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (seven.textContent == "O" && five.textContent == "O" && three.textContent == "") {
      three.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "O" && seven.textContent == "O" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }



    //break 
    if (one.textContent == "X" && two.textContent == "X" && three.textContent == "") {
      three.textContent = "O"
      incrementCount();
      checkWinorTie();
      return true;

    }

    if (one.textContent == "X" && three.textContent == "X" && two.textContent == "") {
      two.textContent = "O"
      incrementCount();
      checkWinorTie();
      return true;

    }


    if (two.textContent == "X" && three.textContent == "X" && one.textContent == "") {
      one.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (four.textContent == "X" && five.textContent == "X" && six.textContent == "") {
      six.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (six.textContent == "X" && five.textContent == "X" && four.textContent == "") {
      four.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }


    if (four.textContent == "X" && six.textContent == "X" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }


    if (seven.textContent == "X" && eight.textContent == "X" && nine.textContent == "") {
      nine.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (nine.textContent == "X" && eight.textContent == "X" && seven.textContent == "") {
      seven.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (seven.textContent == "X" && nine.textContent == "X" && eight.textContent == "") {
      eight.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (one.textContent == "X" && four.textContent == "X" && seven.textContent == "") {
      seven.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (seven.textContent == "X" && four.textContent == "X" && one.textContent == "") {
      one.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }
    if (one.textContent == "X" && seven.textContent == "X" && four.textContent == "") {
      four.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }



    if (two.textContent == "X" && five.textContent == "X" && eight.textContent == "") {
      eight.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (five.textContent == "X" && eight.textContent == "X" && two.textContent == "") {
      two.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (two.textContent == "X" && eight.textContent == "X" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "X" && six.textContent == "X" && nine.textContent == "") {
      nine.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (nine.textContent == "X" && six.textContent == "X" && three.textContent == "") {
      three.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "X" && nine.textContent == "X" && six.textContent == "") {
      six.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (one.textContent == "X" && five.textContent == "X" && nine.textContent == "") {
      nine.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }
    if (nine.textContent == "X" && five.textContent == "X" && one.textContent == "") {
      one.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (one.textContent == "X" && nine.textContent == "X" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "X" && five.textContent == "X" && seven.textContent == "") {
      seven.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (seven.textContent == "X" && five.textContent == "X" && three.textContent == "") {
      three.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }

    if (three.textContent == "X" && seven.textContent == "X" && five.textContent == "") {
      five.textContent = "O"
      checkWinorTie();
      incrementCount();
      return true;
    }
    //ai logic
    i = 0
    while (i < 100) {
      let x = Math.floor(Math.random() * 9 + 1);

      if (document.getElementById(`spot${x}`).textContent == "") {
        document.getElementById(`spot${x}`).textContent = "O";
        incrementCount();

        break;
      }
      i += 1;

    }



  }


  checkWinorTie();
  return true;
}

function aiChoose() {








  //ai logic
  i = 0
  if (ai == true && easy == true) {
    while (i < 100) {
      let x = Math.floor(Math.random() * 9 + 1);

      if (document.getElementById(`spot${x}`).textContent == "") {
        document.getElementById(`spot${x}`).textContent = "O";
        incrementCount();
        break;
      }
      i += 1;

    }


  }


  checkWinorTie();
  return true;
}






function choose(number) {



  move = document.getElementById(`spot${number}`)




  console.log(count)
  if (gameOver == true) {
    return true;
  }
  if (ai == true && count % 2 == 1 && easy == true) {
    aiChoose();
    return true;


  }
  if (ai == true && count % 2 == 1 && easy == false) {
    aiChooseHard();
    return true;


  }



  if (move.textContent == "X" || move.textContent == "O") {
    console.log("error spot taken")
  } else {
    if (count % 2 == 0) {
      move.textContent = "X";
      console.log(count, true)
      incrementCount();

      if (ai == true) {
        choose(1)
      }
    }
    else {
      move.textContent = "O";
      incrementCount();

    }
  }


  checkWinorTie();

}

const player = (playerName, marker) => {
  const sayHello = () => {
    console.log("XD")
  }
  return { sayHello, marker }
}

marty = player("Marty", "O")

marty.sayHello()

console.log(marty.marker)


function playAgain() {
  one = document.getElementById("spot1")
  two = document.getElementById("spot2")
  three = document.getElementById("spot3")
  four = document.getElementById("spot4")
  five = document.getElementById("spot5")
  six = document.getElementById("spot6")
  seven = document.getElementById("spot7")
  eight = document.getElementById("spot8")
  nine = document.getElementById("spot9")

  one.textContent = ""
  two.textContent = ""
  three.textContent = ""
  four.textContent = ""
  five.textContent = ""
  six.textContent = ""
  seven.textContent = ""
  eight.textContent = ""
  nine.textContent = ""

  gameOver = false;
  ai = false;
  easy = false;
  document.getElementById("popupForm").style.display = "none";
  count = 0;
}



function playAI() {
  one = document.getElementById("spot1")
  two = document.getElementById("spot2")
  three = document.getElementById("spot3")
  four = document.getElementById("spot4")
  five = document.getElementById("spot5")
  six = document.getElementById("spot6")
  seven = document.getElementById("spot7")
  eight = document.getElementById("spot8")
  nine = document.getElementById("spot9")

  one.textContent = ""
  two.textContent = ""
  three.textContent = ""
  four.textContent = ""
  five.textContent = ""
  six.textContent = ""
  seven.textContent = ""
  eight.textContent = ""
  nine.textContent = ""
  gameOver = false;
  document.getElementById("popupForm").style.display = "none";
  count = 0;

  ai = true;
  easy = true



}

function playAIhard() {
  one = document.getElementById("spot1")
  two = document.getElementById("spot2")
  three = document.getElementById("spot3")
  four = document.getElementById("spot4")
  five = document.getElementById("spot5")
  six = document.getElementById("spot6")
  seven = document.getElementById("spot7")
  eight = document.getElementById("spot8")
  nine = document.getElementById("spot9")

  one.textContent = ""
  two.textContent = ""
  three.textContent = ""
  four.textContent = ""
  five.textContent = ""
  six.textContent = ""
  seven.textContent = ""
  eight.textContent = ""
  nine.textContent = ""
  gameOver = false;
  document.getElementById("popupForm").style.display = "none";
  count = 0;

  ai = true;
  easy = false
}

// board = [[null, null, null], [null, null, null], [null, null, null]]
// console.log(board)

// board = [["blank", "blank", "blank"], ["blank", "blank", "blank"], ["blank", "blank", "blank"]]
// console.log(board)