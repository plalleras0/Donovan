let submit = document.querySelector("input[type-submit]");
let fname = document.querySelector("input[name-fname]");
let lname = document.querySelector("input[name=lname]");


submit.addEventListener("click",printinfo);

function printinfo(){
    console.log(fname.values+""+lname.value);
}