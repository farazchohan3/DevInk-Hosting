
window.onload=function(){
               document.getElementById('loader').style.display="none";
               document.getElementById('content').style.display="block"
};

$(document).ready(function(){

            $('#bimg').mouseenter(function(){
            
            for(var a=1; a<=5; a++){
                $('#animicon').animate({left:'100px'},1000);
                $('#animicon').animate({top:'50px'},500);
                $('#animicon').animate({top:'50px',left:'0'},1000);
                $('#animicon').animate({top:'0px',left:'0'},500);
                }

            });
            
        });