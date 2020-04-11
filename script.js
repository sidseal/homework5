$(document).ready(function(){
    //clock
    var $currentDay = $("#currentDay")
    setInterval(function(){
        $currentDay.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
    },1000)
    //calendar
    var $timeBlocks = $('.time-block')
    update()
    setInterval(update,60000)

   //update
    function update(){
            $timeBlocks.each(function(i, elem){
            var datahour = parseInt($(this).attr("data-hour"))
            var hour = moment().hour() 
            if (hour === datahour){
                $(this).addClass("present")
            // var present = (datahour)
            }
            else if (hour < datahour){
                $(this).addClass("future")
            }
            else {
                $(this).addClass("past")
            // var past = (datahour)
            } 
        })
    }
})

    //local storage
    $('button').on('click', function(event){
        event.preventDefault()
        var dataHour=$(this).parent().attr("data-hour")
        var key =dataHour+"oclock"
        var value=$(this).siblings("textarea").val()
        localStorage.setItem(key,value)
        
    })
    
    //refresh
    let hours= [9,10,11,12,13,14,15,16,17]
    hours.forEach(function(hour){// we call this function for each of those hours
        var key = hour+"oclock" // formating our key so that we can get the value out of local storage
        var data= localStorage.getItem(key)
        
        
        $(`[data-hour='${hour}']`)
            .children("textarea").val(data)
        
    })
