let btn = document.getElementById("btn");

btn.addEventListener("dblclick",()=> {
    document.querySelector(".box").innerHTML = "<b> Now I'm Capital box! </b>"
})
btn.addEventListener("contextmenu",()=> {
   alert("Don't hack us by right click please!")
})
document.addEventListener("keydown",(e)=> {
    console.log(e.key,e.keyCode)
})