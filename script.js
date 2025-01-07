
let Select =document.querySelector('.Select')
let Enter =document.querySelector('.Enter')
let Input =document.querySelector('.input')
let Your_move = document.querySelector('.Your_m')
let Computer= document.querySelector(".Computer_m")
let Computer_result;
let Player_Move;
let Final_result =document.querySelector('.Final')
Enter.addEventListener('click',function(){
  
    // Player Move Starts Here
    if(Input.value ==="R"){
        Your_move.src="/Rock.png" 
        Player_Move="Rock"
        }else if (Input.value ==="P"){
            Your_move.src="/Paper.png"
            Player_Move="Paper"
        }else if ( Input.value ==="S"){
            Your_move.src="/Scissors.png"
            Player_Move="Scissors"
        }
        
// Player Move Ebds Here

// Computer move starts Here
    let Random = Math.round((Math.random()*3)+1)
   

   
    if(Random == 1){
        Computer.src="/Rock.png"
        Computer_result="Rock" 
    }else if(Random == 2){
      Computer.src="/Scissors.png"
    Computer_result="Scissors"
    }else if(Random == 3){
      Computer.src="/Paper.png"
    Computer_result="Paper"
    }
    

    Input.value= ""


// Computer moves Ends Here

// Comparism starts Here

// Tie starts Here

if(Player_Move =="Rock" && Computer_result =="Rock")
{Final_result.innerHTML="The Result is Tie"
    
}

else if (Player_Move =="Paper" && Computer_result=="Paper"){
Final_result.innerHTML="The Result is Tie"

}
    
else if(Player_Move =="Scissors" && Computer_result=="Scissors"){
Final_result.innerHTML="The Result is Tie"
}

// Tie Ends Here

if ( Player_Move =="Scissors" &&Computer_result == "Paper")
{ Final_result.innerHTML="Player Wins , Computer Lose"}


else if(Player_Move=="Rock" && Computer_result=="Paper" ){ Final_result.innerHTML ="Player Lose, Computer Wins"}

else if(Player_Move ==" Paper" && Computer_result =="Scissors"){
    Final_result.innerHTML="Player Lose, Computer Wins"
}


else if(Computer_result =="Rock" && Player_Move == "Paper" ){
    Final_result.innerHTML="Player Wins, Computer Lose"
}

else if(Computer_result =="Paper" && Player_Move =="Rock"){
    Final_result.innerHTML =="Computer Wins, Player Lose."
}else if(Computer_result=="Rock" &&Player_Move=="Scissors" ){
    Final_result.innerHTML="Player Lose, Computer Wins"
}

// COmparism Ends Here


})


