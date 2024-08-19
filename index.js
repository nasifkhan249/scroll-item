let btn=document.getElementById("btn");
// console.log(btn);

window.onscroll=function(){
    
    scrolling();

}


function scrolling(){
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1){
        btn.style.display="block"
    }else{
        btn.style.display="none"
    }
}

btn.addEventListener("click",function(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
},true);
