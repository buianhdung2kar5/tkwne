import { drawProduct } from "./drawkho.js";
import { params } from "./params.js";

drawProduct()
// search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");

const search = () =>{
    params.q=inputSearch.value;
    drawProduct();
}

buttonSearch.addEventListener("click", function(){
    search();
})
inputSearch.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        search();
    }
})
// search
// filter
const filter = document.querySelector("#filter");

filter.addEventListener("change",function(e){
    switch (e.target.value) {
        case "macdinh":
            params.sort="";
            params.order="";
            break;
        case "thapdencao":
                params.sort="price";
                params.order="asc";
            break;
        case "caodenthap":
                params.sort="price";
                params.order="desc"
            break;
        default:
            break;
    }
    drawProduct();
})
// filter
// pagi
const pagiPrev = document.querySelector("#pagiPrev");
const pagiNext = document.querySelector("#pagiNext");
const pagiNumber = document.querySelector("#pagiNumber");

pagiNext.addEventListener("click",function(){
    if(params.page < 3){
        params.page = params.page + 1;
    drawProduct();
    pagiNumber.innerHTML = params.page;
    }
});
pagiPrev.addEventListener("click",function(){
    if(params.page > 1){
        params.page = params.page - 1;
    drawProduct();
    pagiNumber.innerHTML = params.page;
    }
});

// pagi
