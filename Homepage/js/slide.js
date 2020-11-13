var current = 0;
var imgid = ["#pic1","#pic2","#pic3","#pic4"]
$(".btn-next").click(function(){
    
    $(imgid[0]).animate({opacity : "0"},1000,function(){
        count = imgid[0]
        imgid[0] = imgid[1]
        imgid[1] = imgid[2]
        imgid[2] = imgid[3]
        imgid[3] = count
        $(imgid[0]).css("z-index","0")
        $(imgid[1]).css("z-index","-1")
        $(imgid[1]).animate({opacity : "1"})
        $(imgid[2]).css("z-index","-2")
        $(imgid[2]).animate({opacity : "1"})
        $(imgid[3]).css("z-index","-3")
        $(imgid[3]).animate({opacity : "1"})
        console.log(imgid)
    })
})
$(".btn-prev").click(function(){
    $(imgid[3]).css("z-index","-1")
    $(imgid[1]).css("z-index","-3")
    count = imgid[1];
    imgid[1] = imgid[3];
    imgid[3] = count;
    // ["#pic1","#pic4","#pic3","#pic2"]
    
    
    $(imgid[0]).animate({opacity : "0"},1000,function(){
        $(imgid[0]).css("z-index","-1")
        $(imgid[1]).css("z-index","0")
        $(imgid[2]).css("z-index","-3")
        $(imgid[3]).css("z-index","-2")
        $(imgid[0]).animate({opacity : "1"})
        count = imgid[0]
        imgid[0] = imgid[1]
        imgid[1] = count
        count = imgid[2]
        imgid[2] = imgid[3]
        imgid[3] = count
        

        
        console.log(imgid)
    })
})
