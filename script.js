var countdown = document.querySelector("#timer")
var start_quiz =  document.querySelector("#start-quiz-btn")
var resultText = document.querySelectorAll(".result")
var correctChoice = document.querySelectorAll(".correct-answers")
var wrongChoice = document.querySelectorAll(".answers")
var count = document.querySelector("#count")
var high_scores = document.querySelector("#high-scores")
var localStorage = localStorage["high-scores"]

var orderedList = document.querySelector("#leaderboard-list")
var firstPlace = document.querySelector("#firstPlace")
var secondPlace = document.querySelector("#secondPlace")
var thirdPlace = document.querySelector("#thirdPlace")
const node1 = document.createElement("li")
const node2 = document.createElement("li")
const node3 = document.createElement("li")


var subtracted = 5000
var time_left = 60;

var display_none1 = document.querySelector("#questions_block1")
var display_none2 = document.querySelector("#questions_block2")
var display_none3 = document.querySelector("#questions_block3")
var display_none4 = document.querySelector("#questions_block4")
var display_none5 = document.querySelector("#questions_block5")
var display_none6 = document.querySelector("#questions_block6")
var display_none7 = document.querySelector("#questions_block7")
var display_none8 = document.querySelector("#questions_block8")
var display_none9 = document.querySelector("#questions_block9")
var display_none10 = document.querySelector("#questions_block10")

var saveScoreForm = document.querySelector("#saveScore")
var saveScoreButton = document.querySelector("#saveUserScore")
var initials = document.querySelector("#userName")
var users = ""


console.log(correctChoice.length)
console.log(wrongChoice.length)


var modal = document.getElementById("myModal");


var btn = document.getElementById("high-scores");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  var reN = /[^0-9]/g;
  function sortNumerically(a, b) {
    var aN = parseInt(a.replace(reN, ""), 10);
    var bN = parseInt(b.replace(reN, ""));
    return aN === bN ? 0 : aN < bN ? 1 : -1;
  }
    const scoreList = localStorage["high-scores"]
    scoresArray = scoreList.split(",")

    
    scoresArray.sort(sortNumerically);

    first = document.createTextNode(scoresArray[0])
    second = document.createTextNode(scoresArray[1])
    third = document.createTextNode(scoresArray[2])
  
    modal.style.display = "block";

    node1.appendChild(first);
    orderedList.appendChild(node1)

    node2.appendChild(second);
    orderedList.appendChild(node2)

    node3.appendChild(third);
    orderedList.appendChild(node3)

    console.log(first)
    console.log(scoresArray)
    
    return scoresArray;
  };

console.log(orderedList)


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function start_countdown() {

    var timer = setInterval(function (){

        if(time_left > 0) {
            countdown.textContent = " " + time_left + " seconds left";
            time_left--;
            } else {
            countdown.textContent = " Out of time"

            display_none1.style.display = 'none'
            display_none2.style.display = 'none'
            display_none3.style.display = 'none'
            display_none4.style.display = 'none'
            display_none5.style.display = 'none'
            display_none6.style.display = 'none'
            display_none7.style.display = 'none'
            display_none8.style.display = 'none'
            display_none9.style.display = 'none'
            display_none10.style.display = 'none'
            
            saveScoreForm.style.display = 'block'

            };
        }, 1000);

};

function subtractTime() {
    time_left = time_left - 5;
}

function change_display(){
    var display_block = document.querySelector("#start_quiz_block")

    if (display_block.style.display === 'block') {
        display_block.style.display = 'none';
    };

    if (display_none1.style.display === 'none') {
        display_none1.style.display = 'block';
    };
};

correctChoice[0].addEventListener("click", function() {
    if (display_none2.style.display === 'none') {
        display_none2.style.display ='block';
    };
    if (display_none1.style.display === 'block') {
        display_none1.style.display ='none';
    };
    count.textContent = 0 + 10;
});
correctChoice[1].addEventListener("click", function() {
    if (display_none3.style.display === 'none') {
        display_none3.style.display = 'block';
    };
    if (display_none2.style.display === 'block') {
        display_none2.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[2].addEventListener("click", function() {
    if (display_none4.style.display === 'none') {
        display_none4.style.display = 'block';
    };
    if (display_none3.style.display === 'block') {
        display_none3.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[3].addEventListener("click", function() {
    if (display_none5.style.display === 'none') {
        display_none5.style.display = 'block';
    };
    if (display_none4.style.display === 'block') {
        display_none4.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[4].addEventListener("click", function() {
    if (display_none6.style.display === 'none') {
        display_none6.style.display = 'block';
    };
    if (display_none5.style.display === 'block') {
        display_none5.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[5].addEventListener("click", function() {
    if (display_none7.style.display === 'none') {
        display_none7.style.display = 'block';
    };
    if (display_none6.style.display === 'block') {
        display_none6.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[6].addEventListener("click", function() {
    if (display_none8.style.display === 'none') {
        display_none8.style.display = 'block';
    };
    if (display_none7.style.display === 'block') {
        display_none7.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[7].addEventListener("click", function() {
    if (display_none9.style.display === 'none') {
        display_none9.style.display = 'block';
    };
    if (display_none8.style.display === 'block') {
        display_none8.style.display ='none';
    };
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[8].addEventListener("click", function() {
    if (display_none10.style.display === 'none') {
        display_none10.style.display = 'block';
    };
    if (display_none9.style.display === 'block') {
        display_none9.style.display ='none';
    }
    count.textContent = parseInt(count.textContent) + 10;
});
correctChoice[9].addEventListener("click", function() {
    count.textContent = parseInt(count.textContent) + 10;

    if (display_none10.style.display === 'block') {
        display_none10.style.display ='none';
    };

    if (saveScoreForm.style.display === 'none') {
        saveScoreForm.style.display = 'block';
    };
});

wrongChoice[0].addEventListener("click", function() {
    if (display_none2.style.display === 'none') {
        display_none2.style.display ='block';
    };
    if (display_none1.style.display === 'block') {
        display_none1.style.display ='none';
    };

    subtractTime();
})
wrongChoice[1].addEventListener("click", function() {
    if (display_none2.style.display === 'none') {
        display_none2.style.display ='block';
    };
    if (display_none1.style.display === 'block') {
        display_none1.style.display ='none';
    };

    subtractTime();
})
wrongChoice[2].addEventListener("click", function() {
    if (display_none2.style.display === 'none') {
        display_none2.style.display ='block';
    };
    if (display_none1.style.display === 'block') {
        display_none1.style.display ='none';
    };

    subtractTime();
})
wrongChoice[3].addEventListener("click", function() {
    if (display_none3.style.display === 'none') {
        display_none3.style.display ='block';
    };
    if (display_none2.style.display === 'block') {
        display_none2.style.display ='none';
    };

    subtractTime();
})
wrongChoice[4].addEventListener("click", function() {
    if (display_none3.style.display === 'none') {
        display_none3.style.display ='block';
    };
    if (display_none2.style.display === 'block') {
        display_none2.style.display ='none';
    };

    subtractTime();
})
wrongChoice[5].addEventListener("click", function() {
    if (display_none3.style.display === 'none') {
        display_none3.style.display ='block';
    };
    if (display_none2.style.display === 'block') {
        display_none2.style.display ='none';
    };

    subtractTime();
})
wrongChoice[6].addEventListener("click", function() {
    if (display_none4.style.display === 'none') {
        display_none4.style.display ='block';
    };
    if (display_none3.style.display === 'block') {
        display_none3.style.display ='none';
    };

    subtractTime();
})
wrongChoice[7].addEventListener("click", function() {
    if (display_none4.style.display === 'none') {
        display_none4.style.display ='block';
    };
    if (display_none3.style.display === 'block') {
        display_none3.style.display ='none';
    };

    subtractTime();
})
wrongChoice[8].addEventListener("click", function() {
    if (display_none4.style.display === 'none') {
        display_none4.style.display ='block';
    };
    if (display_none3.style.display === 'block') {
        display_none3.style.display ='none';
    };

    subtractTime();
})
wrongChoice[9].addEventListener("click", function() {
    if (display_none5.style.display === 'none') {
        display_none5.style.display ='block';
    };
    if (display_none4.style.display === 'block') {
        display_none4.style.display ='none';
    };

    subtractTime();
})
wrongChoice[10].addEventListener("click", function() {
    if (display_none5.style.display === 'none') {
        display_none5.style.display ='block';
    };
    if (display_none4.style.display === 'block') {
        display_none4.style.display ='none';
    };

    subtractTime();
})
wrongChoice[11].addEventListener("click", function() {
    if (display_none5.style.display === 'none') {
        display_none5.style.display ='block';
    };
    if (display_none4.style.display === 'block') {
        display_none4.style.display ='none';
    };

    subtractTime();
})
wrongChoice[12].addEventListener("click", function() {
    if (display_none6.style.display === 'none') {
        display_none6.style.display ='block';
    };
    if (display_none5.style.display === 'block') {
        display_none5.style.display ='none';
    };

    subtractTime();
})
wrongChoice[13].addEventListener("click", function() {
    if (display_none6.style.display === 'none') {
        display_none6.style.display ='block';
    };
    if (display_none5.style.display === 'block') {
        display_none5.style.display ='none';
    };

    subtractTime();
})
wrongChoice[14].addEventListener("click", function() {
    if (display_none6.style.display === 'none') {
        display_none6.style.display ='block';
    };
    if (display_none5.style.display === 'block') {
        display_none5.style.display ='none';
    };

    subtractTime();
})
wrongChoice[15].addEventListener("click", function() {
    if (display_none7.style.display === 'none') {
        display_none7.style.display ='block';
    };
    if (display_none6.style.display === 'block') {
        display_none6.style.display ='none';
    };

    subtractTime();
})
wrongChoice[16].addEventListener("click", function() {
    if (display_none7.style.display === 'none') {
        display_none7.style.display ='block';
    };
    if (display_none6.style.display === 'block') {
        display_none6.style.display ='none';
    };

    subtractTime();
})
wrongChoice[17].addEventListener("click", function() {
    if (display_none7.style.display === 'none') {
        display_none7.style.display ='block';
    };
    if (display_none6.style.display === 'block') {
        display_none6.style.display ='none';
    };

    subtractTime();
})
wrongChoice[18].addEventListener("click", function() {
    if (display_none8.style.display === 'none') {
        display_none8.style.display ='block';
    };
    if (display_none7.style.display === 'block') {
        display_none7.style.display ='none';
    };

    subtractTime();
})
wrongChoice[19].addEventListener("click", function() {
    if (display_none8.style.display === 'none') {
        display_none8.style.display ='block';
    };
    if (display_none7.style.display === 'block') {
        display_none7.style.display ='none';
    };

    subtractTime();
})
wrongChoice[20].addEventListener("click", function() {
    if (display_none8.style.display === 'none') {
        display_none8.style.display ='block';
    };
    if (display_none7.style.display === 'block') {
        display_none7.style.display ='none';
    };

    subtractTime();
})
wrongChoice[21].addEventListener("click", function() {
    if (display_none9.style.display === 'none') {
        display_none9.style.display ='block';
    };
    if (display_none8.style.display === 'block') {
        display_none8.style.display ='none';
    };

    subtractTime();
})
wrongChoice[22].addEventListener("click", function() {
    if (display_none9.style.display === 'none') {
        display_none9.style.display ='block';
    };
    if (display_none8.style.display === 'block') {
        display_none8.style.display ='none';
    };

    subtractTime();
})
wrongChoice[23].addEventListener("click", function() {
    if (display_none9.style.display === 'none') {
        display_none9.style.display ='block';
    };
    if (display_none8.style.display === 'block') {
        display_none8.style.display ='none';
    };

    subtractTime();
})
wrongChoice[24].addEventListener("click", function() {
    if (display_none10.style.display === 'none') {
        display_none10.style.display ='block';
    };
    if (display_none9.style.display === 'block') {
        display_none9.style.display ='none';
    };

    subtractTime();
})
wrongChoice[25].addEventListener("click", function() {
    if (display_none10.style.display === 'none') {
        display_none10.style.display ='block';
    };
    if (display_none9.style.display === 'block') {
        display_none9.style.display ='none';
    };

    subtractTime();
})
wrongChoice[26].addEventListener("click", function() {
    if (display_none10.style.display === 'none') {
        display_none10.style.display ='block';
    };
    if (display_none9.style.display === 'block') {
        display_none9.style.display ='none';
    };

    subtractTime();
})
wrongChoice[27].addEventListener("click", function() {
    subtractTime();
    
    if (display_none10.style.display === 'block') {
        display_none10.style.display ='none';
    };

    if (saveScoreForm.style.display === 'none') {
        saveScoreForm.style.display = 'block';
    };
})
wrongChoice[28].addEventListener("click", function() {
    subtractTime();
    
    if (display_none10.style.display === 'block') {
        display_none10.style.display ='none';
    };

    if (saveScoreForm.style.display === 'none') {
        saveScoreForm.style.display = 'block';
    };
})
wrongChoice[29].addEventListener("click", function() {
    subtractTime();
    
    if (display_none10.style.display === 'block') {
        display_none10.style.display ='none';
    };

    if (saveScoreForm.style.display === 'none') {
        saveScoreForm.style.display = 'block';
    };
})


saveScoreButton.addEventListener ("click", function() {
    var score = count.textContent
    var user = initials.value

    exists = localStorage.getItem('high-scores')

    exists = exists ? exists.split(',') : [];

    exists.push(user + ": " + score);

    localStorage.setItem("high-scores", exists.toString());
    
});

start_quiz.addEventListener("click", function(){

    start_countdown()
    change_display()

});

console.log(localStorage["high-scores"])
console.log(typeof(localStorage["high-scores"]))
console.log(firstPlace)