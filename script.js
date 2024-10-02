const panels = document.querySelectorAll(".panel");

panels.forEach(panel=>{
    panel.addEventListener("click",(ev)=>{
        removeActiveClass(ev);
        panel.classList.add("active");
    })
})


function removeActiveClass(ev){
    console.log("i got clicked",ev.target.innerHTML);
    
    panels.forEach(panel=>{
        panel.classList.remove("active");
    })
}