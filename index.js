let mealsdb = (some) => {
    let daynamic = `https://www.themealdb.com/api/json/v1/1/search.php?s=${some}`
    console.log(daynamic);
    fetch(daynamic)
        .then(res => res.json())
        .then(del => onpageshow(del.meals))
}

let onpageshow = (show) => {
    // console.log(show)
    let container = document.getElementById('container');
    container.innerHTML = '';

    show.forEach((onshow) => {

        console.log(onshow)
        let mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${onshow.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${onshow.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <button onclick="imran(${onshow.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#imran">
                   details in here
                  </button
                  </div>
                  
        
        `
        container.appendChild(mealDiv)
    })
}
// mealsdb('fish')

searchMeal = () => {
    let search = document.getElementById('search').value;
    console.log(search)
    mealsdb(search)
}
let imran = (imran)=>{
    // console.log(imran)
    let i = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${imran}`
    fetch(i)
    .then(res=>res.json())
    .then(del=>cons(del.meals[0]))
}

let cons = (del)=>{
    console.log(del);
    document.getElementById('exampleModalLabel').innerText=del.strMeal;
    let im = document.getElementById('im');
    im.innerHTML=`
    <img class="img-fluid" src="${del.strMealThumb}">
    
    `

}