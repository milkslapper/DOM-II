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





//When you get to the bottom of the page a message will pop up saying you have reached the bottom of the page
window.addEventListener('scroll',()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled )=== scrollable){
        alert("Youve reached the bottom!")
    }
})
//when mouse goes over any p tags the font changes color
const paragraphs = document.querySelector('p');
    paragraphs.addEventListener('mouseover',function(event){
        
        document.body.style.color = 'blue';
        
    })
paragraphs.addEventListener('mouseleave',function(event){
    
    document.body.style.color = 'black';
})

const container = document.querySelector('header')
container.addEventListener('click',function(event){
    document.body.style.background = 'gray';
});

//Using preventDefault on navigation links and stop Propagation to keep the parent object from being clicked when one of the nav links is clicked. 
const navigation = document.querySelectorAll('.nav-link')
navigation.forEach(function(element){
element.addEventListener('click',function(event){
    event.preventDefault()
    event.stopPropagation()
    document.body.style.background = 'white';
    
});
})



