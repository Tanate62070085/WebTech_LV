//navigationbar autoslide
var scroll_num=0;
window.onscroll = function(){
    console.log(document.body.scrollTop - scroll_num);
    var state = document.body.scrollTop - scroll_num
    var state_element = document.documentElement.scrollTop - scroll_num
    if (state > 0 || state_element > 0){
        document.getElementById("lv-navigation").style.top = "-112px";
    }else if(document.body.scrollTop - scroll_num < 0){
        document.getElementById("lv-navigation").style.top = "0";
    }
    scroll_num = document.body.scrollTop;
};
var scroll_bar = true;
var value_before = -1;
function clickDrop(number){
    if(value_before == number || value_before == -1){
    console.log("ddd");
    $(".dropdown-menu").slideToggle(300,function(){
        if(scroll_bar){
            scroll_bar = false
            $("body").css("overflow","hidden")
        }else{
            scroll_bar = true
            $("body").css("overflow","scroll")
        }
    })}
    value_before = number
}
