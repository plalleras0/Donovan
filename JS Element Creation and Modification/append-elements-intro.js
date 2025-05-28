function makeElements(){
    let container = document.querySelector("#container");
   
    let para = document.createElement("p");
    para.style.cssText = "color:red;";
    para.textContent = "Hey I’m red.";
    container.appendChild(para);

    let cont = document.createElement("#h3");
    cont.style.cssText = "color:blue;";
    cont.textContent = "Hey I’m blue h3."
    container.appendChild(cont);
}