// Your code goes here
//This is selecting all the buttons and when clicked they each count how many times they have been clicked.
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function (element){
    element.addEventListener('click', event => {
        element.innerHTML = `Click count: ${event.detail}`;
      });
})

//This is selecting the two images in the middle of the page and when clicked on it changes the background to the image clicked on .

const image = document.querySelectorAll('.img-content');
image.forEach(function(element){
    element.addEventListener('click', function(event){
const imageSource = event.target.src;
    document.body.style.background = `url(${imageSource})`;
});
})
//This allows the top and bottom image when clicked to change the background
const funImage = document.querySelectorAll('img');
funImage.forEach(function(element){
    element.addEventListener('click', function(event){
const fun = event.target.src;
    document.body.style.background = `url(${fun})`;
    });
})






window.addEventListener('scroll',()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled )=== scrollable){
        alert("Youve reached the bottom!")
    }
})

// Array.from()
// node list can use forEach
// getElements return html collection vs node list
// * [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// const workBtn = document.querySelector(".lambda-button")

// workBtn.addEventListener('click',function(event){
//   console.log('Button Clicked')
// })

// const clickHandler = function(event){
//   console.log('Button Clicked')
// }
// workBtn.addEventListener('click',clickHandler)
