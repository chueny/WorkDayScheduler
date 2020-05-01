$(document).ready(function(){
    
    //Top header: add current day information 
    var currentTime = moment().format("dddd MMMM Do YYYY");
    $(".lead").append(currentTime);
   
  

    
    $(".hour").each(function(){

        var TimeNow = moment();
        console.log("The TimeNow is: "+TimeNow);
        console.log(typeof TimeNow);
        
        var hourBlock= ($(this).attr("value"));// this value needs to be know at of and time now;
        //console.log("What is the current hourBlock: "+hourBlock);
        //hourBlock = moment(hourBlock, "h a");
        console.log("What is the current hourBlock: "+hourBlock);
        console.log(typeof hourBlock);

       // debugger;

        if(TimeNow.format("h a") === hourBlock){
           $(this).next().addClass("present");
           //$(".textarea").text("Current Hour"); 
        } else if (TimeNow.isBefore(moment(hourBlock, "h a"))){
                $(this).next().addClass("past");
            }
          else {
            $(this).next().addClass("future");//
          }

        console.log(this);
    });

    //if our code works and we have time, we can experiment with adding tables from js side
    // var drinkDiv = $("#drink-option"); //target parent

    // for (var i=0; i<drinkList.length; i++){
      
    //   var newDrinkDiv = $("<div>" + drinkList[i]+"</div>");
    //   drinkDiv.append(newDrinkDiv);
    // }

    // WATCH OUT
    //when I click into a timeblock, I can enter an event
    $(".textarea").on("click", function(){
        var toDo= $(this).text(" ");
        console.log("The toDo is: "+toDo);
    });

    
        
    //WATCH OUT
    // //onclick function to save  to local storage 
    $("saveBtn").on("click", function(){
        event.preventDefault;

        var toDo= $('.textarea').text();  //not sure if tehre is linkage from above
        
        if(toDo === ""){
            $(".textarea").text("Error, cannot save blank");
        } else{
            $(".textarea").text("Success, your info is saved");
             //set new info
            localStorage.setItem("toDo", JSON.stringify(toDo));

            //get stored info from local storage
            var SavedToDo =JSON.parse(localStorage.getItem("toDo"));
        }
    });
});