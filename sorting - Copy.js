//selecting Elements :
let arrsizer=document.querySelector('#sizer');
 arrsizer.addEventListener('input',function(){ 
generateBars(parseInt(arrsizer.value))});
 generateBars();//fn call
 //eventlistener which is added to both arrsizer and sportspeed
let time=100;
let sortspeed=document.querySelector('#speed');
sortspeed.addEventListener('input',function(){
    time=245-parseInt(sortspeed.value);
});
function generateBars(noBar=20){
    document.getElementById("bar").innerHTML='';//clear previous bars when we generate new array 
    let bars=[];
    for(let i=0;i<noBar;i++){
        bars.push(Math.floor(Math.random()*400)+1);//generate randon bar heights
    }
    const divs=document.querySelector('#bar');
    for(let x=0;x<noBar;x++){
        const temp=document.createElement("div");//creating bar elements
        temp.classList.add('sort');
        temp.classList.add('baritem');
        temp.style.height=bars[x]+"px";
        divs.append(temp);
    }
}
document.getElementById("newarr").addEventListener("click",function(){
    generateBars(arrsizer.value);
    enableSortingBtn();
    enableSizeSlider();
});
function swap(ele1,ele2){
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;
}
function delay(milisec){
    return new Promise(resolve =>{
        setTimeout(()=>{resolve('')},milisec)
    })
}
function disableSortingBtn(){
    document.querySelector('#bubble').disabled=true;
     document.querySelector('#selection').disabled=true;
    // document.querySelector('#merge').disabled=true;

}

function enableSortingBtn(){
document.querySelector('#bubble').disabled=false;
 document.querySelector('#selection').disabled=false;

}

function disableSizeSlider(){
    document.getElementById("sizer").disabled=true;
}

function enableSizeSlider(){
    document.getElementById("sizer").disabled=false;
}  
    