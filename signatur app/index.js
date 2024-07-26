const colorPicker= document.getElementById("colorPicker");
const  canvasColor = document.getElementById("canvaColor");
const canvas = document.getElementById("mycanvas");
const clearButton= document.getElementById("clearbutton");
// const saveButton= document.getElementById("savebutton");
const saveButton=  document.getElementById("savebutton")
const fontSize = document.getElementById('fontsize');
const retrivevebutton = document.getElementById("retrivevebutton")


const ctx = canvas.getContext('2d');

colorPicker.addEventListener('change',(e)=>{
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value
})


canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
})

canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();

        lastX= event.offsetX;
        lastY= event.offsetY;


    }

})

canvas.addEventListener("mouseup",(e)=>{
    isDrawing = false;
})
canvasColor.addEventListener('change',(e)=>{
ctx.fillStyle = e.target.value;
ctx.fillRect(0,0,800,500)
})

fontSize.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value;
});

clearButton.addEventListener('click',()=>{
ctx.clearRect(0,0,canvas.width,canvas.height)
})


saveButton.addEventListener('click',()=>{

   localStorage.setItem('canvasContents',canvas.toDataURL());

    let  link = document.createElement('a');
   link.download = 'my-canvas.png';
   link.href = canvas.toDataURL();
   link.click();


});
retrivevebutton.addEventListener('click',()=>{
    let savedcanvas = localStorage.getItem('canvasContents');
    if(savedcanvas){
        let img = new Image();
        img.src = savedcanvas;
        ctx.drawImage(img,0,0)
    }

})
