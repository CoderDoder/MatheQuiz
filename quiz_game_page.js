player1_name=localStorage.getItem(player1_name);
player2_name=localStorage.getItem(player2_name);
var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_qn").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_ans").innerHTML="Answer Turn - "+player2_name;

function send(){
    number1=document.getElementById("input_num1").value;
    number2=document.getElementById("input_num2").value;
    actual_answer=parseInt(number1)*parseInt(number2)
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer:<input type='number' id='input_check_box'>";
    check_button="<br><br><button class='btn1' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("input_num1").innerHTML="";
    document.getElementById("input_num2").innerHTML="";


}