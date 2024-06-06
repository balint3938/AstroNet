let objects=[];
let selectFunc=[];
let active=null;
let isSelect=false;
let canvas=document.querySelector("canvas");
let ctx=canvas.getContext("2d");
let csillagName;
let csillagok=['Paradicsommadár','Kassiopeia','Kis Medve','Nagy Medve','Mérleg','Rák','Szekeres','Oroszlán','Bika','Nyilas','Pegazus','Orion','Halak','Androméda'];
let button1=document.querySelector(".button1");
let button2=document.querySelector(".button2");
let textBox=document.querySelector(".text");
let penaltyText=document.querySelector(".pont");
let penaltyPont=0;
let currentCsillag=document.querySelector(".current");
let elList={
    'Paradicsommadár': [[1,2,3],[2,3,4],[0,0,0]],
    'Kassiopeia': [[1,2,3,4],[2,3,4,5],[0,0,0,0]],
    'Kis Medve': [[1,2,3,4,5,6,7],[2,3,4,5,6,7,4],[0,0,0,0,0,0,0]],
    'Nagy Medve': [[1,2,3,4,5,6,7],[2,3,4,5,6,7,4],[0,0,0,0,0,0,0]],
    'Mérleg': [[1,2,4,1,3,2],[2,4,5,3,6,3],[0,0,0,0,0,0]],
    'Rák': [[1,2,3,3],[2,3,4,5],[0,0,0,0]],
    'Szekeres': [[1,2,4,5,6,3,3],[2,4,5,6,3,1,2,3],[0,0,0,0,0,0,0]],
    'Oroszlán': [[1,2,2,4,5,6,4,8,9,3],[2,3,4,5,6,7,8,9,3,1],[0,0,0,0,0,0,0,0,0,0]],
    'Bika': [[1,2,3,4,5,4,7,8],[2,3,4,5,6,7,8,9],[0,0,0,0,0,0,0,0]],
    'Nyilas': [[1,2,2,4,5,4,7,8,8,10,10,12],[2,3,4,5,6,7,8,9,10,11,12,13],[0,0,0,0,0,0,0,0,0,0,0,0]],
    'Pegazus': [[1,2,3,4,5,6,4,7,8,7,10],[2,3,4,5,6,7,7,8,9,10,11],[0,0,0,0,0,0,0,0,0,0,0]],
    'Orion': [[1,2,2,4,5,6,7,8,9,10,9,11,11,4],[2,3,4,5,6,7,8,9,10,2,11,12,13,8],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    'Halak': [[1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,12],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    'Androméda': [[1,2,3,4,5,5,7,8,9,10,9,7,7,14,15],[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
};
let elPos={
    'Paradicsommadár': [[408,286],[456,449],[550,410],[850,600]],
    'Kassiopeia': [[287, 451], [575, 240], [662, 463], [889, 426], [972, 610]],
    'Kis Medve': [[388, 547], [477, 542], [570, 525], [654, 462], [780, 328], [890, 389], [753, 530]],
    'Nagy Medve': [[940, 462], [844, 410], [745, 430], [655, 432], [421, 386], [444, 510], [612, 524]],
    'Mérleg': [[652,265],[521,373],[742,373],[510,429],[536,604],[716,584]],
    'Rák': [[593,227],[630,410],[613,475],[546,589],[700,631]],
    'Szekeres': [[350,170],[629,277],[447,482],[922,484],[818,698],[553,575]],
    'Oroszlán': [[375,581],[510,475],[510,558],[770,435],[753,350],[842,278],[877,315],[818,475],[816,558]],
    'Bika': [[405,284],[677,397],[697,438],[693,489],[631,504],[390,437],[792,561],[902,575],[933,587]],
    'Nyilas': [[400,246],[457,279],[533,246],[522,465],[431,512],[465,600],[603,496],[741,425],[834,302],[820,516],[899,530],[804,611],[824,645]],
    'Pegazus': [[1054,565],[938,693],[709,638],[533,553],[300,587],[286,343],[496,332],[594,260],[694,168],[613,365],[826,224]],
    'Orion': [[474,258],[486,371],[526,255],[522,504],[498,655],[750,620],[704,508],[626,454],[650,375],[594,315],[817,344],[752,221],[810,479]],
    'Halak': [[335, 185], [275, 285], [395, 335], [390, 435], [371, 540], [347, 675], [447, 605], [517, 599], [600, 535], [640, 521], [835, 455], [885, 430], [920, 375], [1000, 415], [970, 465], [905, 490]],
    'Androméda': [[360, 255], [460, 265], [560, 305], [570, 395], [560, 475], [360, 475], [760, 505], [750, 465], [820, 323], [796, 292], [789, 242], [936, 288], [900, 485], [772, 540], [760, 619], [714, 653]]
};

let visszaGomb=document.querySelector(".visszaMenu");

function vissza(){
    window.location.href = "index.html";
}
visszaGomb.addEventListener('click',vissza);

function resizeCanvas(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}

window.addEventListener('resize',resizeCanvas);
resizeCanvas();

selectRandom();

button1.addEventListener('click',createEnd);
button2.addEventListener('click',createElements);

function selectRandom()
{
    let rnd=Math.floor(Math.random()*14);
    csillagName=csillagok[rnd];
    currentCsillag.textContent= 'Csillagkép: '+ csillagName;
}

function makeDragable(dragTarget){
    let xOffset=0;
    let yOffset=0;

    function startDrag(e){
        e.preventDefault();
        e.stopPropagation();
        let dragObj=dragTarget;
        
        let shadow=dragObj.cloneNode();
        shadow.id="";
        shadow.style.opacity=0.5;
        dragObj.parentNode.insertBefore(shadow,dragObj.nextSibling);

        let rect=dragObj.getBoundingClientRect();
        dragObj.style.left=rect.left+"px";
        dragObj.style.top=rect.top+"px";
        dragObj.style.position="absolute";
        dragObj.style.zIndex=999999;

        function dragObject(e){
            e.preventDefault();
            e.stopPropagation();
            if(e.type==="mousemove"){
                dragObj.style.left=e.clientX-xOffset+"px";
                dragObj.style.top=e.clientY-yOffset+"px";
            }else if(e.type==="touchmove"){
                dragObj.style.left=e.targetTouches[0].clientX-xOffset+"px";
                dragObj.style.top=e.targetTouches[0].clientY-yOffset+"px";
            }
        }

        function endDrag(){
            shadow.remove();
            window.removeEventListener('mousemove',dragObject,true);
            window.removeEventListener('touchmove',dragObject,true);
        }

        document.addEventListener("mouseup",endDrag,{ once:true });
        document.addEventListener("touchend",endDrag,{ once:true });

        if(e.type==="mousedown"){
            xOffset=e.clientX-rect.left;
            yOffset=e.clientY-rect.top;
            window.addEventListener('mousemove',dragObject,true);
        }else if(e.type==="touchstart"){
            xOffset=e.targetTouches[0].clientX-rect.left;
            yOffset=e.targetTouches[0].clientY-rect.top;
            window.addEventListener('touchmove',dragObject,true);
        }
    }

    dragFunc.push(startDrag);
    dragTarget.addEventListener("mousedown",startDrag,true);
    dragTarget.addEventListener("touchstart",startDrag,true);
}


function makeSelectable(target){
    target.addEventListener("click",selectFunc[selectFunc.length]=select);
    function select(){
        if(isSelect===false){   
            target.style.backgroundColor="papayawhip";
            active=target;
            isSelect=true;
        }
        else{
            drawLine(active,target);
            active.style.backgroundColor="white";
            active=null;
            isSelect=false;
         }
    }
}

function drawLine(elem1,elem2){
    let ok=lineEll(elem1,elem2);
    if (ok){
        let pos1=getPosition(elem1);
        let pos2=getPosition(elem2);
        ctx.beginPath();
        ctx.moveTo(pos1.offsetLeft+elem1.offsetWidth/2,pos1.offsetTop+elem1.offsetHeight/2);
        ctx.lineTo(pos2.offsetLeft+elem2.offsetWidth/2,pos2.offsetTop+elem2.offsetHeight/2);
        ctx.strokeStyle='white';
        ctx.lineWidth=2;
        ctx.stroke();
    }
    else{
        textBox.textContent="Rossz csillagokat kötöttél össze!";
        penaltyPont++;
        penaltyText.textContent="Hibák száma: "+penaltyPont;
        checkPenalty();
    }
}

function lineEll(e1,e2){
    let i=0;
    while (elList[csillagName][0][i]!=e1.id && i<elList[csillagName][0].length)
        i++;
    for (;i<elList[csillagName][0].length;i++)
        if (elList[csillagName][0][i]==e1.id && elList[csillagName][1][i]==e2.id){
            if (elList[csillagName][2][i]===0){
                elList[csillagName][2][i]=1;
                return true;
            }
            else return false;
        }

    i=0;

    while (elList[csillagName][0][i]!=e2.id && i<elList[csillagName][0].length)
        i++;
    for (;i<elList[csillagName][0].length;i++)
        if (elList[csillagName][0][i]==e2.id && elList[csillagName][1][i]==e1.id){
            if (elList[csillagName][2][i]===0){
                elList[csillagName][2][i]=1;
                return true;
            }
            else return false;
        }

    return false;
}

//<a href="#" class="alcim" onclick="rajz(4,[408,456,550,850],[286,449,410,600],[1,2,3],[2,3,4])">Paradicsommadár (Apus)</a>



let csillagNr=0;

function createElements(){
    if (csillagNr<elPos[csillagName].length){
         csillagNr++;
         for(let i=0;i<1;i++){
              let div=document.createElement('div');
              //makeDragable(div);
              //makeSelectable(div);
              div.style.width="30px";
              div.style.height="30px";
              div.style.background="white";
              div.style.borderRadius="50%";
              div.id=objects.length+1;
              document.body.appendChild(div);
              objects.push(div);
              div.style.left=elPos[csillagName][objects.length-1][0]+'px';
              div.style.top=elPos[csillagName][objects.length-1][1]+'px';
        }
    }
    else{
        textBox.textContent="Túl sok csillagot hoztál létre!";
        penaltyPont++;
        penaltyText.textContent="Hibák száma: "+penaltyPont;
        checkPenalty();
    }
}

function getPosition(elem){
    let dims={ offsetLeft:0, offsetTop:0 };
    while(elem){
        dims.offsetLeft+=elem.offsetLeft;
        dims.offsetTop+=elem.offsetTop;
        elem=elem.offsetParent;
    }
    return dims;
}

function gameEnd(){
    let sum=0;
    elList[csillagName][2].forEach((el) => sum += el);
    if (sum===elList[csillagName][2].length){
       textBox.textContent='Helyes!';
       resetGame();
       connectEnd();
    }
    else{ 
        textBox.textContent='Helytelen!';
        penaltyPont++;
        penaltyText.textContent="Hibák száma: "+penaltyPont;
        checkPenalty();
    }
}

function connectEnd(){
    for (let i=0;i<objects.length;i++){
        objects[i].removeEventListener('click', selectFunc[i]);
    }
}

function resetGame(){
    button2.disabled=false;
    button2.textContent="Újrakezdés";
    function reload(){
        window.location.reload();
       }
    button2.addEventListener('click',reload);
}

function createEnd(){
    if (csillagNr===elPos[csillagName].length){
        button1.removeEventListener('click',createEnd);
        button2.removeEventListener('click',createElements);
        button2.disabled=true;
        button1.addEventListener('click',gameEnd);   
        for (let i=0;i<objects.length;i++){
            makeSelectable(objects[i]);
        }
        textBox.textContent="Most kösd össze őket!";
    }
    else if (csillagNr<elPos[csillagName].length){
        textBox.textContent="Túl kevés csillagot hoztál létre!";
        penaltyPont++;
        penaltyText.textContent="Hibák száma: "+penaltyPont;
        checkPenalty();
    }
}

function checkPenalty(){
    if (penaltyPont>=5){
        button1.disabled=true;
        button2.disabled=true;
        connectEnd();
        resetGame();
        textBox.textContent='Kifogytál a próbálkozásból!';
    }
}

