$(function(){
  $("#taskform").submit(function(e){ 
    e.preventDefault();
    $.ajax({
      type:"POST",
      url:'session.php',
      data:$(this).serialize(),
      success: function(response){
        var jsonData = JSON.parse(response)
        console.log(jsonData);
        var taskingList = '<ol type = "1">';
        for(var i = 0; i< jsonData.length;i++){
          taskingList += '<li>' + jsonData[i] + '</li>';
        
        }
        taskingList += '</ol>';  
        $('#tasking').html(taskingList); //display input task in the html
        alert("Done");

        // delete task on clixk
        $("li").on('click',function(){
          $(this).remove(jsonData[i]);
        })
      }
    })
    
    
  })
  //clear Session
  $('#clearSession').on('click', function(e){
    e.preventDefault();
    $.ajax({
      type:"POST",
      url:'clearSession.php',
      success: function(response){
        console.log(response);
      }
    })
    $('#tasking').text(null);
  })
})
    // $.get('tasks.txt', function (data) {  //kuhaon ang sulod sa text file
    //   var taskingList = '<ol type = "1">';  // variable that store for the text file value splited
    //   var myTasks = data.split("\n");  // slpit
    //   for (i = 0; i < myTasks.length; i++) {  
    //     if (myTasks[i] != null || myTasks[i] != undefined)  
    //     taskingList += '<li>' + myTasks[i] + '</li>';  //store
    //   } 
  
    //   taskingList += '</ol>';  
    //   $('#tasking').html(taskingList);  // store the value of 
    // });  
  
   
          



          // $.get('tasks.txt', function (data) {  
          //   var taskingList = '<ol type = "1">';  
          //   var myTasks = data.split("\n");  
          //   for (i = 0; i < myTasks.length; i++) {  
          //     if (myTasks[i] != null || myTasks[i] != undefined)  
          //     taskingList += '<li>' + myTasks[i] + '</li>';  
          //   }  
          //   taskingList += '</ol>';  
          //   $('#tasking').html(taskingList);  
          // });  
                  
       

    // $("#addtask").submit(function(e){ 
    //   e.preventDefault();
    //   $.ajax({
    //     type:"POST",
    //     url:'session.php',
    //     data:$(this).serialize(),
    //     success: function(response){
    //       var jsonData = JSON.parse(response)
    //       console.log(jsonData);
    //       alert("Done"); 
    //    }
    //   })
    // })

    