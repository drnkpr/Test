


var btnOpenInventar = document.querySelector('#btn-inventar');
var mdlInventar = document.querySelector('#mdl-inventar');
var closeInventar = document.querySelector('#inventar button');


btnOpenInventar.addEventListener('click', function(){


    //get coffee info from DB 


    mdlInventar.classList.add('active-modal');
});


closeInventar.addEventListener('click', function(){
    mdlInventar.classList.remove('active-modal');
});




var btnOpenAdauga = document.querySelector("#btn-adauga");
var mdlAdauga = document.querySelector("#mdl-adauga");
var closeAdauga = document.querySelector("#adauga .btn-success");
var btnAdauga = document.querySelector('#adauga .btn-primary');


btnOpenAdauga.addEventListener('click', function(){
    mdlAdauga.classList.add('active-modal');
});

closeAdauga.addEventListener('click', function(){
    mdlAdauga.classList.remove('active-modal');
});

btnAdauga.addEventListener('click', function(){

    //change data in dB

    mdlAdauga.classList.remove('active-modal');
});



var btnOpenVinde = document.querySelector("#btn-vinde");
var mdlVinde = document.querySelector("#mdl-vinde");
var closeVinde = document.querySelector("#vinde .btn-success");
var btnVinde= document.querySelector('#vinde .btn-primary');


btnOpenVinde.addEventListener('click', function(){
    mdlVinde.classList.add('active-modal');
});


closeVinde.addEventListener('click', function(){
    mdlVinde.classList.remove('active-modal');
});

btnVinde.addEventListener('click', function(){

    //change data in dB

    mdlVinde.classList.remove('active-modal');
});


            
var select = document.getElementById("select");
var arr = ["html","css","java","javascript","php","c++","node.js","ASP","JSP","SQL"];
 for(var i = 0; i < arr.length; i++)
 {
     var option = document.createElement("OPTION"),
         txt = document.createTextNode(arr[i]);
     option.appendChild(txt);
     option.setAttribute("value",arr[i]);
     select.insertBefore(option,select.lastChild);
 }
 


var btnOpenSortimente = document.querySelector("#btn-sortimente");
var mdlSortimente = document.querySelector("#mdl-sortiment");


btnOpenSortimente.addEventListener('click', function(){
    mdlSortimente.classList.add('active-modal');
});

var btnOpenScoateSortimente = document.querySelector("#btn-scoateSortiment");
var mdlScoateSortimente = document.querySelector("#mdl-scoateSortiment");

btnOpenScoateSortimente.addEventListener('click', function(){
    mdlScoateSortimente.classList.add('active-modal');
});


 
