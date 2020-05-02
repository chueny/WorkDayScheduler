$(document).ready(function(){
    
    //Top header: current day information 
    var currentTime = moment().format("dddd MMMM Do YYYY");
    $(".lead").append(currentTime);
   
    
    $(".hour").each(function(){

        var TimeNow = moment();
        //console.log("The TimeNow is: "+TimeNow);
        //console.log(typeof TimeNow);
        
        var hourBlock= ($(this).attr("value"));// this value needs to be know at of and time now;
        //console.log("What is the current hourBlock: "+hourBlock);
        //hourBlock = moment(hourBlock, "h a");
        //console.log("What is the current hourBlock: "+hourBlock);
        //console.log(typeof hourBlock);
       

      //  console.log("local storage test at " + hourBlock + " :   " +  localStorage.getItem(hourBlock));
        $(this).next().val( localStorage.getItem(hourBlock));
       // debugger;

        if(TimeNow.format("h a") === hourBlock){
           $(this).next().addClass("present").text("Current Hour");
           //$(".textarea").text("Current Hour"); 
        } else if (TimeNow.isBefore(moment(hourBlock, "h a"))){
            $(this).next().addClass("future");
        }
        else {
            $(this).next().addClass("past");//
        }

        //console.log(this);
    });

    //if our code works and we have time, we can experiment with adding tables from js side
    // var drinkDiv = $("#drink-option"); //target parent

    // for (var i=0; i<drinkList.length; i++){
      
    //   var newDrinkDiv = $("<div>" + drinkList[i]+"</div>");
    //   drinkDiv.append(newDrinkDiv);
    // }

    // WATCH OUT
    //when I click into a timeblock, I can enter an event
    // $(".textarea").on("click", function(){
    //     var toDo= $(this).val().trim();
    //     console.log("The toDo is: "+toDo);
    // });
    
    
      
    //WATCH OUT
    // //onclick function to save  to local storage 
    $(".saveBtn").on("click", function(){
        event.preventDefault;

        var toDo= $(this).prev().val().trim(); 
        var timeInfo = $(this).siblings(".hour").attr("value");
        // console.log("in save button, toDo = " + toDo);
        // console.log("in save button, time is = " + timeInfo);
        // console.log("the key will be: " + timeInfo+"ToDo");
        //var ToDo =$(this).html();

        if(toDo === ""){
            //this prints out error in the button area, how do i put this in textarea?
            
            $(this).prev().text("You didn't type anything");
        } 
        else{
            //console.log("Your info is saved"); 
            localStorage.setItem(timeInfo, toDo);
            //console.log("this is the local storage info: "+localStorage.getItem(timeInfo));
          
        }

    });



    // function savedAgenda() {
    //     //get stored info from local storage
    //     var SavedToDo =localStorage.getItem( );
    
    //     if (toDo === null) {
    //       return;
    //       console.log("You have nothing to print!");
    //     }
    //     $(this).text();   //gets the text inside the DOM
    //     console.log("You have succeeded in printing your ageneda!");
    // }; 



});