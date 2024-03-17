let testImage =document.querySelector(".drag");
let dropAreas=document.querySelectorAll(".box");
dropAreas.forEach(areas=>{
    areas.ondragover=function(ev){
        ev.preventDefault();
    }
    areas.ondrop=function(e){
        let id=e.dataTransfer.getData("id");
        let dragElement=document.getElementById(id);
        this.append(dragElement);
    }
    testImage.ondragstart=function(ev){
        ev.dataTransfer.setData("id",this.id);
        
        }
})

