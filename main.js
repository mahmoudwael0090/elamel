let output = document.getElementById("outputs");
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let submit = document.getElementById("submit");
let history = document.getElementById("history");
let daty = document.getElementById("daty");
let company = document.getElementById("company");
let mood = 'create';
let tmp;



let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}

submit.addEventListener("click", (eo) => {

    let newPro = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        company:company.value,
        discount:discount.value.toLowerCase(),
    }
    
    
    datapro.push(newPro);
    localStorage.setItem('product', JSON.stringify(datapro))
    window.location.reload()

})
let tabel = '';
for(let i = 0 ; i < datapro.length ; i++){

tabel += `
<tr>
                    <td>${datapro[i].title + " " + datapro[i].company}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads - datapro[i].discount}</td>

                    <td><button onclick="updtaeData(${i})" id="update">Update</button></td>
                    <td><button onclick="deletData(${i})" id="delet">Delet</button></td>
                </tr>
`;

}
document.getElementById("tbody").innerHTML = tabel;


let searchMood = 'title';

function getSearchMood(id){
    let search = document.getElementById('search');
    if (id == 'searchTitle') {
        searchMood = 'title';
        search.placeholder = 'Search By Title';
    }else{
        searchMood = 'taxes';
        search.placeholder = 'Search By Exp';
    }
search.focus()
    console.log(searchMood)
}


function searchData(value){
    let tabel = '';
    if (searchMood == 'title') {
        for(let i = 0; i < datapro.length;i++){
            if (datapro[i].title.includes(value.toLowerCase())) {
                tabel += `
<tr>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads - datapro[i].discount}</td>
                    <td><button id="update">Update</button></td>
                    <td><button id="delet">Delet</button></td>
                </tr>
`;
            }
        }
    }else{
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].taxes.includes(value.toLowerCase())) {
                tabel += `
<tr>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads - datapro[i].discount}</td>
                    <td><button id="update">Update</button></td>
                    <td><button id="delet">Delet</button></td>
                </tr>
`;
            }
        }
    }
    document.getElementById("tbody").innerHTML = tabel;
}

function updtaeData(i){
    title.value = datapro[i].title;

    price.value = datapro[i].price;

    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    submit.innerHTML = "Update"
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth',
    })
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
}

function deletData(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    window.location.reload()
}
function historydata(i){

    const d = new Date();
let datae = d.toDateString();
    swal({
        title: datae,
      });

}


const da = new Date();

let dataee = da.toLocaleDateString();
let dataeea = da.toLocaleTimeString();
daty.innerHTML = dataeea;
document.getElementById("datyy").innerHTML = dataee;

