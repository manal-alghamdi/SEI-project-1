var currentPlayer="X" ;
var p1=document.getElementById("P1");
var p2=document.getElementById("P2");


var xCount=0 ;
var oCount=0 ;
var tCount=0 

var bgm = new Audio('bgm.mp3');
var winAudio = new Audio('win.mp3');
var tieAudio = new Audio('tie.mp3');
var closeAudio = new Audio('close.mp3');
var clickAudio = new Audio('click.mp3');

document.getElementById('bgm').muted = false;
document.getElementById('bgm').play();

var modal1 = document.getElementById("welcom");
var modal2 = document.getElementById("choosePlayer");
var model3 = document.getElementById("userToken");
var modelAI = document.getElementById("userWithAIToken");
var modal4 = document.getElementById("gs");
var closeModel = document.getElementsByClassName("close-model")[0];






 function model(){
   modal1.style.display = "block";

}

$("#close-model-one").on("click" ,function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    model3.style.display = "none";
    modelAI.style.display = "none";
    closeAudio.play();
  });

$("#close-model-two").on("click" ,function() {
    modal3.style.display = "none";
    closeAudio.play();
  });

$("#close-model-three").on("click" ,function() {
    modal3.style.display = "none";
    closeAudio.play();
  });

$(".Next").on("click",function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
    model3.style.display = "none";
    modelAI.style.display = "none";
    
    closeAudio.play();
})
$(".Next2").on("click",function(){
    closeAudio.play();
    getChoiceValue();
    if(getChoiceValue() == true){

    modal1.style.display = "none";
    modal2.style.display = "none";
    model3.style.display = "block";
    modelAI.style.display = "none";
  
    }else if(getChoiceValue() == false){
        modal1.style.display = "none";
        modal2.style.display = "none";
        model3.style.display = "none";
        modelAI.style.display = "block";
        //window.location.replace("withAI.html")

    }
    
    
})
$(".PreviousBtn").on("click",function(){
    modal1.style.display = "block";
    modal2.style.display = "none";
    model3.style.display = "none";
    closeAudio.play();
})
$(".PreviousBtn2").on("click",function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
    model3.style.display = "none";
    modelAI.style.display = "none";
    closeAudio.play();
})


var currentMsg ;


$(".submitBtn").on("click" , function(){

    if(getChoiceValue() == true){
        model3.style.display = "none";
        currentMsg=getPlayer1Name()+" Turn"
        $(".turntext").text(currentMsg)
        $("#P1").text(getPlayer1Name())
        $("#P2").text(getPlayer2Name())
    }else if(getChoiceValue() == false){
        modelAI.style.display = "none";
        currentMsg=getPlayer1Name()+" Turn"
        $(".turntext").text(currentMsg)
        $("#P1").text(getPlayer1Name())
        $("#P2").text(getPlayer2Name()) }

        
        closeAudio.play();
     
})

function getChoiceValue(){
    var antherPlayer= document.getElementById("anther-player");
    $('#game2').css('display','visible');
    var game1 = document.getElementById("game1");
var game2 = document.getElementById("game2");

  if( antherPlayer.checked == true) { 
    game1.style.display ="visible"
    game2.style.display ="none"
      return true ;}
  else { 
  
    game1.style.display = "none";
    $('#game2').css('visibility','visible');
    
  
    return false ;}
}



function getPlayer1Name(){
    if(getChoiceValue() == true){
        var Player1Name = document.getElementById("p1").value;
        if(Player1Name == ""){ return "Player 1" }
        else{ return Player1Name ; }
    }else if(getChoiceValue() == false){
        var Player1Name = document.getElementById("pp1").value;
        if(Player1Name == ""){ return "You" }
        else{ 
            
            console.log(Player1Name);
            return Player1Name ; }}

   
}
function getPlayer2Name(){
    if(getChoiceValue() == true){
        var Player2Name = document.getElementById("p2").value;
        if(Player2Name == ""){ return "Player 2" }
        else{ return Player2Name ; }
    }else if(getChoiceValue() == false){
        var Player2Name = "Computer"
        return Player2Name ; }
}


  

var boxes=[ "0" , "1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ];

var box ;
function remove(array, element) {
    const index = array.indexOf(element);
  
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

$(".box").on("click" , function(){
   console.log("anthor player function");
    var currentMsg=getPlayer1Name()+" Turn"
    $(".turntext").text(currentMsg) 
    clickAudio.play();
    var boxClicked = this ;
     boxClicked.innerText = currentPlayer ;
     
      if(boxClicked.innerText == "X"){
        $(boxClicked).css("background-color" , "#ca9aac")
     }else if (boxClicked.innerText == "O"){
        $(boxClicked).css("background-color" , "#FAF0E6")
     }
    
     game2();
    
        if( currentPlayer == "X"){
            currentPlayer ="O" 
            currentMsg=getPlayer2Name()+" Turn"
            $(".turntext").text( currentMsg)
        }else{
            currentPlayer = "X"
            currentMsg=getPlayer1Name()+" Turn"
            $(".turntext").text( currentMsg)
        }  
        $(boxClicked).css("pointer-events" ,"none")}

)

$(".box2").on("click",function(){
    console.log("AI function");
    var currentMsg=getPlayer1Name()+" Turn"
    $(".turntext").text(currentMsg) 
    clickAudio.play();
    var boxClicked = this ;
     boxClicked.innerText = "X" ;
     
     remove(boxes , `${boxClicked.id}`)
    
     console.log(boxes)
     
      if(boxClicked.innerText == "X"){
        $(boxClicked).css("background-color" , "#ca9aac")
     }else if (boxClicked.innerText == "O"){
        $(boxClicked).css("background-color" , "#FAF0E6")
     }
     
        if( currentPlayer == "X"){
            currentMsg=getPlayer2Name()+" Turn"
           
            box = boxes[Math.floor(Math.random() * boxes.length)];
            console.log("number of index  " + box)
            remove(boxes , `${box}`)
            console.log(boxes)
            $(`#${box}`).text("O")
        }
        game();
        $(boxClicked).css("pointer-events" ,"none")
      }
       
);


function game(){
    if( 
        //horizantal 
        ($("#0").html() == "X" && $("#1").html() == "X" && $("#2").html() == "X") ||
        ($("#3").html() == "X" && $("#4").html() == "X" && $("#5").html() == "X") || 
        ($("#6").html() == "X" && $("#7").html() == "X" && $("#8").html() == "X") ||
        //vertical
        ($("#0").html() == "X" && $("#3").html() == "X" && $("#6").html() == "X") ||
        ($("#1").html() == "X" && $("#4").html() == "X" && $("#7").html() == "X") || 
        ($("#2").html() == "X" && $("#5").html() == "X" && $("#8").html() == "X") ||
        // diagonal
        ($("#0").html() == "X" && $("#4").html() == "X" && $("#8").html() == "X") ||
        ($("#2").html() == "X" && $("#4").html() == "X" && $("#6").html() == "X") ){

            document.getElementById('bgm').pause();
            winAudio.play();
            winAudio.currentTime=0;
            modal4.style.display = "block";
            if(getChoiceValue == true){
           $(".box").css("pointer-events" ,"none")
           $(".box2").css("pointer-events" ,"none")}else{
            $(".box").css("pointer-events" ,"none")
            $(".box2").css("pointer-events" ,"none")
           }
           $(".game-result").text( getPlayer1Name()+" win ")   
             xCount=xCount+1;
           $("#Player1").text(`${xCount}`)
           currentPlayer="X" ;
           
          
        } else if( 
         //horizantal 
         ($("#0").html() == "O" && $("#1").html() == "O" && $("#2").html() == "O") ||
         ($("#3").html() == "O" && $("#4").html() == "O" && $("#5").html() == "O") || 
         ($("#6").html() == "O" && $("#7").html() == "O" && $("#8").html() == "O") ||
         //vertical
         ($("#0").html() == "O" && $("#3").html() == "O" && $("#6").html() == "O") ||
         ($("#1").html() == "O" && $("#4").html() == "O" && $("#7").html() == "O") || 
         ($("#2").html() == "O" && $("#5").html() == "O" && $("#8").html() == "O") ||
         // diagonal
         ($("#0").html() == "O" && $("#4").html() == "O" && $("#8").html() == "O") ||
         ($("#2").html() == "O" && $("#4").html() == "O" && $("#6").html() == "O") ){
            modal4.style.display = "block";
            document.getElementById('bgm').pause();
            winAudio.play();
            $(".box").css("pointer-events" ,"none")
            $(".box2").css("pointer-events" ,"none")
            //////////////////////
            if(getPlayer1Name()=="" && getPlayer1Name()==""){
                $(".game-result").text(" Player 2 win ")
             }else{ $(".game-result").text( getPlayer2Name()+" win ")  }  
            oCount=oCount+1;
            currentPlayer="X" ;
            $("#Player2").text(`${oCount}`)
           
      }else if(
          $('#0').text() != 0 && $('#1').text() != 0  && $('#2').text() != 0 && $('#3').text() != 0 && 
          $('#4').text() != 0 && $('#5').text() != 0  && $('#6').text() != 0 && $('#7').text() != 0 && 
          $('#8').text() != 0 ){
         modal4.style.display = "block";
         document.getElementById('bgm').pause();
         
         tieAudio.play();
         tieAudio.currentTime=0;

          $(".game-result").text( "Draw ! ")
           tCount=tCount+1 
          $("#Tie").text(`${tCount}`)
          currentPlayer="X" ;
        
      }
     


}
function game2(){
    if( 
        //horizantal 
        ($("#b0").html() == "X" && $("#b1").html() == "X" && $("#b2").html() == "X") ||
        ($("#b3").html() == "X" && $("#b4").html() == "X" && $("#b5").html() == "X") || 
        ($("#b6").html() == "X" && $("#b7").html() == "X" && $("#b8").html() == "X") ||
        //vertical
        ($("#b0").html() == "X" && $("#b3").html() == "X" && $("#b6").html() == "X") ||
        ($("#b1").html() == "X" && $("#b4").html() == "X" && $("#b7").html() == "X") || 
        ($("#b2").html() == "X" && $("#b5").html() == "X" && $("#b8").html() == "X") ||
        // diagonal
        ($("#b0").html() == "X" && $("#b4").html() == "X" && $("#b8").html() == "X") ||
        ($("#b2").html() == "X" && $("#b4").html() == "X" && $("#b6").html() == "X") ){

            document.getElementById('bgm').pause();
            winAudio.play();
            winAudio.currentTime=0;
            modal4.style.display = "block";
            if(getChoiceValue == true){
           $(".box").css("pointer-events" ,"none")
           $(".box2").css("pointer-events" ,"none")}else{
            $(".box").css("pointer-events" ,"none")
            $(".box2").css("pointer-events" ,"none")
           }
           $(".game-result").text( getPlayer1Name()+" win ")   
             xCount=xCount+1;
           $("#Player1").text(`${xCount}`)
           currentPlayer="X" ;
           
          
        } else if( 
         //horizantal 
         ($("#b0").html() == "O" && $("#b1").html() == "O" && $("#b2").html() == "O") ||
         ($("#b3").html() == "O" && $("#b4").html() == "O" && $("#b5").html() == "O") || 
         ($("#b6").html() == "O" && $("#b7").html() == "O" && $("#b8").html() == "O") ||
         //vertical
         ($("#b0").html() == "O" && $("#b3").html() == "O" && $("#b6").html() == "O") ||
         ($("#b1").html() == "O" && $("#b4").html() == "O" && $("#b7").html() == "O") || 
         ($("#b2").html() == "O" && $("#b5").html() == "O" && $("#b8").html() == "O") ||
         // diagonal
         ($("#b0").html() == "O" && $("#b4").html() == "O" && $("#b8").html() == "O") ||
         ($("#b2").html() == "O" && $("#b4").html() == "O" && $("#b6").html() == "O") ){
            modal4.style.display = "block";
            document.getElementById('bgm').pause();
            winAudio.play();
            $(".box").css("pointer-events" ,"none")
            $(".box2").css("pointer-events" ,"none")
            //////////////////////
            if(getPlayer1Name()=="" && getPlayer1Name()==""){
                $(".game-result").text(" Player 2 win ")
             }else{ $(".game-result").text( getPlayer2Name()+" win ")  }  
            oCount=oCount+1;
            currentPlayer="X" ;
            $("#Player2").text(`${oCount}`)
           
      }else if(
          $('#b0').text() != 0 && $('#b1').text() != 0  && $('#b2').text() != 0 && $('#b3').text() != 0 && 
          $('#b4').text() != 0 && $('#b5').text() != 0  && $('#b6').text() != 0 && $('#b7').text() != 0 && 
          $('#b8').text() != 0 ){
         modal4.style.display = "block";
         document.getElementById('bgm').pause();
         
         tieAudio.play();
         tieAudio.currentTime=0;

          $(".game-result").text( "Draw ! ")
           tCount=tCount+1 
          $("#Tie").text(`${tCount}`)
          currentPlayer="X" ;
        
      }
     


}


$('.playAgainBtn').on('click' , function(){
    boxes=[ "0" , "1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ];
    modal4.style.display = "none";
    $('.box').text("").css("pointer-events" , "visible");
    $('.box').css("background-color" , "transparent");
    $('.box2').text("").css("pointer-events" , "visible");
    $('.box2').css("background-color" , "transparent");
     currentPlayer="X" ;
     $(".turntext").text(getPlayer1Name()+" Turn"); 
    document.getElementById('bgm').play()
    closeAudio.play();
     
    

})

$('.restartBtn').on('click' , function(){
    boxes=[ "0" , "1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ];
    modal4.style.display = "none";
    $('.box').text("").css("pointer-events" , "visible");
    $('.box').css("background-color" , "transparent");
    $('.box2').text("").css("pointer-events" , "visible");
    $('.box2').css("background-color" , "transparent");
     currentPlayer="X" ;
     $(".turntext").text(getPlayer1Name()+" Turn"); 
    document.getElementById('bgm').play()
    closeAudio.play();
     
    

})