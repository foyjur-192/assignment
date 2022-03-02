
const main = document.getElementById('main');

const searchButton = () => {
  const input = document.getElementById('input-value');
  const error = document.getElementById('error');
  const inputValue = input.value;
  if(isNaN ('inputValue') == 'inputValue'){                 //=== data use later
    error.innerText = "Brand not found";
    input.value="";
    main.innerHTML="";
  }
    else if (inputValue == 'brand'){
      error.innerText="Please give a brand name";
      input.value="";
    }

    else{
      main.innerHTML="";  
      const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
      fetch(url)
      .then(res => res.json())
      .then(data => mobileDetails(data.data))
      input.value="";
      error.innerHTML="";
    }
}


const mobileDetails = (cards) => {
  const main = document.getElementById('listMore');
  const details = cards.slice(0, 20);
  main.innerHTML="";

for(const card of details){
  const div = document.createElement('div');
  div.classList.add('col-lg-4');
  div.classList.add('mb-5');
  div.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.phone_name}</h5>
    <p class="card-text">${card.brand}</p>
    <button href="#" onclick="featureDetail('${card.slug}')" class="btn btn-primary">Explore Features</button>
  </div>
</div>
  
  `
  main.appendChild(div)
}
}

const featureDetail = (slug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`
  fetch(url)
  .then(res => res.json())
  .then(data => detailCard(data.data))
}
    
const detailCard = (cards) => {
  const div = document.createElement("div");
  main.innerHTML="";
  div.innerHTML=`
      <div class="card mb-5 d-flex" style="width: 18rem;">
          <img src="${cards.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h3 class="card-title">${cards.brand}</h3>
              <p class="card-text">${cards.slug}</p>
              <p class="card-text">${cards.name}</p>
              <p class="card-text">${cards.releaseDate}</p>
          </div>
      </div>
  `
  
  main.appendChild(div)
 
 }
