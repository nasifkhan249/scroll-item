let btn=document.getElementById("btn");
let menu=document.getElementById("menu");
console.log(menu);
let cross=document.getElementById("cross");
console.log(cross);

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


menu.addEventListener("click",()=>{
    document.getElementById("menu").style.display="none";
    document.getElementById("cross").style.display="block";

    document.getElementById("nav-item").style.display="block";
    document.getElementById("nav-bar").style.height="100vh";
    document.getElementById("nav-bar").style.display="flex";
    document.getElementById("nav-bar").style.flexDirection="column";
    document.getElementById("nav-bar").style.justifyContent="center";
    document.getElementById("nav-bar").style.alignItems="center";
    document.getElementById("logo").style.paddingRight="40px";
    document.getElementById("logo").style.paddingBottom="20px";
    document.getElementById("nav-item").style.gap="40px";

});

cross.addEventListener("click",()=>{
    document.getElementById("cross").style.display="none";
    document.getElementById("menu").style.display="block";
    document.getElementById("nav-item").style.display="none";
    window.location.reload();
})
