var current = 0;
var imgid = ["#pic1","#pic2","#pic3"]
let requestURL = 'assets/homepage.json'; 
    let request = new XMLHttpRequest(); 
    request.onreadystatechange = function () { 
        if (request.readyState == 4 && request.status == 200) {             
            jsonget(JSON.parse(request.responseText));            
        } }; 
    request.open("GET", requestURL, true); 
    request.send();
var jsondata;
function jsonget(data){
    jsondata = data
}
$(".btn-next").click(function(){
    
    $(imgid[0]).animate({opacity : "0"},1000,function(){
        console.log(imgid[1])
        $(imgid[0]).css("z-index","0")
        $(imgid[1]).css("z-index","-1")
        $(imgid[1]).animate({opacity : "1"})
        $(imgid[2]).css("z-index","-2")
        $(imgid[2]).animate({opacity : "1"})
        count = imgid[2]
        imgid[2] = imgid[0]
        count2 = imgid[1]
        imgid[1] = count
        imgid[0] = count2
        console.log(imgid)
    })
})
$(".btn-prev").click(function(){
    
    $(imgid[1]).animate({opacity : "0"},function(){
        console.log(imgid[1])

        $(imgid[1]).css("z-index","0")
        $(imgid[2]).css("z-index","-1")
        $(imgid[2]).animate({opacity : "1"},1000)
        $(imgid[0]).css("z-index","-2")
        $(imgid[0]).animate({opacity : "1"},1000)
    
        count = imgid[0]
        imgid[0] = imgid[2]
        count2 = imgid[1]
        imgid[1] = count
        imgid[2] = count2
        console.log(imgid)

    })
    
    
    
})