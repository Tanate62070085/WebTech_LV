//navigationbar autoslide
var scroll_num=0;
window.onscroll = function(){
    console.log(document.scrollingElement.scrollTop - scroll_num);
    var state = document.scrollingElement.scrollTop - scroll_num
    var state_element = document.documentElement.scrollTop - scroll_num
    if (state > 0 || state_element > 0){
        document.getElementById("lv-navigation").style.top = "-112px";
    }else if(state < 0 || state_element < 0){
        document.getElementById("lv-navigation").style.top = "0";
    }
    scroll_num = document.scrollingElement.scrollTop;
};

var scroll_bar = true;
var value_before = -1;
var all_menu = ["#newproduct","#women","#men"];
function closedrop(){
    $(".dropdown-menu").slideToggle(300,function(){
        if(scroll_bar){
            scroll_bar = false
            $("body").css("overflow-y","hidden")
        }else{
            scroll_bar = true
            $("body").css("overflow-y","scroll")
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
            $("body").css("overflow-y","hidden")
        }else{
            scroll_bar = true
            $("body").css("overflow-y","scroll")
        }
    })}else{
        if(scroll_bar){
            $(".dropdown-menu").slideToggle(300,function(){
                if(scroll_bar){
                    scroll_bar = false
                    $("body").css("overflow-y","hidden")
                }else{
                    scroll_bar = true
                    $("body").css("overflow-y","scroll")
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
