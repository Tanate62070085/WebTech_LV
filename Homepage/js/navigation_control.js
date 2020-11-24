//navigationbar autoslide
var scroll_num=0;
var scroll_num2=0;
window.onscroll = function(){
    // console.log(document.body.scrollTop - scroll_num);
    console.log(document.documentElement.scrollTop - scroll_num2)
    var state = document.body.scrollTop - scroll_num
    var state_element = document.documentElement.scrollTop - scroll_num2
    if (state > 0 || state_element > 0){
        document.getElementById("lv-navigation").style.top = "-112px";
    }else if(document.body.scrollTop - scroll_num < 0){
        document.getElementById("lv-navigation").style.top = "0";
    }
    scroll_num = document.body.scrollTop;
    scroll_num2 = document.documentElement.scrollTop;
}
var scroll_bar = true;
var value_before = -1;
var all_menu = ["#newproduct","#women","#men"];
function closedrop(){
    $(".dropdown-menu").slideToggle(300,function(){
        if(scroll_bar){
            scroll_bar = false
            $("body").css("overflow","hidden")
        }else{
            scroll_bar = true
            $("body").css("overflow","scroll")
        }})
}

function clickDrop(number,first_menu){
    if(value_before == number || value_before == -1){
    console.log(value_before + "-" + number);
    $(first_menu).css("visibility","visible")
    $(first_menu).animate({opacity : "1"})
    $(".dropdown-menu").slideToggle(300,function(){
        if(scroll_bar){
            scroll_bar = false
            $("body").css("overflow","hidden")
        }else{
            scroll_bar = true
            $("body").css("overflow","scroll")
        }
    })}else{
        if(scroll_bar){
            $(".dropdown-menu").slideToggle(300,function(){
                if(scroll_bar){
                    scroll_bar = false
                    $("body").css("overflow","hidden")
                }else{
                    scroll_bar = true
                    $("body").css("overflow","scroll")
                }
        })}
        all_menu.forEach(element => {
            if(first_menu == element){
                $(first_menu).css("visibility","visible")
                $(first_menu).css("margin-top","0vh")
                $(first_menu).animate({opacity : "1"})
            }else{
                $(element).animate({opacity : "0"},function(){
                    $(element).css("margin-top","300vh")
                    $(element).css("visibility","hidden")
            })}
        });
    }
    value_before = number
}
