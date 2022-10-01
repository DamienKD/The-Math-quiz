player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player1_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player1_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player2_answer").innerHTML = "Answer Turn - " + player2_name ;

question_turn = "player1"
answer_turn = "player2"

function send() 
{
    get_number = document.getElementById("number").value;
    number = get_number.toLowerCase();
    console.log("number in lowerCase = " + number);

    charAt1 = number.charAt1(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.lenth/2);
    charAt2 = number.charAt1(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.lengh  - 1;
    charAt3 = number.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = number.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remome_charAt3);

    question_word = "<h4 id= 'number_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number").value = "";
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }

    document.getElementById("output").innerHTML = "";
}