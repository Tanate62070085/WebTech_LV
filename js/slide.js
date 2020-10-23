var current = 0;
var imgid = ["#pic3","#pic2","#pic1"]
$(".btn-next").click(function(){
        if(current > 1){
        current = 0
        $(imgid[0]).animate({opacity:"1"})
        setTimeout(function(){
            $(imgid[1]).animate({opacity:"1"})
            $(imgid[2]).animate({opacity:"1"})
        } ,200)
    }
       else{$(imgid[current]).animate({opacity: "0"})
       current++
    }
    })
$(".btn-prev").click(function(){
    current--
    if(current < 0){
        current = 2
        $(imgid[1]).animate({opacity:"0"})
        setTimeout(function(){
        $(imgid[0]).animate({opacity:"0"})
    } ,200)
    }
    $(imgid[current]).animate({opacity:"1"})
})