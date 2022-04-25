//Tema da pagina
const color = document.querySelector(".light");
let lanterna = false;

function ligth(){
    if(lanterna===false){
        document.body.style.backgroundColor = "#5D5D5D";
        document.body.style.color = "#fff"
        lanterna  = true;
    }else{
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000"
        lanterna  = false;
    }
}

color.addEventListener("click", ligth);

//Campo de pesquisa
const input = document.querySelector("#input");
const button = document.querySelector("#button");

function handleClick(){
    
    const array = [["apache", "dns"], ["gcc", "c++", "devtolss"]];
    const pesquisa = input.value.toLowerCase()
    const BreakError = {};

    try {
        array.forEach(item=>{
            if(item.includes(pesquisa)){
                throw BreakError;
            }else{
                const results = document.querySelector(".results");
                results.style.display = "flex";
            }
        });
    }catch(err) {
        window.location.href = pesquisa;
    }
}  




button.addEventListener("click", handleClick);


