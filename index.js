const loadPhone = async (search,dataLimit) => {
    const url = (`https://openapi.programming-hero.com/api/phones?search=${search}`);
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data,dataLimit);
}

// after load phone then console function start here.

const displayPhone = (phone,dataLimit) => {
    // console.log(phone);
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerText="";
    // condition for not found phone massages.
    let noPhoneFound = document.getElementById('no-phone-found');
    if(dataLimit && phone.length==0){
        noPhoneFound.classList.remove('d-none')
    }else{
        noPhoneFound.classList.add('d-none')
    }
    // how many phone in display slice and show all button in here
    let showall = document.getElementById('show-all')
     if(phone.length>10){
        phone = phone.slice(0,3);
        showall.classList.remove('d-none')
     }else{
        showall.classList.add("d-none")
     }
     
    phone.forEach(phones => {
        // console.log(element)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-2" >
                <img src="${phones.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phones.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
    loadder(false);
}
// after load phone then console function end here.
// common function processing search 

const processing = (dataLimit)=>{
    loadder(true);
    const inputSearch = document.getElementById('search-input').value;
    loadPhone(inputSearch,dataLimit);
}

// btn click event start here and loadPhone call in here.
document.getElementById('btn').addEventListener('click',function(){
    // loader call in here
   processing(10);
})
// spinner function start in here
const loadder = isloading=>{
    let spinner = document.getElementById('spinner');
    if(isloading){
        spinner.classList.remove('d-none')
    }else{
        spinner.classList.add('d-none')
    }
}
// spinner function end in here

// this the not best solution but it's works now 
// btn-show-all click event function in here
document.getElementById('show-all-btn').addEventListener('click',function(){
    processing()
   
})




// loadPhone();