var player1_name=localStorage.getItem("player1_name");
console.log(player1_name);
var player2_name=localStorage.getItem("player2_name");
console.log(player2_name);
var player1_score=0;
var player2_score=0;

var qn_turn="player1"
var ans_turn="player2"

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("q_turn").innerHTML="Question Turn - "+player1_name;
document.getElementById("ans_turn").innerHTML="Answer Turn - "+player2_name;

function send(){
    number1=document.getElementById("input_num1").value;
    number2=document.getElementById("input_num2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);
    question_number = "<h3>" + number1 + " X "+ number2 +"</h3>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn1' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
    

}

var qn_turn="player1"
var ans_turn="player2"


function check(){
    get_answer = document.getElementById("ans_input").value;
    console.log(answer);
    if(get_answer == actual_answer){
        if(ans_turn=="player1"){
            player1_score=player1_score+1;
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score ;
        }
    }
    if(q_turn=="player1"){
        q_turn="player2";
        document.getElementById("q_turn").innerHTML="Question Turn- "+q_turn;
    }
    else{
        q_turn="player1";
        document.getElementById("q_turn").innerHTML="Question Turn- "+q_turn;
    }


    if(ans_turn=="player1"){
        ans_turn="player2";
        document.getElementById("ans_turn").innerHTML="Answer Turn- "+ans_turn;
    }
    else{
        ans_turn="player1";
        document.getElementById("ans_turn").innerHTML="Answer Turn- "+ans_turn;
    }

}