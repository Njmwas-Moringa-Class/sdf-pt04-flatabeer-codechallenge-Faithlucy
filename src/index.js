// Code here 
const BASE_URL ="http://localhost:3000/beers"

document.addEventListenera("DOMcontentloaded")

function seeBeerDetails (){
  fetch(`${BASE_URL}`)
  .then(response => response.json())
  .then(data => {
    const firstBeer = data[0]

    const beerName= firstBeer.name;
    const beerImage=firstBeer.image_url;
    const beerDescription= firstBeer.description
    const beerReviews= firstBeer.reviews.join(',');

    document.getElementById('beer-name'),textContent = beerName;
    document.getElementById('beer-image').src =beerImage;
    document.getElementById('beer-description').textContent = beerDescription;
    document.getElementById('beer-reviews').textContent=`Reviews : ${beer-reviews}`;
  })
  .catch(error => console.error ('Error fetching beer data:', error))
}
seeBeerDetails()

function seeMenu(){
fetch(`${BASE_URL}`)
.then(response => response.json())
.then (data=> {
  const navElement= document.querySelector('nav');
  const beerMenu = document.createElement("ul");

  data.forEach(beer => {
    const menuItem =document.createElement ('li');
    menuItem.textContent= beer.name;
    beerMenu.appendChild(menuItem);
  });

  navElement.appendChild(beerMenu);
})
.catch(error => console.error ("Error fetching beer data:",error))
}
seeMenu()

function addNewReview(){
  const reviewForm= document.querySelector('#review-form')
  reviewForm.addEventListener('submit',function(event) {
    event.preventDefault();
  })

  const reviewInput = document.querySelector ("#review")
  const newReview = document.createElement ('p')
  reviewElement.textContent= newReview;

  const reviewsContainer =document.querySelector('#review-list')
  reviewsContainer.appendChild(reviewElement);

  reviewInput.value ='';
}
addNewReview(
  
)
