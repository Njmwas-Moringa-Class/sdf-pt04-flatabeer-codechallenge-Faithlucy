// Code here 

document.addEventListener("DOMContentLoaded", ()=>{
  fetch(`http://localhost:3000/beers`)
  .then((response) => response.json())
   .then((data) => {
    const beer =data.find((beer) => beer.name ==="Oh So Flattening");
    const beerName= beer.name;
    const beerImage= "https://i.ibb.co/wQ4G0w1/flatiron-brew.png"
    const beerDescription="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
    const beerRevews= [
      "It's flat! Just the way I like it!!",
      "Is this the real beer, is this just fantasy?",
      "I've always hated bubbles going up my nose, so this is absolutely delightful.",
      "Flat straight out of the bottle! No more waiting for the fizziness to subside. Thank you FlattaBeer!! I love you!!!"
    ];
    document.getElementsByClassName('beer-name')[0].textContent=beerName;
    document.getElementsByClassName('beer-image')[0].src=beerImage;
    document.getElementsByClassName('beer-description')[0].textContent=beerDescription;


   })

})

function seeMenu(){
fetch(`http://localhost:3000/beers`)
.then((response)=> response.json())
.then ((data)=> {
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
  newReview.textContent=reviewInput.value
  const reviewsContainer =document.querySelector('#review-list')
  reviewsContainer.appendChild(newReview);

  reviewInput.value ='';
}
addNewReview()
