import data from '../DATA.json';

const listRestoElement = document.querySelector("#listResto");
listRestoElement.innerHTML = "";
const restaurants = data.restaurants;

restaurants.forEach(restaurant => {
    listRestoElement.innerHTML += `
                <div class="resto-card">
                    <div class="resto-card-header">
                        <img src="${restaurant.pictureId}">
                        <p>${restaurant.city}</p>
                    </div>
                    <div class="resto-card-body">
                        <p class="rating">Rating: <span class="rating-value">${restaurant.rating}/5</span></p>
                        <h3 class="name">${restaurant.name}</h3>
                        <p class="description">${restaurant.description.slice(0, 100)}...</p>                    
                    </div>
                </div>
    `;
    
    
});


