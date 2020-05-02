$(document).ready(function(){
    
    //Top header: current day information 
    var currentTime = moment().format("dddd MMMM Do YYYY");
    $(".lead").append(currentTime);
   
     
    $(".hour").each(function(){

        var TimeNow = moment();
        
        var hourBlock= ($(this).attr("value"));//the "time" value attached to the textarea
     
       
        $(this).next().val( localStorage.getItem(hourBlock));  //displays the stored varible in local storage
       
            if(TimeNow.format("h a") === hourBlock){ //compares the TimeNow to the time value in the
                $(this).next().addClass("present");
                 
            
            } else if (TimeNow.isBefore(moment(hourBlock, "h a"))){
                $(this).next().addClass("future");

            }
            else {
                $(this).next().addClass("past");//
               
                 
            }
    });

 
    $(".saveBtn").on("click", function(){
        event.preventDefault;

        var toDo= $(this).prev().val().trim(); 
        var timeInfo = $(this).siblings(".hour").attr("value");
        
        if(toDo === ""){
            $(this).prev().text("You didn't type anything");
        } 
        else{
            localStorage.setItem(timeInfo, toDo);
            
        }

    });

});