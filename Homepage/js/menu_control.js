var opened = true;
var opened_1 = true;
var opened_2 = true;
var menu_new = ["#forwomen","#formen"];
var main_menu_new = ["#forwomen_1","#formen_1"]
var menu_women = ["#w1","#w2","#w3","#w4","#w5","#w6","#w7","#w8","#w9","#w10","#w11","#w12","#w13"]
var main_menu_women = ["#w_m_1","#w_m_2","#w_m_3","#w_m_4","#w_m_5","#w_m_6","#w_m_7","#w_m_8","#w_m_9","#w_m_10","#w_m_11","#w_m_12","#w_m_13"]
var menu_men = ["#m1","#m2","#m3","#m4","#m5","#m6","#m7","#m8","#m9","#m10","#m11","#m12"]
var main_menu_men = ["#m_m_1","#m_m_2","#m_m_3","#m_m_4","#m_m_5","#m_m_6","#m_m_7","#m_m_8","#m_m_9","#m_m_10","#m_m_11","#m_m_12"]
function openedrun(num){
    if(num==1 && opened){
changemenu('#forwomen','#forwomen_1')
$("#forwomen_1_line").animate({width : "96.5px"})
    cat("#newproduct")
        opened = false
    }else if(num==2 && opened_1){
changemenu2('#m1','#m_m_1')
$("#m_m_1_line").animate({width : "157.17px"})
cat("#women")
opened_1 = false
    }else if(num==3 && opened_2){
changemenu1('#w1','#w_m_1')
$("#w_m_1_line").animate({width : "161.5px"})
cat("#men")
opened_2 = false
    }
}
function changemenu(menu,main_menu){
    menu_new.forEach(element => {
        if(element == menu){
            $(menu).css("visibility","visible")
            $(menu).css("margin-top","0vh")
            $(menu).animate({opacity : "1"})
            $(menu+"_pic").css("visibility","visible")
            $(menu+"_pic").css("margin-top","0vh")
            $(menu+"_pic").animate({opacity : "1"})
            
        }else{
            $(element).animate({opacity : "0"},function(){
            $(element).css("margin-top","30000vh")
            $(element).css("visibility","hidden")})
            $(element+"_pic").animate({opacity : "0"},function(){
            $(element+"_pic").css("margin-top","30000vh")
            $(element+"_pic").css("visibility","hidden")})
            console.log("isin??")
        }
    });
    main_menu_new.forEach(element => {
        if(element == main_menu){
            $(main_menu).css("font-weight","900")
            var width = $(main_menu).innerWidth()
            $(main_menu+"_line").animate({width : width+"px"})
        }else{
            $(element).css("font-weight","100")
            $(element+"_line").animate({width : "0px"})
        }
    })
         
}

function changemenu1(menu,main_menu){
    menu_women.forEach(element => {
        if(element == menu){
            $(menu).css("visibility","visible")
            $(menu).css("margin-top","0vh")
            $(menu).animate({opacity : "1"})
            $(menu+"_pic").css("visibility","visible")
            $(menu+"_pic").css("margin-top","0vh")
            $(menu+"_pic").animate({opacity : "1"})
        }else{
            $(element).animate({opacity : "0"},function(){
            $(element).css("margin-top","300vh")
            $(element).css("visibility","hidden")})
            $(element+"_pic").animate({opacity : "0"},function(){
            $(element+"_pic").css("margin-top","300vh")
            $(element+"_pic").css("visibility","hidden")})
            console.log("isin??")
        }
    });
    main_menu_women.forEach(element => {
        if(element == main_menu){
            $(main_menu).css("font-weight","900")
            var width = $(main_menu).innerWidth()
            $(main_menu+"_line").animate({width : width+"px"})
        }else{
            $(element).css("font-weight","100")
            $(element+"_line").animate({width : "0px"})
        }
    })
         
}
function changemenu2(menu,main_menu){
    menu_men.forEach(element => {
        if(element == menu){
            $(menu).css("visibility","visible")
            $(menu).css("margin-top","0vh")
            $(menu).animate({opacity : "1"})
            $(menu+"_pic").css("visibility","visible")
            $(menu+"_pic").css("margin-top","0vh")
            $(menu+"_pic").animate({opacity : "1"})
        }else{
            $(element).animate({opacity : "0"},function(){
            $(element).css("margin-top","300vh")
            $(element).css("visibility","hidden")})
            $(element+"_pic").animate({opacity : "0"},function(){
                $(element+"_pic").css("margin-top","300vh")
                $(element+"_pic").css("visibility","hidden")})
        }
    });
    main_menu_men.forEach(element => {
        if(element == main_menu){
            var width = $(main_menu).innerWidth()
            $(main_menu+"_line").animate({width : width+"px"})
            $(main_menu).css("font-weight","900")
        }else{
            $(element+"_line").animate({width : "0px"})
            $(element).css("font-weight","100")
        }
    })
         
}


var all_menu = ["#newproduct","#women","#men"];
function cat(first_menu){
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
